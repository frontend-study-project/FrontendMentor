import { ChangeEvent, useState } from 'react';
import SearchIcon from '../../icons/search';
import { useFilterCountries } from '../../../hooks/useData';

export default function SearchInput({ onFilter }) {
  const [searchCountryInput, setSearchCounntryInput] = useState('');

  const data = useFilterCountries(searchCountryInput);

  const handleSearchCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inpValue = event.target.value;
    setSearchCounntryInput(inpValue);
    onFilter(data);
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
        value={searchCountryInput}
        onChange={handleSearchCountryChange}
      />
    </form>
  );
}
