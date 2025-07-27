import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faClock, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import palette from '../utils/colors'

function Careers() {
  // Dynamic jobs array
  const jobs = [
    {
      id: 1,
      title: "Creative Learning Teacher",
      type: "Part-time / Full-time",
      location: "Brooklyn, NY",
      description: "We're seeking passionate educators to lead hands-on learning experiences across various subjects including art, coding, gardening, and baking. Perfect for teachers who love interactive, creative instruction.",
      requirements: [
        "Bachelor's degree in Education or related field",
        "2+ years teaching experience preferred",
        "Passion for hands-on, creative learning",
        "Experience with children ages 4+ to adults",
        "Strong communication and interpersonal skills",
        "Flexibility to teach multiple subjects"
      ],
      responsibilities: [
        "Lead engaging 1-hour learning sessions",
        "Prepare materials and lesson plans",
        "Adapt teaching methods for different age groups",
        "Maintain a safe and inspiring learning environment",
        "Collaborate with team on curriculum development"
      ]
    },
    {
      id: 2,
      title: "Teaching Assistant",
      type: "Part-time",
      location: "Brooklyn, NY",
      description: "Join our team as a Teaching Assistant to support our creative learning programs. Help prepare materials, assist during classes, and support our mission of hands-on education for all ages.",
      requirements: [
        "High school diploma or equivalent",
        "Experience working with children or in educational settings",
        "Reliable, punctual, and team-oriented",
        "Basic organizational skills",
        "Enthusiasm for creative learning",
        "Ability to lift/carry class materials"
      ],
      responsibilities: [
        "Assist teachers during class sessions",
        "Prepare and organize class materials",
        "Help maintain clean and safe learning spaces",
        "Support students during activities",
        "Help with class setup and cleanup"
      ]
    }
  ]

  const pageStyle = {
    padding: '2rem',
    paddingTop: '120px',
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    color: '#333333'
  }

  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 1rem'
  }

  const titleStyle = {
    fontSize: '3rem',
    color: palette.primary,
    textAlign: 'center',
    margin: '2rem 0',
    fontWeight: 'bold'
  }

  const introStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#555555',
    textAlign: 'center',
    marginBottom: '3rem',
    maxWidth: '800px',
    margin: '0 auto 3rem auto'
  }

  const jobCardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '2rem',
    marginBottom: '2rem',
    border: `2px solid ${palette.lightBlue}`,
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  }

  const jobHeaderStyle = {
    borderBottom: `2px solid ${palette.lightBlue}`,
    paddingBottom: '1.5rem',
    marginBottom: '1.5rem'
  }

  const jobTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: palette.primary,
    marginBottom: '0.5rem'
  }

  const jobMetaStyle = {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    marginBottom: '1rem'
  }

  const metaItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
    color: '#666666'
  }

  const sectionStyle = {
    marginBottom: '1.5rem'
  }

  const sectionTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: palette.darkGreen,
    marginBottom: '1rem'
  }

  const listStyle = {
    listStyleType: 'none',
    padding: 0
  }

  const listItemStyle = {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#555555',
    marginBottom: '0.5rem',
    paddingLeft: '1.5rem',
    position: 'relative'
  }

  const bulletStyle = {
    position: 'absolute',
    left: '0',
    top: '0.3rem',
    width: '6px',
    height: '6px',
    backgroundColor: palette.accent,
    borderRadius: '50%'
  }

  const applyButtonStyle = {
    backgroundColor: palette.primary,
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(0, 114, 176, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    margin: '2rem auto 0 auto'
  }

  const handleApply = (jobTitle) => {
    const subject = `Application for ${jobTitle} Position`
    const body = `Hello,

I am interested in applying for the ${jobTitle} position at Brilliant Brain Classes. Please find my resume attached.

Best regards,`
    
    window.location.href = `mailto:info@brilliantbrainclasses.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <motion.div 
      style={pageStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div style={containerStyle}>
        <motion.h1 
          style={titleStyle}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Team
        </motion.h1>

        <motion.p
          style={introStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Be part of our mission to inspire learning through creative, hands-on experiences. 
          We're looking for passionate educators and assistants who share our vision of 
          making education engaging and accessible for all ages.
        </motion.p>

        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            style={jobCardStyle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ 
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
            }}
          >
            <div style={jobHeaderStyle}>
              <h2 style={jobTitleStyle}>{job.title}</h2>
              <div style={jobMetaStyle}>
                <div style={metaItemStyle}>
                  <FontAwesomeIcon icon={faClock} style={{ color: palette.primary }} />
                  <span>{job.type}</span>
                </div>
                <div style={metaItemStyle}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: palette.primary }} />
                  <span>{job.location}</span>
                </div>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555555', margin: '1rem 0 0 0' }}>
                {job.description}
              </p>
            </div>

            <div style={sectionStyle}>
              <h3 style={sectionTitleStyle}>
                <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '0.5rem' }} />
                Requirements
              </h3>
              <ul style={listStyle}>
                {job.requirements.map((req, reqIndex) => (
                  <li key={reqIndex} style={listItemStyle}>
                    <div style={bulletStyle}></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div style={sectionStyle}>
              <h3 style={sectionTitleStyle}>Responsibilities</h3>
              <ul style={listStyle}>
                {job.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} style={listItemStyle}>
                    <div style={bulletStyle}></div>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              style={applyButtonStyle}
              onClick={() => handleApply(job.title)}
              whileHover={{ 
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0, 114, 176, 0.4)'
              }}
              whileTap={{ transform: 'translateY(0)' }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Submit Resume
            </motion.button>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          
          div[style*="fontSize: '2rem'"] {
            font-size: 1.8rem !important;
          }
          
          div[style*="gap: '2rem'"] {
            gap: 1rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          
          div[style*="padding: '2rem'"] {
            padding: 1.5rem !important;
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
          
          div[style*="fontSize: '2rem'"] {
            font-size: 1.5rem !important;
          }
          
          div[style*="fontSize: '1.2rem'"] {
            font-size: 1.1rem !important;
            margin-bottom: 2rem !important;
          }
          
          button[style*="fontSize: '1.1rem'"] {
            font-size: 1rem !important;
            padding: 0.9rem 1.5rem !important;
          }
          
          div[style*="borderRadius: '20px'"] {
            border-radius: 15px !important;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default Careers
