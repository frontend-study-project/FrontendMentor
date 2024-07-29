import { ChangeEvent, useState } from 'react';
import SearchIcon from '../../icons/search';

export default function SearchInput({
  searchInput,
  setSearchInput,
  filterSelect,
}) {
  const [error, setError] = useState('');
  const handleSearchCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (filterSelect !== 'Filter By Region') {
      setSearchInput('');
      alert('Please reset the region selection first.');
      return;
    }
    if (!/[a-zA-Z\s]/g.test(inputValue)) {
      setError('Only English can be entered');
    } else {
      setError('');
    }

    setSearchInput(inputValue);
  };

  return (
    <div>
      <form className="flex w-full max-w-[480px] md:max-w-full md:w-full px-[30px] py-[15px] rounded-[5px] shadow-md bg-white dark:bg-dark-blue">
        <label htmlFor="country" className="mr-[18px]">
          <SearchIcon color="hsl(0, 0%, 52%)" />
        </label>
        <input
          id="country"
          className="grow dark:bg-dark-blue dark:text-very-light-gray"
          type="text"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={handleSearchCountryChange}
        />
      </form>
      {error && <p className="pt-[10px] text-[#ff0000]">{error}</p>}
    </div>
  );
}
