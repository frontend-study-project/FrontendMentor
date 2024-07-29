import logo from "../assets/images/logo-w.svg";
import iconFacebook from "../assets/images/icon-facebook.svg"
import iconTwitter from "../assets/images/icon-twitter.svg"
import iconPinterest from "../assets/images/icon-pinterest.svg"
import iconInstagram from "../assets/images/icon-instagram.svg"

const Footer = () => {
  return (
    <footer className="bg-cl-very-dark-violet">
      <div className="container flex justify-between py-16 mx-auto">
        <div className="logo">
          <img src={logo} alt="Shortly" />
        </div>
        <ul className="flex gap-24">
          <li>
            <span className="font-bold text-white">Features</span>
            <ul className="flex flex-col gap-3 mt-5 text-cl-gray">
              <li className="hover:text-cl-cyan">
                <a href="">Link Shortening</a>
              </li>
              <li className="hover:text-cl-cyan">
                <a href="">Branded Links</a>
              </li>
              <li className="hover:text-cl-cyan">
                <a href="">Analytics</a>
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-white">Resources</span>
            <ul className="flex flex-col gap-3 mt-5 text-cl-gray">
              <li className="hover:text-cl-cyan">
                <a href="">Blog</a>
              </li>
              <li className="hover:text-cl-cyan">
                <a href="">Developers</a>
              </li>
              <li className="hover:text-cl-cyan">
                <a href="">Support</a>
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-white">Company</span>
            <ul className="flex flex-col gap-3 mt-5 text-cl-gray">
              <li className="hover:text-cl-cyan">
                <a href="">About</a>
              </li>
              <li className="hover:text-cl-cyan">
                <a href="">Our Team</a>
              </li>
              <li className="hover:text-cl-cyan">
                <a href="">Careers</a>
              </li>
              <li className="hover:text-cl-cyan">
                <a href="">Contact</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="flex gap-6">
          <li><a href=""><img src={iconFacebook} alt="facebook" /></a></li>
          <li><a href=""><img src={iconTwitter} alt="twitter" /></a></li>
          <li><a href=""><img src={iconPinterest} alt="pinterest" /></a></li>
          <li><a href=""><img src={iconInstagram} alt="instagram" /></a></li>
        </ul> 
      </div>
    </footer>
  )
}

export default Footer