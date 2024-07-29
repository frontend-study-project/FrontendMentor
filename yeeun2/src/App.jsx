import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Introdution from './components/Introduction/Introdution';
import KeyVisual from './components/KeyVisual/KeyVisual';
import Shorten from './components/Shorten/Shorten';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <KeyVisual />
      <Shorten />
      <Introdution />
      {/* <Banner /> */}
    </QueryClientProvider>
  );
}

export default App;
