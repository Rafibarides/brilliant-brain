import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import palette from '../utils/colors.js'

function NavBar({ isModalOpen = false }) {
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [pillStyle, setPillStyle] = useState({})
  const location = useLocation()
  
  const homeRef = useRef(null)
  const classesRef = useRef(null)
  const signupRef = useRef(null)
  const menuContainerRef = useRef(null)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    updatePillPosition()
  }, [location.pathname, hoveredItem, isMobile])

  const updatePillPosition = () => {
    if (isMobile || !menuContainerRef.current) return

    const targetPath = hoveredItem || location.pathname
    let targetRef = null

    // Check if we're on a class detail page (any path that's not a known route)
    const isClassDetailPage = !['/', '/classes', '/signup', '/about', '/careers', '/privacy-policy', '/terms', '/sitemap', '/support', '/cookie-policy'].includes(location.pathname)

    switch (targetPath) {
      case '/':
        targetRef = homeRef.current
        break
      case '/classes':
        targetRef = classesRef.current
        break
      case '/signup':
        targetRef = signupRef.current
        break
      default:
        // If we're on a class detail page and not hovering, highlight "Classes"
        if (isClassDetailPage && !hoveredItem) {
          targetRef = classesRef.current
        } else {
          targetRef = null
        }
    }

    if (targetRef && menuContainerRef.current) {
      const containerRect = menuContainerRef.current.getBoundingClientRect()
      const targetRect = targetRef.getBoundingClientRect()
      
      setPillStyle({
        position: 'absolute',
        left: targetRect.left - containerRect.left,
        top: targetRect.top - containerRect.top,
        width: targetRect.width,
        height: targetRect.height,
        backgroundColor: hoveredItem ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.5)',
        borderRadius: '50px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1,
        pointerEvents: 'none'
      })
    } else {
      setPillStyle({
        opacity: 0,
        transition: 'opacity 0.3s ease'
      })
    }
  }

  const navStyle = {
    backgroundColor: palette.lightBlue,
    padding: isMobile ? '0.75rem 1rem' : '1rem 2rem',
    borderBottom: `1px solid ${palette.blue}`,
    borderRadius: isMobile ? '0px' : '50px',
    margin: isMobile ? '0' : '1rem',
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    top: isModalOpen ? '-100px' : '0',
    left: '0',
    right: '0',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    opacity: isModalOpen ? 0 : 1,
    transform: isModalOpen ? 'translateY(-100%)' : 'translateY(0)',
    height: isMobile ? 'auto' : '80px',
    minHeight: isMobile ? '60px' : '70px',
    maxHeight: isMobile ? '80px' : '90px'
  }

  const logoStyle = {
    height: isMobile ? '32px' : '40px',
    width: 'auto',
    maxHeight: isMobile ? '32px' : '40px',
    maxWidth: isMobile ? '120px' : '150px'
  }

  const leftSectionStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minWidth: 0,
    overflow: 'hidden'
  }

  const centerSectionStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  }

  const rightSectionStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end'
  }

  const desktopMenuStyle = {
    listStyle: 'none',
    display: isMobile ? 'none' : 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0,
    position: 'relative'
  }

  const mobileMenuStyle = {
    listStyle: 'none',
    position: 'absolute',
    top: '100%',
    left: '1rem',
    right: '1rem',
    backgroundColor: palette.lightBlue,
    borderBottom: `1px solid ${palette.blue}`,
    borderRadius: '20px',
    margin: 0,
    padding: '1rem 0',
    display: isMobile && isMenuOpen ? 'block' : 'none',
    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
    opacity: isMenuOpen ? 1 : 0,
    transition: 'all 0.3s ease-in-out',
    zIndex: 1000
  }

  const mobileMenuItemStyle = {
    padding: '0.5rem 2rem',
    borderBottom: `1px solid ${palette.blue}`
  }

  const getLinkStyle = () => ({
    textDecoration: 'none',
    color: palette.text,
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    transition: 'all 0.2s ease',
    display: 'block',
    opacity: 1,
    backgroundColor: 'transparent',
    position: 'relative',
    zIndex: 2,
    whiteSpace: 'nowrap'
  })

  const getMobileLinkStyle = (path) => {
    // Check if we're on a class detail page
    const isClassDetailPage = !['/', '/classes', '/signup', '/about', '/careers', '/privacy-policy', '/terms', '/sitemap', '/support', '/cookie-policy'].includes(location.pathname)
    
    // If we're on a class detail page, treat it as if we're on /classes for active state
    const isActive = location.pathname === path || (isClassDetailPage && path === '/classes')
    
    return {
      textDecoration: 'none',
      color: palette.text,
      fontWeight: '500',
      padding: '0.5rem 1rem',
      borderRadius: '50px',
      transition: 'all 0.2s ease',
      display: 'block',
      opacity: 1,
      backgroundColor: isActive ? `rgba(255, 255, 255, 0.5)` : 'transparent',
      whiteSpace: 'nowrap'
    }
  }

  const getMobileLinkHoverStyle = () => ({
    backgroundColor: `rgba(255, 255, 255, 0.25)`,
    color: palette.text,
    opacity: 1
  })

  const buttonStyle = {
    backgroundColor: palette.darkBlue,
    color: palette.text,
    textDecoration: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: isMobile ? 'none' : 'inline-block'
  }

  const hamburgerStyle = {
    display: isMobile ? 'flex' : 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '0.5rem',
    gap: '4px'
  }

  const hamburgerLineStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: palette.text,
    transition: 'all 0.3s ease-in-out',
    transformOrigin: 'center'
  }

  const hamburgerLine1Style = {
    ...hamburgerLineStyle,
    transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
  }

  const hamburgerLine2Style = {
    ...hamburgerLineStyle,
    opacity: isMenuOpen ? 0 : 1
  }

  const hamburgerLine3Style = {
    ...hamburgerLineStyle,
    transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
  }



  return (
    <nav style={navStyle}>
      {/* Left Section - Logo */}
      <div style={leftSectionStyle}>
        <Link to="/" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          textDecoration: 'none', 
          gap: '0.75rem',
          maxWidth: isMobile ? '180px' : '300px',
          overflow: 'hidden'
        }}>
          <img src="/bb-logo.png" alt="Brilliant Brain Logo" style={logoStyle} />
          <span style={{ 
            color: palette.text, 
            fontSize: isMobile ? '1rem' : '1.25rem', 
            fontWeight: 'bold',
            display: isMobile ? 'none' : 'block',
            whiteSpace: 'nowrap'
          }}>
            Brilliant Brain
          </span>
        </Link>
      </div>

      {/* Center Section - Desktop Menu */}
      <div style={centerSectionStyle} ref={menuContainerRef}>
        {/* Animated Pill - Only show on desktop */}
        {!isMobile && <div style={pillStyle}></div>}
        
        <ul style={desktopMenuStyle}>
          <li>
            <Link 
              ref={homeRef}
              to="/" 
              style={getLinkStyle()}
              onMouseEnter={() => setHoveredItem('/')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              ref={classesRef}
              to="/classes" 
              style={getLinkStyle()}
              onMouseEnter={() => setHoveredItem('/classes')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Classes
            </Link>
          </li>
          <li>
            <Link 
              ref={signupRef}
              to="/signup" 
              style={getLinkStyle()}
              onMouseEnter={() => setHoveredItem('/signup')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Section - Learn More Button & Hamburger */}
      <div style={rightSectionStyle}>
        <Link 
          to="/signup" 
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = palette.primary
            e.target.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = palette.darkBlue
            e.target.style.transform = 'translateY(0)'
          }}
        >
          Learn More
        </Link>
        
        <div 
          style={hamburgerStyle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div style={hamburgerLine1Style}></div>
          <div style={hamburgerLine2Style}></div>
          <div style={hamburgerLine3Style}></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul style={mobileMenuStyle}>
        <li style={mobileMenuItemStyle}>
          <Link 
            to="/" 
            style={getMobileLinkStyle('/')}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => Object.assign(e.target.style, getMobileLinkHoverStyle())}
            onMouseLeave={(e) => Object.assign(e.target.style, getMobileLinkStyle('/'))}
          >
            Home
          </Link>
        </li>
        <li style={mobileMenuItemStyle}>
          <Link 
            to="/classes" 
            style={getMobileLinkStyle('/classes')}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => Object.assign(e.target.style, getMobileLinkHoverStyle())}
            onMouseLeave={(e) => Object.assign(e.target.style, getMobileLinkStyle('/classes'))}
          >
            Classes
          </Link>
        </li>
        <li style={mobileMenuItemStyle}>
          <Link 
            to="/signup" 
            style={getMobileLinkStyle('/signup')}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => Object.assign(e.target.style, getMobileLinkHoverStyle())}
            onMouseLeave={(e) => Object.assign(e.target.style, getMobileLinkStyle('/signup'))}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
