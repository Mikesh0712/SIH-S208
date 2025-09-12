
import React from 'react'
import HeroSection from '../Components/HeroSection'
import FeatureStrip from '../Components/FeatureStrip'
import AgricultureStats from '../Components/AgricultureStats'
import Whatwedo from '../Components/Whatwedo';

// NewsTicker component with title and news in the same line
const NewsTicker = () => (
  <div style={{
    background: 'linear-gradient(90deg, #38c172 0%, #4f8cff 100%)',
    color: '#fff',
    padding: '0.5rem 0',
    fontWeight: 500,
    fontSize: '1.08rem',
    letterSpacing: '0.5px',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 2
  }}>
    <div className="container d-flex align-items-center flex-nowrap">
      <span className="me-3" style={{ fontWeight: 700, fontSize: '1.15rem', whiteSpace: 'nowrap' }}>
        Welcome to Agri Kishan Sakhi:
      </span>
      <marquee behavior="scroll" direction="left" scrollamount="5" style={{ width: '100%' }}>
        Latest: Government announces new subsidies for organic farming • Weather alert: Heavy rainfall expected in Odisha • Market prices for rice increase by 5% • New pest-resistant seeds now available • Stay tuned for more updates!
      </marquee>
    </div>
  </div>
);

const Home = () => {
  return (
    <div>
      <HeroSection/>
      {/* News Ticker under Get Started */}
      <NewsTicker />
      <FeatureStrip/>
      <AgricultureStats />
      <Whatwedo/>
    </div>
  )
}

export default Home;