import arrow from '../assets/images/icon-arrow.svg';

export const SearchBar = () => {
  return (
    <form className="flex w-10/12 rounded-2xl overflow-hidden sm:w-[50%]">
      <input type="text" placeholder="Search for any IP address or domain" className="flex-grow min-w-0 px-7 py-5 text-xl outline-none" />
      <button type="submit" className="flex justify-center items-center px-8 bg-very-dark-grey hover:bg-gray-600">
        <img src={arrow} />
      </button>
    </form>
  );
};
