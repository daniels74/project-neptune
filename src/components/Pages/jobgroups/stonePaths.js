import React from 'react';
import ImageSlider from '../../Slider/ImageSlider';
import { SliderData } from '../../Slider/SliderData';
import '../../../App.css';

const stonePaths = () => {
    return (
      <>
      <div className="container">
        <div className="row justify-content-center mt-5 p-0">
          <h3>Most Recent Work</h3>
        </div>
      </div>
      <ImageSlider slides={SliderData} />;
      </>
      
    )
  }
  export default stonePaths;