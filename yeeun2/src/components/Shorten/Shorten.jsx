import styles from './Shorten.module.css';
import InputBox from './InputBox';
import ResultBox from './ResultBox';
import { useApi } from '../../hook/useUrl';
import { useState } from 'react';

const Shorten = () => {
  const [inputUrl, setInputUrl] = useState('');
  const { data } = useApi(inputUrl);

  console.log(data?.result_url);

  return (
    <article className={styles.shorten}>
      <InputBox onSubmit={setInputUrl} />
      <ResultBox beforeUrl={inputUrl} afterUrl={data?.result_url} />
    </article>
  );
};

export default Shorten;
