import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import palette from '../utils/colors'
import classesData from '../../JSON/Classes.json'

function Classes() {
  const navigate = useNavigate()

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



  const handleCardClick = (classItem) => {
    navigate(`/${classItem.endpoint}`)
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
