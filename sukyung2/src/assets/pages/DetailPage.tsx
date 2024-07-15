import { useParams } from 'react-router-dom';
import Wrapper from '../layout/Wrapper';
import UtilButtonBox from '../components/detail/UtilButtonBox';
import DetailContent from '../components/detail/DetailContent';

export default function DetailPage() {
  const params = useParams();

  return (
    <Wrapper>
      <div className="h-[100vh]">
        <h2 className="screen_out">{params.countryId} 상세 페이지</h2>
        <UtilButtonBox />
        <DetailContent />
      </div>
    </Wrapper>
  );
}
