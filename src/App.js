import { useState } from 'react';
import { add } from 'date-fns';
import image from './assets/logo2.jpg'

import { Ticker } from 'components/Ticker';

import style from './App.module.scss';

// Defaults to 6 days, 22 hours, 40 minutes and 0 seconds from now in your timezone.
const futureDate = add(new Date(), {
  days: 13,
  hours: 4,
  minutes: 40
});

function App() {
  const [tickerVisible, setTickerVisible] = useState(false);
  const tickerEl = tickerVisible ? <Ticker futureDate={futureDate} /> : null;
  const toggleText = tickerVisible ? 'Hide Countdown': 'Show Countdown';

  return (
    <div className={ style.pageContainer }>
    <img src={image} alt="Northern Coalition For Peter Obi" height={320} width={320} />
      <h2>Northern Coalition For Peter Obi</h2>
      <p>Site In Development</p>
      { tickerEl }
      <button 
        className={ style.toggleButton } 
        onClick={() => setTickerVisible(prev => !prev) }
      >
        { toggleText }
      </button>
    </div>  
  );
}

export default App;