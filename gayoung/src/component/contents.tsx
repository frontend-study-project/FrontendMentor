import { useQuery } from "@tanstack/react-query";
import { getCountryData } from "../api";
import { useState, useEffect } from "react";

const Contents = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['countryData'],
    queryFn: getCountryData
  });

  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Update filteredData when data changes
  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    // Filter data based on input value
    const filtered = data.filter(item =>
        item.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(filtered);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  const filteredRegion = [...new Set(data?.map((item) => item.region))];

  return (
      <div className="container">
        <div className="searchbar_wrap">
          <div className="input_wrap">
            <input
                type="text"
                placeholder="Search for a country"
                value={input}
                onChange={handleInputChange}
            />
            <button type="button" onClick={handleClick}>Search</button>
          </div>
          <div className="searchbar">
            <span>Filter by Region</span>
            <ul>
              {filteredRegion.map((item) => (
                  <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="filter_wrap">
          <ul>
            {filteredData?.map((item) => (
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
  );
};

export default Contents;
