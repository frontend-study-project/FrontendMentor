import { useState } from 'react';
import FilterSelect from '../components/main/form/FilterSelect';
import SearchInput from '../components/main/form/SearchInput';
import CountryList from '../components/main/list/CountryList';
import { useCountriesData } from '../hooks/useData';
import Wrapper from '../layout/Wrapper';

export default function MainPage() {
  const [searchParams, setSearchParams] = useState('');
  const { data: countries, isLoading } = useCountriesData(searchParams);

  return (
    <Wrapper>
      <h2 className="screen_out">메인 페이지</h2>
      <div className="flex justify-between py-[45px]">
        <SearchInput
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <FilterSelect countries={countries} />
      </div>
      <CountryList countries={countries} isLoading={isLoading} />
    </Wrapper>
  );
}
