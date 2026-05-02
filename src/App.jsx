import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PhoneMockup from './components/PhoneMockup'
import HowItWorks from './components/HowItWorks'
import HealthBenefits from './components/HealthBenefits'
import ProactiveFiltering from './components/ProactiveFiltering'
import RealHealthOutcomes from './components/RealHealthOutcomes'
import RealMothers from './components/RealMothers'
import ComparisonTable from './components/ComparisonTable'
import Pricing from './components/Pricing'
import FoodCarousel from './components/FoodCarousel'
import Independent from './components/Independent'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#eef3e2" }}>
      <Navbar />
      <main>
        <Hero />
        <PhoneMockup />
        <HowItWorks />
        <HealthBenefits />
        <ProactiveFiltering />
        <RealHealthOutcomes />
        <RealMothers />
        <ComparisonTable />
        <Pricing />
        <FoodCarousel />
        <Independent />
        <FAQ />
      </main>
    </div>
  )
}

export default App
