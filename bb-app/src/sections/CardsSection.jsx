import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCalendarAlt, faCompass } from '@fortawesome/free-solid-svg-icons'
import palette from '../utils/colors.js'

function CardsSection() {
  const sectionStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '400px'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  }

  const titleStyle = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    color: palette.darkBlue,
    textAlign: 'center',
    marginBottom: '3rem'
  }

  const cardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    alignItems: 'stretch'
  }

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2.5rem 2rem',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    border: `2px solid transparent`,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }

  const iconStyle = {
    fontSize: '3rem',
    marginBottom: '1.5rem',
    color: palette.lightBlue
  }

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: palette.darkBlue,
    marginBottom: '1rem'
  }

  const cardDescriptionStyle = {
    fontSize: '1rem',
    color: '#6c757d',
    lineHeight: '1.6',
    marginBottom: '1.5rem'
  }

  const buttonStyle = {
    backgroundColor: palette.lightBlue,
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem'
  }

  const cards = [
    {
      icon: faGraduationCap,
      title: 'Join a Class',
      description: 'Discover our scheduled classes and join a community of learners in interactive, skill-building sessions.',
      color: palette.lightBlue
    },
    {
      icon: faCalendarAlt,
      title: 'Book an On-Site Session',
      description: 'Bring Brilliant Brain to your location with customized, hands-on learning experiences for your group.',
      color: palette.darkGreen
    },
    {
      icon: faCompass,
      title: 'Explore Programs',
      description: 'Browse our comprehensive range of educational programs designed for kids, teens, and adults.',
      color: palette.lightGreen
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <motion.h2 
          style={titleStyle}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get Started Today
        </motion.h2>
        
        <motion.div
          style={cardsContainerStyle}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              style={cardStyle}
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              custom={index}
            >
              <motion.div
                variants={hoverVariants}
                whileHover="hover"
              >
                <FontAwesomeIcon 
                  icon={card.icon} 
                  style={{...iconStyle, color: card.color}} 
                />
                <h3 style={cardTitleStyle}>{card.title}</h3>
                <p style={cardDescriptionStyle}>{card.description}</p>
                <motion.button
                  style={{...buttonStyle, backgroundColor: card.color}}
                  whileHover={{ 
                    backgroundColor: palette.darkBlue,
                    scale: 1.05 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CardsSection
