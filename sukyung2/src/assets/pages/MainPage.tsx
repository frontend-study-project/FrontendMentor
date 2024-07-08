import FilterSelect from '../components/main/form/FilterSelect';
import SearchInput from '../components/main/form/SearchInput';
import Wrapper from '../layout/Wrapper';

const optionList = ['Filter by Region', 'Africa', 'America'];

export default function MainPage() {
  return (
    <Wrapper>
      <SearchInput />
      <FilterSelect id="filterRegion" name="region" optionList={optionList} />
    </Wrapper>
  );
}
