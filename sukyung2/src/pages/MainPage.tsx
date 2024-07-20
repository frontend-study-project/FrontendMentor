import { useEffect, useState } from 'react';
import FilterSelect from '../components/main/form/FilterSelect';
import SearchInput from '../components/main/form/SearchInput';
import CountryList from '../components/main/list/CountryList';
import { useCountriesData } from '../hooks/useData';
import Wrapper from '../layout/Wrapper';

const optionList = ['Filter by Region', 'Africa', 'America'];

export default function MainPage() {
  const [searchParams, setSearchParams] = useState('');
  const {
    data: countries,
    isLoading,
    refetch,
  } = useCountriesData(searchParams);

  useEffect(() => {
    if (countries) {
      refetch();
    }
  }, [countries]);
  return (
    <Wrapper>
      <h2 className="screen_out">메인 페이지</h2>
      <div className="flex justify-between py-[45px]">
        <SearchInput
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <FilterSelect id="filterRegion" name="region" optionList={optionList} />
      </div>
      <CountryList countries={countries} isLoading={isLoading} />
    </Wrapper>
  );
}
