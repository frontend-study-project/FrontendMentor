import { Suspense } from "react";
import CountryInfo from "../components/detail/CountryInfo";
import Loading from "../components/common/Loading";

const Detail = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CountryInfo />
    </Suspense>
  )
}
 
export default Detail;