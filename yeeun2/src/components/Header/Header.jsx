import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header_wrap']}>
        <h1 className={styles.logo}>Shortly</h1>
        <ul className={styles.utils}>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </ul>
      </div>
      <div className={styles.auth}>
        <a href="">Login</a>
        <a href="">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;
