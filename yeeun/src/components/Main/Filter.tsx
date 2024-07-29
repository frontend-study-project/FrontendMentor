import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useApiQuery from '../../hooks/useApi';
import Box from '../../styles/Box';
import Error from '../Common/Error';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { css } from '@emotion/react';

const Filter = () => {
  const { data, isError, error, isLoading } = useApiQuery();
  const regions = [...new Set(data?.map((r) => r.region))].sort();

  if (isLoading) return <p>로딩중</p>;
  if (isError) return <Error msg={error?.message || '에러남'} />;

  return (
    <form css={{ position: 'relative' }}>
      <Box variant="filter">
        <button
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '37px',
            padding: '0 20px',
            textAlign: 'left',
          }}
        >
          <span>Filter by Region</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </Box>
      <Box
        variant="filter"
        customCss={{
          position: 'absolute',
          top: '100%',
          left: '0',
          padding: '20px',
          zIndex: '2',
        }}
      >
        <ul>
          {regions.map((r, idx) => (
            <li key={idx} css={{ padding: '.2em 0' }}>
              <button
                css={css`
                  width: 100%;
                  text-align: left;
                  &:hover {
                    color: Red;
                  }
                `}
              >
                {r}
              </button>
            </li>
          ))}
        </ul>
      </Box>
    </form>
  );
};

export default Filter;
