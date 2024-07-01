import { useRef, useState } from 'react'
import classes from './SectionSearch.module.css'

interface resultListType {
  before: string
  after: string
}

interface copyType {
  idx: number | null
  tf: boolean
}

export default function SectionSearch() {
  const linkRef = useRef<HTMLInputElement>(null)
  const [linkInput, setLinkInput] = useState('')
  const [blankError, setBlankError] = useState(false)
  const [linkList, setLinkList] = useState<resultListType[]>([])
  const [isCopied, setIsCopied] = useState<copyType>({
    idx: null,
    tf: false,
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

    const URL = linkInput.replace(/\s/g, '')

    const data = new URLSearchParams()
    data.append('url', URL)

    fetch('/api/v1/shorten', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.result_url)
        setLinkList((prev) => [
          ...prev,
          {
            before: URL,
            after: result.result_url,
          },
        ])
        // if (!result.ok) throw new Error('Something wrong')
      })
      .then(() => {
        linkRef.current.value = ''
      })
  }

  const handleCopyClick = (idx: number) => {
    navigator.clipboard.writeText(linkList[idx].after)
    setIsCopied({
      idx: idx,
      tf: true,
    })

    setTimeout(() => {
      setIsCopied({
        idx: null,
        tf: false,
      })
    }, 1000)
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
      <ul className={`inner_cont ${classes.inner_result}`}>
        {linkList.map((item, idx) => (
          <li key={item.after.slice(-6, -1) + idx} className={classes.item_result}>
            <span className={classes.txt_before}>{item.before}</span>
            <span className={classes.txt_after}>{item.after}</span>
            <button type="button" className={`btn_bg ${isCopied.idx === idx ? classes.active : ''}`} onClick={() => handleCopyClick(idx)}>
              {isCopied.idx === idx ? 'Copied!' : 'Copy'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
