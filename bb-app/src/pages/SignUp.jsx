import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import palette from '../utils/colors'
import classesData from '../../JSON/Classes.json'

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    classesInterested: [],
    location: '',
    preferredDateTime: '',
    phone: '',
    email: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const pageStyle = {
    padding: '2rem',
    paddingTop: '120px',
    textAlign: 'left',
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    color: '#333333',
    maxWidth: '800px',
    margin: '0 auto'
  }

  const titleStyle = {
    fontSize: '3rem',
    color: palette.primary,
    margin: '2rem 0',
    fontWeight: 'bold',
    textAlign: 'center'
  }

  const thankYouStyle = {
    fontSize: '1.1rem',
    marginBottom: '3rem',
    lineHeight: '1.7',
    textAlign: 'center',
    backgroundColor: '#f8fafc',
    color: '#334155',
    padding: '2.5rem 2rem',
    borderRadius: '12px',
    border: `1px solid ${palette.lightBlue}`,
    boxShadow: '0 2px 8px rgba(42, 150, 217, 0.08)'
  }

  const formStyle = {
    backgroundColor: '#FFFFFF',
    padding: '2rem',
    borderRadius: '15px',
    border: `2px solid ${palette.lightBlue}`,
    marginBottom: '2rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
  }

  const fieldGroupStyle = {
    marginBottom: '1.5rem'
  }

  const labelStyle = {
    display: 'block',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: palette.darkBlue,
    marginBottom: '0.5rem'
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: `2px solid ${palette.lightBlue}`,
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease'
  }

  const selectStyle = {
    ...inputStyle,
    backgroundColor: '#FFFFFF'
  }

  const checkboxGroupStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '0.5rem',
    marginTop: '0.5rem'
  }

  const checkboxItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: `1px solid ${palette.lightBlue}`
  }

  const checkboxStyle = {
    accentColor: palette.primary
  }

  const submitButtonStyle = {
    backgroundColor: palette.primary,
    color: '#FFFFFF',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    marginTop: '1rem'
  }

  const contactInfoStyle = {
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    borderRadius: '15px',
    border: `2px solid ${palette.lightBlue}`,
    textAlign: 'center'
  }

  const contactTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: palette.darkBlue,
    marginBottom: '1rem'
  }

  const contactItemStyle = {
    fontSize: '1.1rem',
    color: '#333333',
    margin: '0.75rem 0',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    flexWrap: 'wrap',
    wordBreak: 'break-word'
  }

  const successMessageStyle = {
    backgroundColor: palette.darkGreen,
    color: '#FFFFFF',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '2rem'
  }

  const errorMessageStyle = {
    backgroundColor: '#dc3545',
    color: '#FFFFFF',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '1rem',
    marginBottom: '1rem'
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClassChange = (classTitle, isChecked) => {
    setFormData(prev => ({
      ...prev,
      classesInterested: isChecked 
        ? [...prev.classesInterested, classTitle]
        : prev.classesInterested.filter(c => c !== classTitle)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    // Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxGtN-_wIMkggCJW9vw58J6tBPbJqqAEMLZDg_-IryXIucAsKDO6_c4BrDclnX0Vt4_Iw/exec'
    
    try {
      const submissionData = {
        ...formData,
        classesInterested: formData.classesInterested.join(', '), // Convert array to string
        timestamp: new Date().toISOString(),
        submissionDate: new Date().toLocaleDateString(),
        submissionTime: new Date().toLocaleTimeString()
      }

      // Send data to Google Apps Script using URL parameters (more reliable)
      const params = new URLSearchParams()
      Object.keys(submissionData).forEach(key => {
        params.append(key, submissionData[key])
      })
      
      const urlWithParams = `${SCRIPT_URL}?${params.toString()}`
      console.log('Sending request to:', urlWithParams)
      
      await fetch(urlWithParams, {
        method: 'GET',
        mode: 'no-cors'
      })

      // Since we're using no-cors mode, we can't read the response
      // We'll assume success if no error is thrown
      console.log('Form submitted successfully:', submissionData)
      setIsSubmitted(true)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('There was an error submitting your form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div style={pageStyle}>
        <motion.div
          style={successMessageStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Thank you for your submission! We'll get back to you within 24 hours.
        </motion.div>
        
        <motion.div
          style={contactInfoStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 style={contactTitleStyle}>Contact Information</h3>
          <div style={contactItemStyle}>
            <FontAwesomeIcon icon={faPhone} style={{ color: palette.primary, flexShrink: 0 }} />
            <span>(214) 923-7821</span>
          </div>
          <div style={contactItemStyle}>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: palette.primary, flexShrink: 0 }} />
            <span>info@brilliantbrainclasses.org</span>
          </div>
          <div style={contactItemStyle}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: palette.primary, flexShrink: 0 }} />
            <span>Brooklyn, NY</span>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={pageStyle}>
      <motion.h1 
        style={titleStyle}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact & Signup
      </motion.h1>

      <motion.div
        style={thankYouStyle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Thank you for your interest in Brilliant Brain Classes! We're excited to help you or your child explore new skills and creativity. Please fill out the form below and we'll get back to you within 24 hours to schedule your session.
      </motion.div>

      <motion.form
        style={formStyle}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {submitError && (
          <div style={errorMessageStyle}>
            {submitError}
          </div>
        )}

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={inputStyle}
            required
            placeholder="Enter your full name"
            disabled={isSubmitting}
          />
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Age of Participant *</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            style={inputStyle}
            required
            placeholder="e.g., 8 years old, Adult"
            disabled={isSubmitting}
          />
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Class(es) Interested In *</label>
          <div style={checkboxGroupStyle}>
            {classesData.classes.map((classItem, index) => (
              <div key={index} style={checkboxItemStyle}>
                <input
                  type="checkbox"
                  id={`class-${index}`}
                  style={checkboxStyle}
                  onChange={(e) => handleClassChange(classItem.title, e.target.checked)}
                  disabled={isSubmitting}
                />
                <label htmlFor={`class-${index}`} style={{ fontSize: '0.95rem', cursor: 'pointer' }}>
                  {classItem.title}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Location Preference *</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            style={selectStyle}
            required
            disabled={isSubmitting}
          >
            <option value="">Select location preference</option>
            <option value="in-studio">In-Studio (Brooklyn, NY)</option>
            <option value="on-site">On-Site (Your Location)</option>
          </select>
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Preferred Day/Time *</label>
          <input
            type="text"
            name="preferredDateTime"
            value={formData.preferredDateTime}
            onChange={handleInputChange}
            style={inputStyle}
            required
            placeholder="e.g., Weekends, Tuesday evenings, flexible"
            disabled={isSubmitting}
          />
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            style={inputStyle}
            required
            placeholder="(123) 456-7890"
            disabled={isSubmitting}
          />
        </div>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={inputStyle}
            required
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          style={{
            ...submitButtonStyle,
            backgroundColor: isSubmitting ? '#ccc' : submitButtonStyle.backgroundColor,
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.target.style.backgroundColor = palette.darkBlue
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.target.style.backgroundColor = palette.primary
            }
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </motion.form>

      <motion.div
        style={contactInfoStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 style={contactTitleStyle}>Get in Touch</h3>
        <div style={contactItemStyle}>
          <FontAwesomeIcon icon={faPhone} style={{ color: palette.primary, flexShrink: 0 }} />
          <span>(214) 923-7821</span>
        </div>
        <div style={contactItemStyle}>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: palette.primary, flexShrink: 0 }} />
          <span>info@brilliantbrainclasses.org</span>
        </div>
        <div style={contactItemStyle}>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: palette.primary, flexShrink: 0 }} />
          <span>Brooklyn, NY</span>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          /* Mobile contact info improvements */
          div[style*="contactInfoStyle"] {
            padding: 1.5rem 1rem !important;
          }
          
          div[style*="contactItemStyle"] {
            font-size: 1rem !important;
            flex-direction: column !important;
            gap: 0.25rem !important;
            text-align: center !important;
          }
          
          div[style*="contactItemStyle"] span {
            font-size: 0.95rem !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          
          h1 {
            font-size: 2rem !important;
          }
          
          /* Small mobile specific */
          div[style*="contactInfoStyle"] {
            padding: 1rem 0.75rem !important;
            margin: 1rem 0 !important;
          }
          
          div[style*="contactTitleStyle"] {
            font-size: 1.25rem !important;
          }
          
          div[style*="contactItemStyle"] {
            margin: 0.5rem 0 !important;
          }
          
          /* Form improvements for small screens */
          div[style*="formStyle"] {
            padding: 1.5rem !important;
          }
          
          div[style*="thankYouStyle"] {
            padding: 1.5rem 1rem !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default SignUp
