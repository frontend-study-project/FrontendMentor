import './App.css';
import { Header } from './components/Header';
import { Map } from './components/Map';

function App() {
  return (
    <div className="flex flex-col h-screen font-rubik">
      <Header />
      <Map />
    </div>
  );
}

export default App;
