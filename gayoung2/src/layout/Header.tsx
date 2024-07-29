import styles from './layout.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className={styles.head_main}>
      <h1>
        <a href="#" className={styles.link_logo}>
          <img src="/assets/logo.svg" alt="Shortly" />
        </a>
      </h1>
      <button type="button" className={styles.btn_menu} onClick={handleMenuClick}>
        <MenuIcon>더보기</MenuIcon>
      </button>
      <div className={`${styles.wrap_utils} ${isOpen ? styles.active : ''}`}>
        <nav className={styles.nav_main}>
          <h2 className="screen_out">주요 서비스</h2>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </nav>
        <div className={styles.box_util}>
          <button type="button" className={styles.btn_login}>
            Login
          </button>
          <button type="button" className="btn_bg">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}
