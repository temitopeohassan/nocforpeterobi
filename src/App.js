import React from 'react';
import image from './assets/logo2.jpg'



import style from './App.module.scss';

function App() {
  return (
    <div className={ style.pageContainer }>
    <img src={image} alt="Northern Coalition For Peter Obi" height={320} width={320} />
      <h2>Northern Coalition For Peter Obi</h2>
      <p>Site In Development</p>
     
    </div>  
  );
}

export default App;