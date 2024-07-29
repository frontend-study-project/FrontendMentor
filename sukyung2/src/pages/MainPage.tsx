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
      <div className="flex justify-between py-[45px]">
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
    </Wrapper>
  );
}
