import { Link, useNavigate, useParams } from 'react-router-dom';
import useApiQuery from '../../hooks/useApi';
import { css } from '@emotion/react';
import Error from '../Common/Error';
import Box from '../../styles/Box';

const Detail = () => {
  const navigate = useNavigate();
  const { data, isError, error, isLoading } = useApiQuery();
  const { cca3: code } = useParams();

  const detailCountry = data?.find((c) => c.cca3 === code);
  console.log(detailCountry);

  if (isLoading) return <p>로딩중</p>;
  if (isError) return <Error msg={error?.message || '에러남'} />;

  const filterdCountries =
    detailCountry.borders &&
    data?.filter((c) => detailCountry.borders.includes(c.cca3));

  return (
    <div css={{ maxWidth: '1440px', margin: '0 auto', padding: '0 80px' }}>
      <Box variant="back">
        <button onClick={() => navigate(-1)} css={{ width: '100%' }}>
          Back
        </button>
      </Box>
      <section css={{ display: 'flex' }}>
        <img src={detailCountry.flags.svg} css={{ maxWidth: '50%' }} />
        <div>
          <h2>{detailCountry.name.common}</h2>
          <ul>
            <li>
              Native Name:
              <span>
                {Object.values(detailCountry.name.nativeName).at(-1).common}
              </span>
            </li>
            <li>
              Population: <span>{detailCountry.population}</span>
            </li>
            <li>
              Region: <span>{detailCountry.region}</span>
            </li>
            <li>
              Sub Region: <span>{detailCountry.subregion}</span>
            </li>
            <li>
              Capital: <span>{detailCountry.capital}</span>
            </li>
          </ul>
          <ul>
            <li>
              Top Level Domain: <span>{detailCountry.tld}</span>
            </li>
            <li>
              Currencies:
              <span>{Object.values(detailCountry.currencies)[0].name}</span>
            </li>
            <li>
              Languages:
              <span>
                {Object.values(detailCountry.languages).sort().join(', ')}
              </span>
            </li>
          </ul>
        </div>
        {filterdCountries && (
          <>
            Border Countries:
            <ul>
              {filterdCountries.map((li) => (
                <li key={li.cca3}>
                  <Link to={`/${li.cca3}`}>{li.name.common}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
};

export default Detail;
