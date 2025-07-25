import palette from '../utils/colors'

function Terms() {
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

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Terms of Service</h1>
      
      <div style={sectionStyle}>
        <p style={textStyle}>
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Acceptance of Terms</h2>
        <p style={textStyle}>
          By accessing and using Brilliant Brain Classes services, you accept and agree to be 
          bound by the terms and provision of this agreement.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Services</h2>
        <p style={textStyle}>
          Brilliant Brain Classes provides educational instruction and creative learning experiences. 
          We reserve the right to modify or discontinue services at any time.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Payment and Cancellation</h2>
        <p style={textStyle}>
          Payment is due at the time of booking. Cancellations must be made at least 24 hours 
          in advance for a full refund. Same-day cancellations may incur a cancellation fee.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Liability</h2>
        <p style={textStyle}>
          While we take every precaution to ensure safety during our classes, participants 
          engage in activities at their own risk. We are not liable for any injuries or damages.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Intellectual Property</h2>
        <p style={textStyle}>
          All content, materials, and curriculum used in our classes are the intellectual 
          property of Brilliant Brain Classes and are protected by copyright law.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Contact Information</h2>
        <p style={textStyle}>
          For questions about these Terms of Service, contact us at:
        </p>
        <p style={textStyle}>
          Email: info@brilliantbrainclasses.org<br/>
          Phone: (214) 923-7821<br/>
          Location: Brooklyn, NY
        </p>
      </div>
    </div>
  )
}

export default Terms 