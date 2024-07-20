import { ChangeEvent } from 'react';
import SearchIcon from '../../icons/search';

export default function SearchInput({ searchParams, setSearchParams }) {
  const handleSearchCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(event.target.value);
  };

  return (
    <form className="flex w-full max-w-[480px] px-[30px] py-[15px] rounded-[5px] shadow-md bg-white">
      <label htmlFor="country" className="mr-[18px]">
        <SearchIcon color="hsl(0, 0%, 52%)" />
      </label>
      <input
        id="country"
        className="grow"
        type="text"
        placeholder="Search for a country..."
        value={searchParams}
        onChange={handleSearchCountryChange}
      />
    </form>
  );
}
