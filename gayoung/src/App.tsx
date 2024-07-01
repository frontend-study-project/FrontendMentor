import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./component/header.tsx";
import Contents from "./component/contents.tsx";
import Detail from "./component/detail.tsx";
import './App.css';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Contents />} />
          <Route path="/country/:name" element={<Detail />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
