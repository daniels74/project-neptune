import React from 'react';
import '../../App.css';
import { Button } from './../Button/Button';
import './HeroSection.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//<i className='far fa-play-circle' />

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <video src='/videos/darkwaterfall.mp4' autoPlay loop muted />
      
      <h1>Experienced and Talented Work</h1>
      
      <p>For an appointment, just reach out</p>
      
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          REACH OUT
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary--solid'
          buttonSize='btn--large'
        >
          WATCH VIDEOS <FontAwesomeIcon icon={"play-circle"}></FontAwesomeIcon>
        </Button>

      </div>
    
    </div>
  );
}

export default HeroSection;