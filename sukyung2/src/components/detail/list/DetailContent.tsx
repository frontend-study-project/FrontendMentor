import ShadowBox from './ShadowBox';
import BoldText from './BoldText';
import { useCountryData } from '../../../hooks/useData';

export default function DetailContent({ country }) {
  const { data, isLoading } = useCountryData(country);

  if (isLoading) return <div>{country} Loading...</div>;

  return (
    <div className="flex items-center">
      <img
        src={data.flags.png}
        alt=""
        width={560}
        height={400}
        className="mr-[120px] bg-dark-blue"
      />
      <div className="inline-block flex-grow">
        <strong className="block pb-[40px] font-extrabold text-[25px]">
          country
        </strong>
        <ul className="flex flex-col flex-wrap w-full h-[160px]">
          <BoldText bold="Native Name: "></BoldText>
          <BoldText bold="Population: ">
            <span>{data.population}</span>
          </BoldText>
          <BoldText bold="Region: ">{data.region}</BoldText>
          <BoldText bold="Sub Region: ">{data.subregion}</BoldText>
          <BoldText bold="Capital: ">{data.capital}</BoldText>
          <BoldText bold="Top Level Domain: ">{data.tld}</BoldText>
          {/*<BoldText bold="Currencies: ">{data.currencies}</BoldText>*/}
          <BoldText bold="Languages: ">
            {Object.values(data.languages).map((language) => {
              console.log(language);
            })}
          </BoldText>
        </ul>
        <div>
          <strong className="mr-[15px] font-semibold text-[16px]">
            Border Countries:
          </strong>
          <ul className="inline-block">
            <ShadowBox>Country</ShadowBox>
            <ShadowBox>Country1</ShadowBox>
            <ShadowBox>Country1</ShadowBox>
          </ul>
        </div>
      </div>
    </div>
  );
}
