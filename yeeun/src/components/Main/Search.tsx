import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Box from '../../styles/Box';

const Search = () => {
  return (
    <form className="searchForm">
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
          type="text"
          placeholder="Search for a country..."
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
