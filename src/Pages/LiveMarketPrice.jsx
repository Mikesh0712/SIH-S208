// import React from 'react'

// function LiveMarketPrice() {
//   return (
//     <div>
//       <h1>LiveMarketPrice</h1>
//     </div>
    
//   )
// }


// export default LiveMarketPrice
import React from 'react'

// NewsTicker component for LiveMarketPrice page
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
    zIndex: 2,
    marginBottom: '1rem'
  }}>
    <div className="container d-flex align-items-center flex-nowrap">
      <span className="me-3" style={{ fontWeight: 700, fontSize: '1.15rem', whiteSpace: 'nowrap' }}>
        Live Market Price News:
      </span>
      <marquee behavior="scroll" direction="left" scrollamount="5" style={{ width: '100%' }}>
        Real-time price updates for all major crops • Compare prices across regions • New: Price trends chart now available • Stay tuned for more updates!
      </marquee>
    </div>
  </div>
);

function LiveMarketPrice() {
  return (
    <div>
      <NewsTicker />
      <h1>LiveMarketPrice</h1>
    </div>
  )
}

export default LiveMarketPrice
