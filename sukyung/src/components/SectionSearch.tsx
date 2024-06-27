import { useRef, useState } from 'react'
import classes from './section.module.css'

export default function SectionSearch() {
  const linkRef = useRef<HTMLInputElement>(null)
  const [linkInput, setLinkInput] = useState('')
  const [blankError, setBlankError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkInput(e.target.value)
  }
  const handleLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (linkInput === '') {
      setBlankError(true)
      linkRef.current?.focus()
      return
    }

    setBlankError(false)

    const encodeURL = encodeURIComponent(linkInput.replace(/\s/g, ''))
    // console.log(encodeURL)

    try {
      fetch('/api/v1/shorten', {
        method: 'POST',
        headers: {
          Accept: 'application / json',
        },
        body: JSON.stringify({
          url: encodeURL,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          if (!result.ok) throw new Error('Something wrong')
        })
    } catch (error) {
      // console.log(error)
    }
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
