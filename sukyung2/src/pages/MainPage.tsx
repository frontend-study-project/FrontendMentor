import CountryList from '../components/main/list/CountryList';
import Wrapper from '../layout/Wrapper';

export default function MainPage() {
  return (
    <Wrapper>
      <h2 className="screen_out">메인 페이지</h2>

      <CountryList />
    </Wrapper>
  );
}
