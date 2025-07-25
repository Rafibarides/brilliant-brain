import palette from '../utils/colors'

function About() {
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
      <h1 style={titleStyle}>About Us</h1>
      
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Our Mission</h2>
        <p style={textStyle}>
          At Brilliant Brain Classes, we believe that learning should be engaging, creative, and fun. 
          Our mission is to empower minds of all ages through hands-on educational experiences that 
          foster creativity, critical thinking, and lifelong learning.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>What We Offer</h2>
        <p style={textStyle}>
          We provide a wide range of classes designed to inspire and educate. From gardening and 
          painting to coding and artificial intelligence, our diverse curriculum ensures there's 
          something for everyone. All our classes include:
        </p>
        <ul style={textStyle}>
          <li>Age-appropriate curriculum and instruction</li>
          <li>All necessary supplies and materials</li>
          <li>Professional, experienced instructors</li>
          <li>Small class sizes for personalized attention</li>
          <li>Both in-studio and on-site options</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Our Approach</h2>
        <p style={textStyle}>
          We believe in learning by doing. Our hands-on approach encourages students to explore, 
          experiment, and discover. Whether you're 4 years old or an adult, our classes are designed 
          to meet you where you are and help you grow.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Why Choose Us</h2>
        <p style={textStyle}>
          With years of experience in education and a passion for creative learning, we're committed 
          to providing exceptional educational experiences. Our flexible scheduling, comprehensive 
          supply inclusion, and personalized approach make learning accessible and enjoyable for everyone.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Get Started</h2>
        <p style={textStyle}>
          Ready to embark on a learning adventure? Browse our classes, contact us for more information, 
          or book your first session today. We can't wait to help you discover new skills and 
          unleash your creativity!
        </p>
      </div>
    </div>
  )
}

export default About 