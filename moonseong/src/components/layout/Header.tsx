
import AuthButton from './AuthButton';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="w-[1100px] mt-10 mx-auto flex justify-between">
      <div className='flex'>
        <Logo />
        <Nav />
      </div>
      <div className="auth-buttos flex gap-1">
        <AuthButton>Login</AuthButton>
        <AuthButton>Sign Up</AuthButton>
      </div>
    </header>
  )
};

export default Header;