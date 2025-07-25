import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import palette from '../utils/colors'

function Support() {
  const pageStyle = {
    padding: '2rem',
    paddingTop: '120px',
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    color: '#333333',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6'
  }

  const titleStyle = {
    fontSize: '3rem',
    color: palette.primary,
    margin: '2rem 0',
    fontWeight: 'bold',
    textAlign: 'center'
  }

  const sectionStyle = {
    marginBottom: '2rem'
  }

  const sectionTitleStyle = {
    fontSize: '1.5rem',
    color: palette.darkBlue,
    fontWeight: 'bold',
    marginBottom: '1rem'
  }

  const textStyle = {
    fontSize: '1rem',
    marginBottom: '1rem'
  }

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.1rem',
    color: '#333333',
    margin: '1rem 0',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: `1px solid ${palette.lightBlue}`
  }

  const faqStyle = {
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: `1px solid ${palette.lightBlue}`
  }

  const questionStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: palette.darkBlue,
    marginBottom: '0.5rem'
  }

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Support</h1>
      
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Get Help</h2>
        <p style={textStyle}>
          We're here to help! If you have any questions about our classes, need assistance with 
          booking, or have any other concerns, please don't hesitate to reach out.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Contact Us</h2>
        <div style={contactItemStyle}>
          <FontAwesomeIcon icon={faPhone} style={{ color: palette.primary }} />
          <span><strong>Phone:</strong> (214) 923-7821</span>
        </div>
        <div style={contactItemStyle}>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: palette.primary }} />
          <span><strong>Email:</strong> brilliantbrainclasses@gmail.com</span>
        </div>
        <div style={contactItemStyle}>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: palette.primary }} />
          <span><strong>Location:</strong> Brooklyn, NY</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Frequently Asked Questions</h2>
        
        <div style={faqStyle}>
          <div style={questionStyle}>How do I book a class?</div>
          <p style={textStyle}>
            You can book a class by visiting our Contact & Signup page and filling out the form, 
            or by calling us directly at (214) 923-7821.
          </p>
        </div>

        <div style={faqStyle}>
          <div style={questionStyle}>What is your cancellation policy?</div>
          <p style={textStyle}>
            We require 24 hours notice for cancellations to receive a full refund. 
            Same-day cancellations may incur a fee.
          </p>
        </div>

        <div style={faqStyle}>
          <div style={questionStyle}>Do you provide all supplies?</div>
          <p style={textStyle}>
            Yes! All supplies and materials are included in our classes. You don't need to bring anything 
            except enthusiasm to learn.
          </p>
        </div>

        <div style={faqStyle}>
          <div style={questionStyle}>What ages do you teach?</div>
          <p style={textStyle}>
            We offer age-appropriate classes for children as young as 4 years old up to adults. 
            Each class description includes the recommended age range.
          </p>
        </div>

        <div style={faqStyle}>
          <div style={questionStyle}>Do you offer group discounts?</div>
          <p style={textStyle}>
            Yes, we offer discounts for group bookings and multiple class packages. 
            Contact us for more information about pricing options.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Support 