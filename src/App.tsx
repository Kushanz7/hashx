import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/sections/HeroSection'
import PartnershipsSection from './components/sections/PartnershipsSection'
import SliderSection from './components/sections/SliderSection'
import SponsorsSection from './components/sections/SponsorsSection'
import StatsSection from './components/sections/StatsSection'
import NavBar from './components/ui/NavBar'
import About from './pages/About'

function App() {
 
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <SliderSection />
              <PartnershipsSection />
              <SponsorsSection />
              <StatsSection />
            </>
          } />
          <Route path="/about" element={<About />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
