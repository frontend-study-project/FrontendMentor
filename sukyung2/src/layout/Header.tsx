import { Link } from 'react-router-dom';
import MoonIcon from '../components/icons/moon';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClickDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  console.log(isDarkMode);
  return (
    <header className="fixed z-10 left-0 top-0 w-full flex justify-between items-center h-[80px] px-[80px] shadow-lg bg-white dark:bg-dark-blue">
      <h1 className="text-[25px] font-extrabold dark:text-white">
        <Link to="/" className="block">
          Where in the world?
        </Link>
      </h1>
      <button
        type="button"
        className="flex items-center font-semibold dark:text-white"
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
