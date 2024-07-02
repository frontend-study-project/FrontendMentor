import { useState } from "react";
import arrow from '../assets/images/icon-arrow.svg';
import { useDispatch } from "react-redux";
import { setData } from "../redux/dataSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}&ipAddress=${input}`);
    const data = await response.json();
    const dataObj = {
      ip: data.ip,
      country: data.location.country,
      region: data.location.region,
      city: data.location.city,
      timezone: data.location.timezone,
      isp: data.isp,
      latitude: data.location.lat,
      longitude: data.location.lng
    };
    dispatch(setData(dataObj));
    console.log(dataObj);
  }

  return (
    <form className="flex w-10/12 rounded-2xl overflow-hidden sm:w-[50%]" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for any IP address or domain" className="flex-grow min-w-0 px-7 py-5 text-xl outline-none" value={input} onChange={handleInputChange} />
      <button type="submit" className="flex justify-center items-center px-8 bg-very-dark-grey hover:bg-gray-600">
        <img src={arrow} />
      </button>
    </form>
  );
}

export default SearchBar
