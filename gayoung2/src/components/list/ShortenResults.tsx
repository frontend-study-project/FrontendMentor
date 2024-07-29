import { useState } from 'react'
import classes from './ShortenResults.module.css';

type Props = {
  url: string,
  result_url: string
}

type CopyType = {
  idx: number | null,
  copied: boolean
}

export default function ShortenResults({ linkList }: Props) {
  const [isCopied, setIsCopied] = useState<CopyType>({
    idx: null,
    copied: false,
  })

  const handleCopyClick = (idx: number) => {
    navigator.clipboard.writeText(linkList[idx].result_url)

    setIsCopied({
      idx: idx,
      copied: true,
    })
  }

  return (
    <ul className={`inner_cont ${classes.inner_result}`}>
      {linkList.map((item, idx) => (
        <li key={idx} className={classes.item_result}>
          <span className={classes.txt_before}>{item.url}</span>
          <span className={classes.txt_after}>{item.result_url}</span>
          <button type="button" className={`btn_bg ${classes.btn_copy} ${isCopied.idx === idx ? classes.active : ''}`} onClick={() => handleCopyClick(idx)}>
            {isCopied.idx === idx ? 'Copied!' : 'Copy'}
          </button>
        </li>
      ))}
    </ul>
  )
}
