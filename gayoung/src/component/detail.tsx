import { useParams } from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getCountryData} from "../api";

const Detail = () => {
  const params = useParams();

  const { data } = useQuery({
    queryKey: ['countryData'],
    queryFn: getCountryData
  });


  const filteredData = data?.filter((ele) => ele.name === params.name );

  console.log(filteredData)

  return(
      <div>
        {filteredData?.map((data)=> (
            <>
              <img src={data.flags.png}/>
              <div>
                <h2>{data.name}</h2>
                <ul>
                  <li><span>Native Name:</span>{data.nativeName}</li>
                  <li><span>Population:</span>{data.population}</li>
                  <li><span>Region:</span>{data.region}</li>
                  <li><span>Sub Region:</span>{data.subregion}</li>
                  <li><span>Capital:</span>{data.capital}</li>
                </ul>
                <div>
                  {data.borders}
                </div>
              </div>
            </>
        ))}
      </div>
  )
}
export default Detail