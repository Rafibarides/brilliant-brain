import { useState } from 'react'

function ImageTest() {
  const [showTest, setShowTest] = useState(false)

  const testImages = [
    '/bb-logo.png',
    '/Welcome/welcome1.jpg',
    '/Welcome/welcome2.jpg',
    '/Welcome/welcome3.jpg',
    '/Welcome/welcome4.jpg',
    '/About/about1.jpg'
  ]

  const testStyle = {
    position: 'fixed',
    top: '100px',
    right: '20px',
    background: 'white',
    border: '2px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    zIndex: 999999,
    maxWidth: '300px',
    maxHeight: '500px',
    overflow: 'auto'
  }

  const imageStyle = {
    width: '100%',
    height: '80px',
    objectFit: 'cover',
    margin: '0.5rem 0',
    border: '1px solid #ddd'
  }

  const buttonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    background: '#0072B0',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    zIndex: 999999
  }

  const handleImageError = (e, path) => {
    console.error('Failed to load:', path)
    e.target.style.backgroundColor = '#ffebee'
    e.target.alt = `FAILED: ${path}`
  }

  const handleImageLoad = (e, path) => {
    console.log('Successfully loaded:', path)
    e.target.style.backgroundColor = '#e8f5e8'
  }

  if (!showTest) {
    return (
      <button 
        style={buttonStyle}
        onClick={() => setShowTest(true)}
      >
        Test Images
      </button>
    )
  }

  return (
    <>
      <button 
        style={buttonStyle}
        onClick={() => setShowTest(false)}
      >
        Close Test
      </button>
      <div style={testStyle}>
        <h3>Image Loading Test</h3>
        <p>Green = Success, Red = Failed</p>
        {testImages.map((imagePath, index) => (
          <div key={index}>
            <p style={{ fontSize: '0.8rem', margin: '0.5rem 0 0.2rem 0' }}>
              {imagePath}
            </p>
            <img
              src={imagePath}
              alt={imagePath}
              style={imageStyle}
              onError={(e) => handleImageError(e, imagePath)}
              onLoad={(e) => handleImageLoad(e, imagePath)}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default ImageTest 