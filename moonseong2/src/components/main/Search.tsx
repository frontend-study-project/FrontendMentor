import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useState } from "react";
import { throttle } from 'es-toolkit';

interface SearchProps {
  search: string;
  onSearch: (search: string) => void;  
}
 
const Search = ({ onSearch }: SearchProps) => {
  const [search, setSearch] = useState('');

  const throttleSearch = useCallback(throttle((search: string) => {
    onSearch(search);
  }, 500), []);

  const handleKeyDown: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setSearch(value);
    throttleSearch(value);
  };

  return (
    <div className="search h-full w-[480px] bg-dark-mode-100 rounded-md shadow-md flex items-center px-8 gap-5">
      <FontAwesomeIcon icon={faSearch} size="lg" color="white" />
      <input
        className="bg-transparent flex-1 outline-none text-white"
        value={search}
        placeholder="Search for a country..."
        onChange={handleKeyDown}
      />
    </div>
  );
}
 
export default Search;