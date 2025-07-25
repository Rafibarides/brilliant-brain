import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import palette from '../utils/colors'

function Footer() {
  const footerStyle = {
    backgroundColor: palette.matteBlack,
    color: palette.text,
    padding: '3rem 2rem 2rem 2rem',
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    alignItems: 'start'
  }

  const logoSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }

  const logoStyle = {
    maxHeight: '60px',
    maxWidth: '200px',
    width: 'auto',
    height: 'auto',
    marginBottom: '0.5rem',
    objectFit: 'contain'
  }

  const securityStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    color: palette.lightGreen,
    fontWeight: '500'
  }

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }

  const sectionTitleStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: palette.lightBlue,
    marginBottom: '1rem'
  }

  const linkStyle = {
    color: palette.text,
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
    padding: '0.25rem 0'
  }

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    color: palette.text,
    margin: '0.25rem 0'
  }

  const bottomSectionStyle = {
    borderTop: `1px solid ${palette.darkBlue}`,
    marginTop: '2rem',
    paddingTop: '1.5rem',
    textAlign: 'center',
    fontSize: '0.85rem',
    color: '#CCCCCC'
  }

  const companyLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '1rem',
    flexWrap: 'wrap'
  }

  const handleLinkHover = (e, isHover) => {
    e.target.style.color = isHover ? palette.lightBlue : palette.text
  }

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Logo and Security Section */}
        <div style={logoSectionStyle}>
          <img
            src="/bb-logo.png"
            alt="Brilliant Brain Classes"
            style={logoStyle}
          />
          <div style={securityStyle}>
            <FontAwesomeIcon icon={faShieldAlt} />
            <span>Site Secured</span>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#CCCCCC', marginTop: '1rem' }}>
            Empowering minds through creative learning experiences. Professional instruction for all ages.
          </p>
        </div>

        {/* Quick Links */}
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>Quick Links</h3>
          <Link 
            to="/" 
            style={linkStyle}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            Home
          </Link>
          <Link 
            to="/classes" 
            style={linkStyle}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            Our Classes
          </Link>
          <Link 
            to="/signup" 
            style={linkStyle}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            Sign Up
          </Link>
          <Link 
            to="/signup" 
            style={linkStyle}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            Careers
          </Link>
        </div>

        {/* Company Info */}
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>Company</h3>
          <Link 
            to="/about" 
            style={linkStyle}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            About Us
          </Link>
          <Link 
            to="/sitemap" 
            style={linkStyle}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            Sitemap
          </Link>
          <Link 
            to="/privacy-policy" 
            style={linkStyle}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms" 
            style={linkStyle}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            Terms of Service
          </Link>
        </div>

        {/* Contact Info */}
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>Contact</h3>
          <div style={contactItemStyle}>
            <FontAwesomeIcon icon={faPhone} style={{ color: palette.primary }} />
            <span>(214) 923-7821</span>
          </div>
          <div style={contactItemStyle}>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: palette.primary }} />
            <span>info@brilliantbrainclasses.org</span>
          </div>
          <div style={contactItemStyle}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: palette.primary }} />
            <span>Brooklyn, NY</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={bottomSectionStyle}>
        <div style={companyLinksStyle}>
          <Link 
            to="/support" 
            style={{ ...linkStyle, fontSize: '0.8rem' }}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            Accessibility
          </Link>
          <Link 
            to="/cookie-policy" 
            style={{ ...linkStyle, fontSize: '0.8rem' }}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            Cookie Policy
          </Link>
          <Link 
            to="/support" 
            style={{ ...linkStyle, fontSize: '0.8rem' }}
            onMouseEnter={(e) => handleLinkHover(e, true)}
            onMouseLeave={(e) => handleLinkHover(e, false)}
          >
            Support
          </Link>
        </div>
        <p>© 2024 Brilliant Brain Classes. All rights reserved.</p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          
          div[style*="justifyContent: center"] {
            flex-direction: column !important;
            gap: 1rem !important;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
