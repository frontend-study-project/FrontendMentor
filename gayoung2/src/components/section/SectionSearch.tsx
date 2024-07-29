import { useState } from 'react';
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
      setLinkList((prevList) => [...prevList, { url: inputValue, result_url: data.result_url }]);
      setInputValue("")
    },
    onError: (error) => {
      console.error('Error creating shortened link:', error);
    },
  });


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
        </div>
        {isPending && <Spinner />}
        <ShortenResults linkList={linkList} />
      </div>
  );
}
