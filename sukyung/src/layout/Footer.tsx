import classes from './footer.module.css'

export default function Footer() {
  return (
    <footer className={classes.wrap_footer}>
      <div className="inner_cont">
        <a href="#">
          <img src="/src/assets/logo.svg" alt="Shortly" />
        </a>
        <nav>
          <ul>
            <li>
              Features
              <ul>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>
            </li>
            <li>
              Resources
              <ul>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
              </ul>
            </li>
            <li>
              Company
              <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="box_sns">
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
