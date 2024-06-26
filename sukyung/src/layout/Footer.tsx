import classes from './footer.module.css'

export default function Footer() {
  return (
    <footer className={classes.wrap_footer}>
      <div className={`inner_cont ${classes.inner_footer}`}>
        <a href="">
          <img src="/src/assets/logo.svg" alt="Shortly" />
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
                  <a href="">Branded Link</a>s
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
                <img src="/src/assets/icon-facebook.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <img src="/src/assets/icon-twitter.svg" alt="twitter" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <img src="/src/assets/icon-pinterest.svg" alt="pinterest" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <img src="/src/assets/icon-instagram.svg" alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
