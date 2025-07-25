import WelcomeSection from '../sections/WelcomeSection'
import CardsSection from '../sections/CardsSection'
import AboutSection from '../sections/AboutSection'

function Home() {
  const pageStyle = {
    padding: '0',
    textAlign: 'center'
  }

  return (
    <div style={pageStyle}>
      <WelcomeSection />
      <CardsSection />
      <AboutSection />
    </div>
  )
}

export default Home
