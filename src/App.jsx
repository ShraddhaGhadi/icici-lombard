import './App.css'
import Nav from './components/Nav'
import Header from './components/Hero'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import ComprehensiveCar from './components/ComprehensiveCar'
import InsurancePolicy from './components/InsurancePolicy'
import IncludesOrNot from './components/IncludesOrNot'
import Things from './components/Things'
import InsurancePremium from './components/InsurancePremium'
import CommonQue from './components/CommonQue'
import RatingReview from './components/RatingReview'
import PopularSearches from './components/PopularSearches'
import PopularModel from './components/PopularModel'
import ProductTable from './ProductTable'
import Footer from './components/Footer'

function App() {
  return (
    <div className='font-Mulish'>
    <Nav />
    <Header />
    <Section2/>
    <Section3 />
    <ComprehensiveCar />
    <InsurancePolicy />
    <IncludesOrNot/>
    <Things />
    <InsurancePremium />
    <CommonQue />
    <RatingReview />
    <PopularSearches/>
    <PopularModel/>
    <ProductTable />
    <Footer />
    </div>
  )
}

export default App
