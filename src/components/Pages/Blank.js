import React from "react";
import HeroSection from '../HeroSection/HeroSection'
import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/SliderData';
import '../../App.css';
import './Blank.css';

const Blank = () => {
  return (
    <>
    <HeroSection />
    <div className="container">
      <h3>Most Recent Work</h3>
      <ImageSlider slides={SliderData} />;
    </div>
    </>
    
  )
}
export default Blank;
