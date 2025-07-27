import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import palette from '../utils/colors'
import classesData from '../../JSON/Classes.json'

function ClassDetail() {
  const { endpoint } = useParams()
  const navigate = useNavigate()
  
  // Find the class that matches the endpoint
  const classItem = classesData.classes.find(cls => cls.endpoint === endpoint)
  
  // If class not found, redirect to classes page
  if (!classItem) {
    navigate('/classes')
    return null
  }

  const pageStyle = {
    padding: '2rem',
    paddingTop: '120px',
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    color: '#333333'
  }

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '0 1rem'
  }

  const backButtonStyle = {
    backgroundColor: 'transparent',
    color: palette.primary,
    border: 'none',
    padding: '0.5rem',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '500',
    marginBottom: '2rem',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none'
  }

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '20px',
    marginBottom: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
  }

  const titleStyle = {
    fontSize: '3rem',
    color: palette.primary,
    marginBottom: '1rem',
    fontWeight: 'bold'
  }

  const priceStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: palette.darkGreen,
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  }

  const descriptionStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#333333',
    marginBottom: '3rem',
    textAlign: 'left'
  }

  const ctaButtonStyle = {
    backgroundColor: palette.primary,
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(0, 114, 176, 0.3)'
  }

  const handleBackClick = () => {
    navigate('/classes')
  }

  const handleBookingClick = () => {
    navigate('/signup')
  }

  return (
    <motion.div 
      style={pageStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div style={containerStyle}>
        <motion.button
          style={backButtonStyle}
          onClick={handleBackClick}
          whileHover={{ 
            color: palette.darkBlue,
            transform: 'translateX(-3px)'
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          ← Classes
        </motion.button>

        <motion.img
          src={classItem.photo}
          alt={classItem.title}
          style={imageStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        <motion.h1 
          style={titleStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {classItem.title}
        </motion.h1>

        <motion.div
          style={priceStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span>${classItem.pricePerHour}</span>
          <span style={{ fontSize: '1.2rem', color: '#666666', fontWeight: 'normal' }}>
            • 1 hour session
          </span>
        </motion.div>

        <motion.p
          style={descriptionStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {classItem.full_text}
        </motion.p>

        <motion.button
          style={ctaButtonStyle}
          onClick={handleBookingClick}
          whileHover={{ 
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 25px rgba(0, 114, 176, 0.4)'
          }}
          whileTap={{ transform: 'translateY(0)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Book This Class
        </motion.button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          
          div[style*="fontSize: '2rem'"] {
            font-size: 1.5rem !important;
          }
          
          img {
            height: 250px !important;
            border-radius: 15px !important;
          }
          
          div[style*="maxWidth: '800px'"] {
            margin: 0 1rem !important;
          }
          
          p[style*="fontSize: '1.2rem'"] {
            font-size: 1.1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 2rem !important;
          }
          
          div[style*="padding: '2rem'"] {
            padding: 1rem !important;
            padding-top: 100px !important;
          }
          
          img {
            height: 200px !important;
            margin-bottom: 1.5rem !important;
          }
          
          div[style*="fontSize: '2rem'"] {
            font-size: 1.3rem !important;
            flex-direction: column !important;
            gap: 0.2rem !important;
          }
          
          p[style*="fontSize: '1.2rem'"] {
            font-size: 1rem !important;
            margin-bottom: 2rem !important;
          }
          
          button[style*="fontSize: '1.2rem'"] {
            font-size: 1.1rem !important;
            padding: 0.9rem 1.8rem !important;
          }
          
          button[style*="fontSize: '1.1rem'"] {
            font-size: 1rem !important;
            margin-bottom: 1.5rem !important;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default ClassDetail 