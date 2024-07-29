import { useState } from 'react';
import FilterSelect from '../components/main/form/FilterSelect';
import SearchInput from '../components/main/form/SearchInput';
import CountryList from '../components/main/list/CountryList';
import { useCountriesData } from '../hooks/useData';
import Wrapper from '../layout/Wrapper';

export default function MainPage() {
  const [searchInput, setSearchInput] = useState('');
  const [filterSelect, setFilterSelect] = useState('Filter By Region');
  const { data: countries, isLoading } = useCountriesData(
    searchInput,
    filterSelect
  );

  return (
    <Wrapper>
      <h2 className="screen_out">메인 페이지</h2>
      <div className="px-[40px] md:px-[70px]">
        <div className="flex md:block justify-between py-[45px] md:pb-0">
          <SearchInput
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            filterSelect={filterSelect}
          />
          <FilterSelect
            countries={countries}
            setFilterSelect={setFilterSelect}
            setSearchInput={setSearchInput}
          />
        </div>
        <CountryList countries={countries} isLoading={isLoading} />
      </div>
    </Wrapper>
  );
}
