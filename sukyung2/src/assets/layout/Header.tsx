import { Link } from 'react-router-dom';
import MoonIcon from '../components/icons/moon';

export default function Header() {
  return (
    <header className="flex justify-between items-center h-[80px] px-[80px] shadow-lg">
      <h1 className="text-[25px] font-extrabold">
        <Link to="/" className="block">
          Where in the world?
        </Link>
      </h1>
      <button type="button" className="flex items-center font-semibold">
        <span className="mr-[5px]">
          <MoonIcon fill="none" color="hsl(200, 15%, 8%)" />
        </span>
        Dark Mode
      </button>
    </header>
  );
}
