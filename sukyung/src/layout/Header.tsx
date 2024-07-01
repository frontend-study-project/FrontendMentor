import classes from './header.module.css'
import logoImg from '../assets/logo.svg'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuClick = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <header className={classes.head_main}>
      <h1>
        <a href="#" className={classes.link_logo}>
          <img src={logoImg} alt="Shortly" />
        </a>
      </h1>
      <button type="button" className={classes.btn_menu} onClick={handleMenuClick}>
        <MenuIcon>더보기</MenuIcon>
      </button>
      <div className={classes.wrap_utils}>
        <nav className={classes.nav_main}>
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
        <div className={classes.box_util}>
          <button type="button" className={classes.btn_login}>
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
