import { useState } from 'react';
import styles from './ResultBox.module.css';

const ResultBox = ({ beforeUrl, afterUrl }) => {
  const [copyStatus, setCopyStatus] = useState(true);

  const onCopy = () => {
    navigator.clipboard.writeText(afterUrl);
    setCopyStatus(!copyStatus);
  };

  return (
    <div className={styles['result_box']}>
      <div className={styles['result_box_wrap']}>
        <p>{beforeUrl}</p>
        <p className={styles['result_url']}>{afterUrl}</p>
      </div>
      {copyStatus && <button onClick={onCopy}>Copy</button>}
      {!copyStatus && (
        <button
          onClick={onCopy}
          style={{ backgroundColor: 'hsl(257, 27%, 26%)', color: '#fff' }}
        >
          Copied
        </button>
      )}
    </div>
  );
};

export default ResultBox;
