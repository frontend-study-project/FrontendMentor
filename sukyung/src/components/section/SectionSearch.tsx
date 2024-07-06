import { useRef, useState } from 'react'
import classes from './SectionSearch.module.css'
import ShortenResults from '../list/ShortenResults'
import { ResultListType } from '../../types'
import Spinner from '../Spinner'
import { useMutation } from '@tanstack/react-query'

export default function SectionSearch() {
  const linkRef = useRef<HTMLInputElement>(null)
  const [linkInput, setLinkInput] = useState('')
  const [blankError, setBlankError] = useState(false)
  const [linkList, setLinkList] = useState<ResultListType[]>([])

  const URL = linkInput.replace(/\s/g, '')

  const submitURLMutate = useMutation({
    mutationFn: (URL: string) => {
      return fetch('/api/v1/shorten', {
        method: 'POST',
        body: JSON.stringify({
          url: URL,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setLinkList((prev) => [
            ...prev,
            {
              before: URL,
              after: result.result_url,
            },
          ])
          if (!result.ok) throw new Error('Something wrong')
        })
        .then(() => {
          if (linkRef.current) {
            linkRef.current.value = ''
          }
          // linkRef.current!.value = '' // 이렇게 간단하게 쓸수도 있음
          setLinkInput('')
        })
    },
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkInput(e.target.value)
  }

  const handleLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (linkInput === '') {
      setBlankError(true)
      linkRef.current?.focus()
      return
    }

    setBlankError(false)

    submitURLMutate.mutate(URL)
  }

  return (
    <div className={classes.wrap_search}>
      <div className={`inner_cont ${classes.inner_search}`}>
        <form className={classes.box_search} onSubmit={handleLinkSubmit}>
          <div>
            <label htmlFor="link" className="screen_out">
              link
            </label>
            <input ref={linkRef} id="link" className={blankError ? classes.type_error : ''} type="text" placeholder="Shorten a link here..." onChange={handleInputChange} />
            <button className="btn_bg">Shorten It!</button>
          </div>
          {blankError && <p className={classes.txt_alert}>Please add a link</p>}
        </form>
      </div>
      {submitURLMutate.isPending && <Spinner />}
      <ShortenResults linkList={linkList} />
    </div>
  )
}
