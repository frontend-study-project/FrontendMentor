import { useQuery } from "@tanstack/react-query";
import { getCountryData } from "../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contents = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['countryData'],
    queryFn: getCountryData
  });

  const [input, setInput] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  useEffect(() => {
    if (data) {
      setSearchedData(data);
    }
  }, [data]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearchClick = () => {
    const filtered = data.filter(item =>
        item.name.toLowerCase().includes(input.toLowerCase())
    );
    setSearchedData(filtered);
  };

  const handleFilterClick = (region) => {
    setSelectedRegion(region);
    const filtered = data.filter(item => item.region === region);
    setSearchedData(filtered);
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
            <button type="button" onClick={handleSearchClick}>Search</button>
          </div>
          <div className="searchbar">
            <span>{selectedRegion}</span>
            <ul>
              {filteredRegion.map((item) => (
                  <li
                      key={item}
                      data-value={item}
                      onClick={() => handleFilterClick(item)}
                      style={{cursor: 'pointer', fontWeight: selectedRegion === item ? 'bold' : 'normal'}}
                  >
                    {item}
                  </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="filter_wrap">
          <ul>
            {searchedData?.map((item) => (
                <Link key={item.name} to={`/country/${item.name.replace(/\s+/g, '')}`}>
                  <li>
                    <img src={item.flags.png} alt={item.name}/>
                    <div className="txt_wrap">
                      <h2>{item.name}</h2>
                      <p><span>Population:</span><span>{item.population}</span></p>
                      <p><span>Region:</span><span>{item.region}</span></p>
                      <p><span>Capital:</span><span>{item.capital}</span></p>
                    </div>
                  </li>
                </Link>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default Contents;
