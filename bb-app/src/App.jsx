import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Classes from './pages/Classes'
import SignUp from './pages/SignUp'
import Footer from './pages/Footer'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Sitemap from './pages/Sitemap'
import Support from './pages/Support'
import CookiePolicy from './pages/CookiePolicy'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Router>
      <ScrollToTop />
      <div style={{ fontFamily: 'Arial, sans-serif', position: 'relative' }}>
        <NavBar isModalOpen={isModalOpen} />
        <main style={{ position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes setIsModalOpen={setIsModalOpen} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/support" element={<Support />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
