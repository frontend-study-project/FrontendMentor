import './App.css'
import Header from "./component/header.tsx";
import Contents from "./component/contents.tsx";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';


function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Contents />
    </QueryClientProvider>
  )
}

export default App
