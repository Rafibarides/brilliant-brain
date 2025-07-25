import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import palette from '../utils/colors'
import classesData from '../../JSON/Classes.json'

function Classes({ setIsModalOpen }) {
  const [selectedClass, setSelectedClass] = useState(null)

  const pageStyle = {
    padding: '2rem',
    paddingTop: '120px',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    color: '#333333'
  }

  const titleStyle = {
    fontSize: '3rem',
    color: palette.primary,
    margin: '2rem 0',
    fontWeight: 'bold'
  }

  const sessionInfoStyle = {
    fontSize: '1.2rem',
    color: '#666666',
    margin: '1rem 0 2rem 0',
    fontWeight: '500'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 0'
  }

  const cardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `2px solid ${palette.lightBlue}`,
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
  }

  const imageContainerStyle = {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    position: 'relative'
  }

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  }

  const cardContentStyle = {
    padding: '1.5rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: palette.darkBlue,
    marginBottom: '1rem',
    lineHeight: '1.3'
  }

  const cardOverviewStyle = {
    fontSize: '1rem',
    color: '#555555',
    lineHeight: '1.5',
    flex: 1
  }

  const learnMoreStyle = {
    color: palette.darkGreen,
    fontWeight: 'bold',
    fontSize: '0.9rem',
    marginTop: '1rem'
  }

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999999,
    padding: '2rem'
  }

  const modalContentStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '2rem',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '80vh',
    overflow: 'auto',
    border: `2px solid ${palette.primary}`,
    position: 'relative',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    zIndex: 9999999,
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none', /* Internet Explorer 10+ */
  }

  const modalImageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '1.5rem'
  }

  const modalTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: palette.primary,
    marginBottom: '1rem'
  }

  const modalPriceStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: palette.darkGreen,
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }

  const modalTextStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#333333',
    marginBottom: '2rem'
  }

  const closeButtonStyle = {
    position: 'fixed',
    top: '2rem',
    right: '2rem',
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    fontSize: '2rem',
    color: palette.darkGreen,
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)'
  }

  const handleCardClick = (classItem) => {
    setSelectedClass(classItem)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setSelectedClass(null)
    setIsModalOpen(false)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }

  return (
    <div style={pageStyle}>
      <motion.h1 
        style={titleStyle}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Classes
      </motion.h1>

      <motion.p
        style={sessionInfoStyle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        All classes are 1 hour sessions
      </motion.p>

      <motion.div 
        style={gridStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {classesData.classes.map((classItem, index) => (
          <motion.div
            key={index}
            style={cardStyle}
            onClick={() => handleCardClick(classItem)}
            whileHover={{ 
              transform: 'translateY(-10px)',
              boxShadow: `0 15px 30px rgba(42, 150, 217, 0.2)`
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div style={imageContainerStyle}>
              <img
                src={classItem.photo}
                alt={classItem.title}
                style={imageStyle}
              />
            </div>
            
            <div style={cardContentStyle}>
              <h3 style={cardTitleStyle}>{classItem.title}</h3>
              <p style={cardOverviewStyle}>{classItem.overview}</p>
              <p style={learnMoreStyle}>Click to learn more →</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedClass && (
          <motion.div
            style={modalOverlayStyle}
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
                      <button 
            style={closeButtonStyle}
            onClick={handleCloseModal}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
          >
            ×
          </button>

          <motion.div
            style={modalContentStyle}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={selectedClass.photo}
              alt={selectedClass.title}
              style={modalImageStyle}
            />

            <h2 style={modalTitleStyle}>{selectedClass.title}</h2>
            <div style={modalPriceStyle}>
              <span>${selectedClass.pricePerHour}</span>
              <span style={{ fontSize: '1rem', color: '#666666', fontWeight: 'normal' }}>
                • 1 hour session
              </span>
            </div>
            <p style={modalTextStyle}>{selectedClass.full_text}</p>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Hide scrollbar for webkit browsers */
        div[style*="overflow: auto"]::-webkit-scrollbar {
          display: none;
        }
        
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="minmax"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Classes
