import { useState } from 'react';
import styles from './InputBox.module.css';

const InputBox = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(input);
  };

  return (
    <article className={styles['input_box']}>
      <div className={styles['input_box_wrap']}>
        <div className={styles['input_box_inner']}>
          <input
            placeholder="Shorten a link here..."
            value={input}
            onChange={handleInput}
          />
          <label>Shorten URL</label>
          {/* <p className={styles.error_msg}>Please add a link</p> */}
        </div>
        <button onClick={handleSubmit}>Shorten It!</button>
      </div>
    </article>
  );
};

export default InputBox;
