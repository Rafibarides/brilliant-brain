import { motion } from 'framer-motion'
import palette from '../utils/colors'

function AboutSection() {
  const sectionStyle = {
    padding: '4rem 2rem',
    backgroundColor: palette.background,
    color: palette.text,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  }

  const textContainerStyle = {
    textAlign: 'left'
  }

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: palette.primary,
    lineHeight: '1.2'
  }

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    color: palette.text
  }

  const highlightStyle = {
    color: palette.accent,
    fontWeight: 'bold'
  }

  const imageContainerStyle = {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3)`
  }

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block'
  }

  return (
    <section style={sectionStyle}>
      <motion.div 
        style={containerStyle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          style={textContainerStyle}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 style={titleStyle}>About Us</h2>
          <p style={paragraphStyle}>
            We believe that learning should be <span style={highlightStyle}>hands-on</span>, <span style={highlightStyle}>joyful</span>, and <span style={highlightStyle}>practical</span>. Our instructors are trained professionals with experience in education, therapy, art, sports, and tech.
          </p>
          <p style={paragraphStyle}>
            We work with children, teens, and adults across a wide range of abilities and interests. Our programs are <span style={highlightStyle}>OPWDD and Self-Direction friendly</span>.
          </p>
          <p style={paragraphStyle}>
            We provide all supplies, tailor our curriculum by age, and can travel to you.
          </p>
        </motion.div>

        <motion.div 
          style={imageContainerStyle}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="/About/about1.jpg" 
            alt="About Brilliant Brain - Learning environment" 
            style={imageStyle}
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          
          h2 {
            font-size: 2.5rem !important;
          }
          
          p {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutSection
