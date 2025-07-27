import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import NavBar from './components/NavBar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Classes from './pages/Classes'
import ClassDetail from './pages/ClassDetail'
import SignUp from './pages/SignUp'
import Careers from './pages/Careers'
import Footer from './pages/Footer'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Sitemap from './pages/Sitemap'
import Support from './pages/Support'
import CookiePolicy from './pages/CookiePolicy'

function App() {

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div style={{ fontFamily: 'Arial, sans-serif', position: 'relative' }}>
          <NavBar />
          <main style={{ position: 'relative', zIndex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/support" element={<Support />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/:endpoint" element={<ClassDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
