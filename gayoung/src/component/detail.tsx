import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCountryData } from "../api";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate()

  const { data } = useQuery({
    queryKey: ['countryData'],
    queryFn: getCountryData
  });


  const filteredData = data?.filter((ele) => ele.name === params.name );

  console.log(filteredData)

  return(
      <div className="detail_container">
        <div className="back">
          <button type="button" onClick={() => navigate(-1)}>Back</button>
        </div>
        {filteredData?.map((data)=> (
            <div key={data.name} className="detail_wrap">
              <div>
                <img src={data.flags.png}/>
              </div>
              <div>
                <h2>{data.name}</h2>
                <ul>
                  <div>
                    <li><span>Native Name:</span>{data.nativeName}</li>
                    <li><span>Population:</span>{data.population}</li>
                    <li><span>Region:</span>{data.region}</li>
                    <li><span>Sub Region:</span>{data.subregion}</li>
                    <li><span>Capital:</span>{data.capital}</li>
                  </div>

                  <div>
                    <li><span>Top Level Domain:</span>{data.topLevelDomain}</li>
                    <li><span>Currencies:</span>{data.currencies.map((item) => item.code)}</li>
                    <li><span>Languages:</span>{data.languages.map((item) => item.iso639_1)} </li>
                  </div>
                </ul>
                <div className="border_country">
                  <p>
                    <span>Border Countries:</span>
                    <ul>
                      {
                        data.borders.map((item) => <li>{item}</li>)
                      }
                    </ul>
                  </p>
                </div>
              </div>
            </div>
        ))}
      </div>
  )
}
export default Detail