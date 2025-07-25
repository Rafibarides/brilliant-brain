import { Link } from 'react-router-dom'
import palette from '../utils/colors'

function Sitemap() {
  const pageStyle = {
    padding: '2rem',
    paddingTop: '120px',
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    color: '#333333',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6'
  }

  const titleStyle = {
    fontSize: '3rem',
    color: palette.primary,
    margin: '2rem 0',
    fontWeight: 'bold',
    textAlign: 'center'
  }

  const sectionStyle = {
    marginBottom: '2rem'
  }

  const sectionTitleStyle = {
    fontSize: '1.5rem',
    color: palette.darkBlue,
    fontWeight: 'bold',
    marginBottom: '1rem'
  }

  const linkStyle = {
    color: palette.primary,
    textDecoration: 'none',
    fontSize: '1.1rem',
    display: 'block',
    margin: '0.5rem 0',
    padding: '0.5rem 0',
    transition: 'color 0.3s ease'
  }

  const listStyle = {
    listStyle: 'none',
    padding: 0
  }

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Sitemap</h1>
      
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Main Pages</h2>
        <ul style={listStyle}>
          <li>
            <Link 
              to="/" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = palette.darkBlue}
              onMouseLeave={(e) => e.target.style.color = palette.primary}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/classes" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = palette.darkBlue}
              onMouseLeave={(e) => e.target.style.color = palette.primary}
            >
              Our Classes
            </Link>
          </li>
          <li>
            <Link 
              to="/signup" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = palette.darkBlue}
              onMouseLeave={(e) => e.target.style.color = palette.primary}
            >
              Contact & Signup
            </Link>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Legal & Support</h2>
        <ul style={listStyle}>
          <li>
            <Link 
              to="/privacy-policy" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = palette.darkBlue}
              onMouseLeave={(e) => e.target.style.color = palette.primary}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link 
              to="/terms" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = palette.darkBlue}
              onMouseLeave={(e) => e.target.style.color = palette.primary}
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link 
              to="/cookie-policy" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = palette.darkBlue}
              onMouseLeave={(e) => e.target.style.color = palette.primary}
            >
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link 
              to="/support" 
              style={linkStyle}
              onMouseEnter={(e) => e.target.style.color = palette.darkBlue}
              onMouseLeave={(e) => e.target.style.color = palette.primary}
            >
              Support
            </Link>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Contact Information</h2>
        <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
          <strong>Phone:</strong> (214) 923-7821
        </p>
        <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
          <strong>Email:</strong> info@brilliantbrainclasses.org
        </p>
        <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
          <strong>Location:</strong> Brooklyn, NY
        </p>
      </div>
    </div>
  )
}

export default Sitemap 