const Nav = () => (
  <nav className='flex'>
    <ul className='flex gap-8 items-center'>
      {['Features', 'Pricing', 'Resources'].map((item) => (
        <li 
          className='text-lg font-bold text-main-color cursor-pointer hover:text-gray-600 transition-colors'
          key={item}>{item}</li>
      ))}
    </ul>
  </nav>
)

export default Nav;