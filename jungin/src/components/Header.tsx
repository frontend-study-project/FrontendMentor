import SearchBar from './SearchBar';
import { Info } from './Info';

export const Header = ({ data, setData }) => {
  return (
    <header className="relative flex flex-col items-center shrink-0 w-screen h-[40%] bg-[url('./assets/images/pattern-bg-mobile.png')] bg-no-repeat bg-cover sm:h-[30%] sm:bg-[url('./assets/images/pattern-bg-desktop.png')]">
      <h1 className="py-8 text-white text-3xl text-center font-semibold sm:text-4xl">IP Address Tracker</h1>
      <SearchBar setData={setData} />
      <Info data={data} />
    </header>
  );
};
