import { useEffect } from "react";
import './App.css';
import { Header } from './components/Header';
import { Map } from './components/Map';
import { useDispatch } from "react-redux";
import { setData } from "./redux/dataSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}`);
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
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen font-rubik">
      <Header />
      <Map />
    </div>
  );
}

export default App;
