import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/ui/NavBar'
import About from './pages/About'
import Home from './pages/Home';

function App() {
 
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
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
