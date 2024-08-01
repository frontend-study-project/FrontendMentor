import { useParams } from 'react-router-dom';
import UtilButtonBox from '../components/detail/util/UtilButtonBox';
import DetailContent from '../components/detail/list/DetailContent';

export default function DetailPage() {
  const params = useParams();

  return (
    <>
      <div className="h-[100vh] px-[40px] md:px-[55px]">
        <h2 className="screen_out">{params.country} 상세 페이지</h2>
        <UtilButtonBox />
        <DetailContent country={params.country} />
      </div>
    </>
  );
}
