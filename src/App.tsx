import Hero from './components/sections/HeroSection'
import PartnershipsSection from './components/sections/PartnershipsSection'
import StatsSection from './components/sections/StatsSection'
import NavBar from './components/ui/NavBar'

function App() {
 
  return (
    <>
      <div>
        <NavBar />
        <Hero />
        <PartnershipsSection />
        <StatsSection />
      </div>
    </>
  )
}

export default App
