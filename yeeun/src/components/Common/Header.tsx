import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  return (
    <header
      css={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '80px',
        backgroundColor: '#fff',
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: '100%',
          left: '0',
          width: '100%',
          height: '3px',
          boxShadow: '0 2px 5px 1px rgba(64, 60, 67, .16)',
        },
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 80px',
        }}
      >
        <h1
          css={{
            fontSize: '25px',
            fontWeight: '800',
          }}
        >
          Where in the world?
        </h1>
        <button
          css={{
            fontSize: '16px',
            fontWeight: '600',
          }}
        >
          <FontAwesomeIcon icon={faMoon} style={{ color: '#111517' }} />

          <span css={{ paddingLeft: '5px' }}>Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
