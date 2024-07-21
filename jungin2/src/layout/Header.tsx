import logo from "../assets/images/logo.svg"

const Header = () => {
  return (
    <header>
      <div className="container flex items-center mx-auto my-12 gap-11">
        <h1>
          <a href="">
            <img src={logo} alt="Shortly" />
          </a>
        </h1>
        <div className="flex items-center justify-between font-bold grow">
          <nav>
            <ul className="flex gap-8 text-cl-grayish-violet">
              <li>
                <a href="#" className="hover:text-cl-very-dark-violet">Features</a>
              </li>
              <li>
                <a href="#" className="hover:text-cl-very-dark-violet">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:text-cl-very-dark-violet">Resources</a>
              </li>
            </ul>
          </nav>
          <div className="flex gap-11">
            <button className="text-cl-grayish-violet hover:text-cl-very-dark-violet">Login</button>
            <button className="px-5 py-2 text-white rounded-[40px] bg-cl-cyan hover:bg-cl-cyan-hover">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header