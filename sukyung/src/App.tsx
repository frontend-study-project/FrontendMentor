import './reset.css'
import './App.css'
import Header from './layout/Header'
import SectionIntro from './components/SectionIntro'
import SectionSearch from './components/SectionSearch'
import SectionStatistics from './components/SectionStatistics'
import Banner from './components/Banner'
import Footer from './layout/Footer'

function App() {
  return (
    <>
      <Header />
      <SectionIntro />
      <SectionSearch />
      <SectionStatistics />
      <Banner />
      <Footer />
    </>
  )
}

export default App
