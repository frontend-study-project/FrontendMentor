import { useState } from "react";
import './App.css';
import { Header } from './components/Header';
import { Map } from './components/Map';

function App() {
  const [data, setData] = useState({
    ip: '',
    location: '',
    timezone: '',
    isp: '',
    latitude: 0,
    longitude: 0
  });

  return (
    <div className="flex flex-col h-screen font-rubik">
      <Header data={data} setData={setData} />
      <Map data={data} />
    </div>
  );
}

export default App;
