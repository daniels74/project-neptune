import React from 'react';
import '../App.css';
import './cardscover.css';

function cardscover() {
  return (
  <div className='cardscover-container'>
    <video src="./videos/cw.mp4" autoPlay loop muted />
      {/* <img src="./images/stonepath.jpg"/> */}
  </div>
  )
}

export default cardscover;
