import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-assets-icons';
import Box from '../../styles/Box';
import { useRef, useState } from 'react';

const Search = ({ setCountryData }) => {
  const searchInputRef = useRef();
  const [search, setSearch] = useState('');

  const onSearch = (e) => {
    e.preventDefault();
    setCountryData(search.trim());
  };

  return (
    <form className="searchForm" onSubmit={onSearch}>
      <Box
        variant="search"
        customCss={{
          display: 'flex',
          height: '50px',
          backgroundColor: '#fff',
        }}
      >
        <button css={{ width: '70px', height: '100%', display: 'block' }}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: '#858585' }}
          />
        </button>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          value={search}
          css={{
            width: '100%',
            marginRight: '35px',
            color: '#858585',
            outline: 'none',
            '&:focus .searchForm &': {
              border: '2px solid #f00',
            },
          }}
        />
      </Box>
    </form>
  );
};

export default Search;
