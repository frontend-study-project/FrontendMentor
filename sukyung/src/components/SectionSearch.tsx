import { useRef, useState } from 'react'
import classes from './section.module.css'

export default function SectionSearch() {
  const linkRef = useRef<HTMLInputElement>(null)
  const [linkInput, setLinkInput] = useState('')
  const [blankError, setBlankError] = useState(false)

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
        setLinkInput(result.result_url)
        // if (!result.ok) throw new Error('Something wrong')
        // setLinkInput(result.result_url)
      })
  }

  return (
    <div className={classes.wrap_search}>
      <div className="inner_cont">
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
    </div>
  )
}
