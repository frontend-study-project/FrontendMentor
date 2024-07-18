import { useParams } from 'react-router-dom';
import Wrapper from '../layout/Wrapper';
import UtilButtonBox from '../components/detail/util/UtilButtonBox';
import DetailContent from '../components/detail/list/DetailContent';

export default function DetailPage() {
  const params = useParams();

  return (
    <Wrapper>
      <div className="h-[100vh]">
        <h2 className="screen_out">{params.country} 상세 페이지</h2>
        <UtilButtonBox />
        <DetailContent country={params.country} />
      </div>
    </Wrapper>
  );
}
