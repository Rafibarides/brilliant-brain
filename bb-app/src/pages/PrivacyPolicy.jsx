import palette from '../utils/colors'

function PrivacyPolicy() {
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
      <h1 style={titleStyle}>Privacy Policy</h1>
      
      <div style={sectionStyle}>
        <p style={textStyle}>
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Information We Collect</h2>
        <p style={textStyle}>
          We collect information you provide directly to us, such as when you create an account, 
          sign up for classes, or contact us. This may include your name, email address, phone number, 
          and other contact information.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>How We Use Your Information</h2>
        <p style={textStyle}>
          We use the information we collect to:
        </p>
        <ul style={textStyle}>
          <li>Provide and improve our educational services</li>
          <li>Communicate with you about classes and scheduling</li>
          <li>Send you updates and promotional materials (with your consent)</li>
          <li>Respond to your questions and provide customer support</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Information Sharing</h2>
        <p style={textStyle}>
          We do not sell, trade, or rent your personal information to third parties. We may share 
          information in certain limited circumstances, such as with your consent or as required by law.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Data Security</h2>
        <p style={textStyle}>
          We implement appropriate security measures to protect your personal information against 
          unauthorized access, alteration, disclosure, or destruction.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Contact Us</h2>
        <p style={textStyle}>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p style={textStyle}>
          Email: brilliantbrainclasses@gmail.com<br/>
          Phone: (214) 923-7821<br/>
          Location: Brooklyn, NY
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy 