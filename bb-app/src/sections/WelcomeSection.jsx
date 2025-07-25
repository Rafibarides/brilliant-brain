import { useState, useEffect } from 'react'
import palette from '../utils/colors.js'

function WelcomeSection() {
  // Dynamic array of welcome images - easily expandable
  const welcomeImages = [
    '/Welcome/welcome1.jpg',
    '/Welcome/welcome2.jpg',
    '/Welcome/welcome3.jpg',
    '/Welcome/welcome4.jpg'
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Preload images to check if they exist
  useEffect(() => {
    const testImage = new Image()
    testImage.onload = () => {
      setImageLoaded(true)
      setImageError(false)
    }
    testImage.onerror = () => {
      setImageError(true)
      setImageLoaded(false)
      console.error('Failed to load image:', welcomeImages[currentImageIndex])
    }
    testImage.src = welcomeImages[currentImageIndex]
  }, [currentImageIndex, welcomeImages])

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % welcomeImages.length
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(slideInterval)
  }, [welcomeImages.length])

  const sectionStyle = {
    position: 'relative',
    height: '100vh',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign: 'center',
    paddingTop: '80px' // Account for fixed navbar
  }

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '0 2rem',
    width: '100%',
    height: '100%',
    backgroundImage: imageError 
      ? `linear-gradient(135deg, ${palette.lightBlue} 0%, ${palette.primary} 100%)`
      : `url(${welcomeImages[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'opacity 1s ease-in-out',
    zIndex: 1,
    opacity: imageLoaded || imageError ? 1 : 0.5
  }

  // Debug: Log current image path and loading status
  console.log('Current welcome image:', welcomeImages[currentImageIndex])
  console.log('Image loaded:', imageLoaded, 'Image error:', imageError)

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 2
  }

  const contentStyle = {
    position: 'relative',
    zIndex: 3,
    color: palette.text,
    maxWidth: '800px',
    padding: '1rem',
    margin: '0 auto',
    width: '100%'
  }

  const mainTitleStyle = {
    fontSize: 'clamp(1.5rem, 8vw, 3.5rem)',
    fontWeight: '700',
    marginBottom: '1rem',
    lineHeight: '1.1',
    whiteSpace: 'nowrap',
    textAlign: 'center'
  }

  const subtextStyle = {
    fontSize: 'clamp(0.9rem, 4vw, 1.5rem)',
    fontWeight: '400',
    marginBottom: '2rem',
    lineHeight: '1.3',
    opacity: 0.95,
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 2rem auto'
  }

  const indicatorsStyle = {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '0.5rem',
    zIndex: 3
  }

  const indicatorStyle = (isActive) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: isActive ? palette.text : 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: `2px solid ${palette.text}`
  })

  return (
    <section style={sectionStyle}>
      {/* Background Image */}
      <div style={backgroundStyle}></div>
      
      {/* Dark Overlay */}
      <div style={overlayStyle}></div>
      
      {/* Content */}
      <div style={contentStyle}>
        <h1 style={mainTitleStyle}>
          Brilliant Brain Classes
        </h1>
        <p style={subtextStyle}>
          Skill-Building, Fun, and Hands-On Learning for Kids, Teens, and Adults
        </p>
      </div>
      
      {/* Slideshow Indicators */}
      <div style={indicatorsStyle}>
        {welcomeImages.map((_, index) => (
          <div
            key={index}
            style={indicatorStyle(index === currentImageIndex)}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default WelcomeSection
