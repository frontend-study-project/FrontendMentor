import './reset.css'
import './App.css'
import Header from './layout/Header'
import SectionIntro from './components/section/SectionIntro'
import SectionSearch from './components/section/SectionSearch'
import SectionStatistics from './components/section/SectionStatistics'
import Banner from './components/banner/Banner'
import Footer from './layout/Footer'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <SectionIntro />
      <SectionSearch />
      <SectionStatistics />
      <Banner />
      <Footer />
    </QueryClientProvider>
  )
}

export default App
