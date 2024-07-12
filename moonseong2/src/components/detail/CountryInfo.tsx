import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { useNavigate, useParams } from "react-router-dom";
import { useFetchCountry } from "../../hooks/useCountry";
import Paragraph from "../common/Paragraph";
import CountryLink from "./CountryLink";
import { Country } from "../../types/country.type";

const countryProps = ['nativeName', 'population', 'region', 'subregion', 'capital', 'topLevelDomain', 'currencies', 'languages'] as (keyof Country)[];

const CountryInfo = () => {
  const navigate = useNavigate();
  const { countryId = '' } = useParams();
  const { data: country, error, isFetching } = useFetchCountry(countryId);

  if (error && !isFetching) {
    throw error
  }

  return (
    <div className="mt-20">
      <div>
        <button 
          className="h-10 w-32 flex justify-center items-center gap-2 shadow-2xl rounded-md bg-dark-mode-100 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} color="white" />
          <span className="text-gray-300">Back</span>
        </button>
      </div>
      <div className="flex gap-[140px] mt-[73px]">
        <div className="w-[560px]">
          <img src={country!.flag} />
        </div>
        <div className="flex justify-center flex-1 flex-col">
          <h2 className="text-white text-2xl font-bold mb-8">{country!.name}</h2>
          <div className="grid grid-rows-5 grid-flow-col grid-cols-2 gap-2 ">
            {countryProps.map((key) => (
              <Paragraph key={key} label={key}>{country![key].toLocaleString()}</Paragraph>
            ))}
          </div>
          <div className="mt-16">
            <Paragraph label="Border Countries">
              <div className="w-full grid gap-2 ml-3 grid-cols-4">
                {country!.borderCountries.map((other) => (
                  <CountryLink key={other} to={`/${other}`}>{other}</CountryLink>
                ))}
              </div>
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CountryInfo;
