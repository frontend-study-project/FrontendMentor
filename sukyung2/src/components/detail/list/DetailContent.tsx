import ShadowBox from './ShadowBox';
import BoldText from './BoldText';
import { useCountryData } from '../../../hooks/useData';

export default function DetailContent({ country }) {
  const { data, isLoading } = useCountryData(country);

  if (isLoading) return <div>{country} Loading...</div>;

  return (
    <div className="flex items-center dark:text-white">
      <img
        src={data.flags.png}
        alt={data.flags.alt}
        width={560}
        height={400}
        className="mr-[120px] bg-dark-blue"
      />
      <div className="inline-block flex-grow">
        <strong className="block pb-[40px] font-extrabold text-[25px]">
          {country}
        </strong>
        <ul className="flex flex-col flex-wrap w-full h-[160px]">
          <BoldText bold="Native Name: ">
            {Object.values(data.name.nativeName).slice(-1)[0]?.common}
          </BoldText>
          <BoldText bold="Population: ">
            <span>{data.population.toLocaleString()}</span>
          </BoldText>
          <BoldText bold="Region: ">{data.region}</BoldText>
          {data.subregion && (
            <BoldText bold="Sub Region: ">{data.subregion}</BoldText>
          )}
          <BoldText bold="Capital: ">{data.capital}</BoldText>
          <BoldText bold="Top Level Domain: ">{data.tld}</BoldText>
          <BoldText bold="Currencies: ">
            {Object.values(data.currencies)
              .map((currency) => currency.name)
              .join(', ')}
          </BoldText>
          <BoldText bold="Languages: ">
            {Object.values(data.languages)
              .map((language) => language)
              .join(', ')}
          </BoldText>
        </ul>
        {data.borders.length > 0 && (
          <div>
            <strong className="mr-[15px] font-semibold text-[16px]">
              Border Countries:
            </strong>
            <ul className="inline-block">
              {data.borders.length > 1 ? (
                data.borders.map((border) => (
                  <ShadowBox key={border}>{border}</ShadowBox>
                ))
              ) : (
                <ShadowBox>{data.borders[0]}</ShadowBox>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
