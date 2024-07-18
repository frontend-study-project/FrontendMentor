import { Link } from 'react-router-dom';
import { useCountriesData } from '../../../hooks/useData';
import SearchInput from '../form/SearchInput';
import FilterSelect from '../form/FilterSelect';
import { useState } from 'react';

const optionList = ['Filter by Region', 'Africa', 'America'];

export default function CountryList() {
  const { data, isLoading } = useCountriesData();
  const [listedData, setListedData] = useState(data || []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const onFilter = (inputValue: string) => {
    setListedData(inputValue);
  };

  return (
    <>
      <div className="flex justify-between py-[45px]">
        <SearchInput onFilter={onFilter} />
        <FilterSelect id="filterRegion" name="region" optionList={optionList} />
      </div>
      <strong className="screen_out">country list</strong>
      <ul className="flex flex-wrap justify-between gap-[75px]">
        {listedData.map((item) => (
          <li key={item.cca2} className={`mt-[70px] rounded-[10px] shadow-md`}>
            <Link
              to={`/detail/${item.name.official}`}
              className="overflow-hidden block w-[264px] rounded-[10px]"
            >
              <img src={item.flags.png} alt="" className="w-full h-[160px]" />
              <div className="p-[25px]">
                <strong className="block pb-[15px] font-bold text-[18px]">
                  {item.name.official}
                </strong>
                <div>
                  <span className="inline-block pb-[10px] font-semibold">
                    Population: {item.population}
                  </span>
                </div>
                <div>
                  <span className="inline-block pb-[10px] font-semibold">
                    Region:
                  </span>{' '}
                  {item.region}
                </div>
                <div>
                  <span className="inline-block pb-[10px] font-semibold">
                    Captial:
                  </span>{' '}
                  {item.capital}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
