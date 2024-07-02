import { useState } from 'react'
import classes from './ShortenResults.module.css'
import { CopyType, ResultListType } from '../../types'

interface Props {
  linkList: ResultListType[]
}

export default function ShortenResults({ linkList }: Props) {
  const [isCopied, setIsCopied] = useState<CopyType>({
    idx: null,
    tf: false,
  })

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
    <ul className={`inner_cont ${classes.inner_result}`}>
      {linkList.map((item, idx) => (
        <li key={item.after.slice(-6, -1) + idx} className={classes.item_result}>
          <span className={classes.txt_before}>{item.before}</span>
          <span className={classes.txt_after}>{item.after}</span>
          <button type="button" className={`btn_bg ${classes.btn_copy} ${isCopied.idx === idx ? classes.active : ''}`} onClick={() => handleCopyClick(idx)}>
            {isCopied.idx === idx ? 'Copied!' : 'Copy'}
          </button>
        </li>
      ))}
    </ul>
  )
}
