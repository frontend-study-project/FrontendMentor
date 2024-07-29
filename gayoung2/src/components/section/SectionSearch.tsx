import {useEffect, useState} from 'react';
import classes from './SectionSearch.module.css';
import ShortenResults from '../list/ShortenResults';
import Spinner from '../Spinner';
import { useMutation } from '@tanstack/react-query';
import { postShortenAPI } from "../../api/shorten.ts";

export interface ResultType {
  url: string,
  result_url: string
}

export default function SectionSearch() {
  const [inputValue, setInputValue] = useState<string>("");
  const [linkList, setLinkList] = useState<ResultType[]>([]);

  const { mutate: createShorten, isPending } = useMutation({
    mutationFn: postShortenAPI,
    onSuccess: (data) => {
      const newLink = { url: inputValue, result_url: data.result_url }
      const updatedLinkList = [...linkList, newLink]
      setLinkList(updatedLinkList);
      localStorage.setItem('linkList', JSON.stringify(updatedLinkList))
      setInputValue("")
    },
    onError: (error) => {
      console.error('Error creating shortened link:', error);
    },
  });

  // 로컬스토리지에 저장
  useEffect(() => {
    // 컴포넌트 마운트 시 로컬 스토리지에서 링크 리스트 불러오기
    const savedLinkList = localStorage.getItem('linkList');
    if (savedLinkList) {
      setLinkList(JSON.parse(savedLinkList));
    }
  }, []);


  const handleLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      createShorten(inputValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
      <div className={classes.wrap_search}>
        <div className={`inner_cont ${classes.inner_search}`}>
          <form className={classes.box_search} onSubmit={handleLinkSubmit}>
            <div>
              <label htmlFor="link" className="screen_out">
                link
              </label>
              <input
                  id="link"
                  value={inputValue}
                  type="text"
                  placeholder="Shorten a link here..."
                  onChange={handleInputChange}
              />
              <button type="submit" className="btn_bg">Shorten It!</button>
            </div>
          </form>
          {inputValue === "" && (<p className={classes.txt_alert}>Please add a link</p>)}
        </div>
        {isPending && <Spinner />}
        <ShortenResults linkList={linkList} />
      </div>
  );
}
