import React from "react";
//import HeroSection from '../HeroSection/HeroSection'
import ImageSlider from "../Slider/ImageSlider";
import { SliderData } from "../Slider/SliderData";
import "../../App.css";
import "./Home.css";
import { Button } from './../Button/Button';

const Home = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <div className="home-container">
        <video src="/videos/darkwaterfall.mp4" autoPlay loop muted />
        <div className="home-top">
          <div className="hero-slider">
            <ImageSlider slides={SliderData} />
          </div>
        </div>
        <div className="home-bottom">
          <div className="home-texts">
            <h4>Rogelio Flores</h4>
            <h1>Experienced and Talented Work</h1>
            <p>For an appointment, just reach out</p>
          </div>
          <div className="home-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            REACH OUT
          </Button>

          <Button
            className="btns"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--large"
          >
            WATCH VIDEOS{" "}
            {/* <FontAwesomeIcon icon={"play-circle"}></FontAwesomeIcon> */}
          </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
