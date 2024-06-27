import { Link, useNavigate, useParams } from 'react-router-dom';
import useApiQuery from '../../hooks/useApi';
import Error from '../Common/Error';

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
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <section>
        <img src={detailCountry.flags.svg} />
        <>
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
        </>
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
    </>
  );
};

export default Detail;
