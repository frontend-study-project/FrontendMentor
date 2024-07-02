import { Link } from 'react-router-dom';
import Box from '../../styles/Box';

const Item = ({ data }) => {
  return (
    <div
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '70px 0',
      }}
    >
      {data?.map((c) => (
        <Box variant="countriesList" key={c.cca3} customCss={{ padding: 0 }}>
          <Link to={`/${c.cca3}`}>
            <div
              css={{
                position: 'relative',
                paddingBottom: '72.25%',
              }}
            >
              <img
                src={c.flags.svg}
                alt={c.flags.alt}
                css={{
                  position: 'absolute',
                  height: '100%',
                  top: '0',
                  left: '50%',
                  transform: 'translatex(-50%)',
                }}
              />
            </div>

            <div css={{ padding: '25px' }}>
              <h2>{c.name.common}</h2>
              <div>
                <p>Population: {c.population}</p>
                <p>Region: {c.region}</p>
                <p>Capital: {c.capital}</p>
              </div>
            </div>
          </Link>
        </Box>
      ))}
    </div>
  );
};

export default Item;
