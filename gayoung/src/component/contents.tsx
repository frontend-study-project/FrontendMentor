import { useQuery } from "@tanstack/react-query";
import { getCountryData } from "../api";

const Contents = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['countryData'],
    queryFn: getCountryData
  })

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
      <div className="container">
        <div className="searchbar_wrap">
          <input type="text"/>
          <select>
            <option></option>
          </select>
        </div>
        <div className="filter_wrap">
          <ul>
            {data?.map((item) => (
                <li key={item.name}>
                  <img src={item.flags.png} alt={item.name}/>
                  <div className="txt_wrap">
                    <h2>{item.name}</h2>
                    <p><span>Population:</span><span>{item.population}</span></p>
                    <p><span>Region:</span><span>{item.region}</span></p>
                    <p><span>Capital:</span><span>{item.capital}</span></p>
                  </div>
                </li>
            ))}
          </ul>
        </div>
      </div>
  )
}
export default Contents