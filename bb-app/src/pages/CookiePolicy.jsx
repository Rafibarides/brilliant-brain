import palette from '../utils/colors'

function CookiePolicy() {
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
      <h1 style={titleStyle}>Cookie Policy</h1>
      
      <div style={sectionStyle}>
        <p style={textStyle}>
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>What Are Cookies?</h2>
        <p style={textStyle}>
          Cookies are small text files that are stored on your device when you visit our website. 
          They help us provide you with a better browsing experience and analyze how our site is used.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>How We Use Cookies</h2>
        <p style={textStyle}>
          We use cookies for the following purposes:
        </p>
        <ul style={textStyle}>
          <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Managing Cookies</h2>
        <p style={textStyle}>
          You can control and manage cookies through your browser settings. Most browsers allow you to:
        </p>
        <ul style={textStyle}>
          <li>View what cookies are stored on your device</li>
          <li>Delete cookies individually or all at once</li>
          <li>Block cookies from specific sites</li>
          <li>Block all cookies</li>
        </ul>
        <p style={textStyle}>
          Please note that blocking certain cookies may impact your experience on our website.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Third-Party Cookies</h2>
        <p style={textStyle}>
          Our website may contain links to third-party websites. These sites may set their own cookies. 
          We do not control these cookies and recommend reviewing their privacy policies.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Contact Us</h2>
        <p style={textStyle}>
          If you have questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy 