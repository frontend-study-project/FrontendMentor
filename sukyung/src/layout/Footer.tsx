import classes from './footer.module.css'
import { Logo, IconFacebook, IconTwitter, IconPinterest, IconInstagram } from '../assets/svg'

export default function Footer() {
  return (
    <footer className={classes.wrap_footer}>
      <div className={`inner_cont ${classes.inner_footer}`}>
        <a href="">
          <Logo width={121} height={33} className={classes.ico_logo} />
        </a>
        <nav className={classes.nav_footer}>
          <ul className={classes.list_depth1}>
            <li>
              <a href="">Features</a>
              <ul className={classes.list_depth2}>
                <li>
                  <a href="">Link Shortening</a>
                </li>
                <li>
                  <a href="">Branded Links</a>
                </li>
                <li>
                  <a href="">Analytics</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">Resources</a>
              <ul className={classes.list_depth2}>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Developers</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">Company</a>
              <ul className={classes.list_depth2}>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className={classes.box_sns}>
          <strong className="screen_out">sns list</strong>
          <ul>
            <li>
              <a href="" target="_blank">
                <IconFacebook width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <IconTwitter width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <IconPinterest width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <IconInstagram width={30} height={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
