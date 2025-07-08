import Hero from './components/sections/HeroSection'
import PartnershipsSection from './components/sections/PartnershipsSection'
import SliderSection from './components/sections/SliderSection'
import SponsorsSection from './components/sections/SponsorsSection'
import StatsSection from './components/sections/StatsSection'
import NavBar from './components/ui/NavBar'

function App() {
 
  return (
    <>
      <div>
        <NavBar />
        <Hero />
        <SliderSection />
        <PartnershipsSection />
        <SponsorsSection />
        <StatsSection />
      </div>
    </>
  )
}

export default App
