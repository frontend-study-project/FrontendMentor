import { Link } from 'react-router-dom';
import MoonIcon from '../components/icons/moon';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClickDarkMode = () => {
    if (isDarkMode) {
      localStorage.theme = 'light';
    } else {
      localStorage.theme = 'dark';
    }
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="fixed z-10 left-0 top-0 w-full flex justify-between items-center h-[80px] px-[80px] md:px-[20px] shadow-lg bg-white dark:bg-dark-blue">
      <h1 className="text-[25px] md:text-[18px] font-extrabold dark:text-white">
        <Link to="/" className="block">
          Where in the world?
        </Link>
      </h1>
      <button
        type="button"
        className="flex items-center font-semibold dark:text-white md:text-[14px]"
        onClick={handleClickDarkMode}
      >
        <span className="mr-[5px]">
          <MoonIcon
            fill="none"
            color={isDarkMode ? '#fff' : 'hsl(200, 15%, 8%)'}
          />
        </span>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
}
