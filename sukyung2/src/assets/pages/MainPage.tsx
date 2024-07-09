import FilterSelect from '../components/main/form/FilterSelect';
import SearchInput from '../components/main/form/SearchInput';
import CountryList from '../components/main/list/CountryList';
import Wrapper from '../layout/Wrapper';

const optionList = ['Filter by Region', 'Africa', 'America'];

export default function MainPage() {
  return (
    <Wrapper>
      <div className="flex justify-between pt-[45px]">
        <SearchInput />
        <FilterSelect id="filterRegion" name="region" optionList={optionList} />
      </div>
      <CountryList />
    </Wrapper>
  );
}
