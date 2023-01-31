import { Button } from "@mui/material";
import React from "react";
// import { BrowserRouter } from 'react-router-dom'
import "../components/Hero.css";
import Header from "./Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
hudhghg
// left Box styling
let leftbox = {
  padding: "2rem",
  paddingTop: "1.5rem",
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
};
// styling for buttons
let orangebtns = {
  backgroundColor: "var(--orange)",
  padding: "0.5rem",
  fontWeight: "bold",
  color: "white",
  border: "4px solid transparant",
  transition: "300ms all",
};
function Hero() {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-s" style={leftbox}>
        {/* navbar */}
        <Header />
        {/* add slide */}
        <div className="slide">
          <div className="orangediv"></div>
          <span>The Best Fitness Club In the Town</span>
        </div>
        {/* Main heading */}
        <div className="main-heading">
          <div>
            <span className="outlined-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              Here we help you to shape and build your ideal body and live up
              your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+895</span>
            <span>mermbers joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* buttons */}
        <div className="hero-buttons">
          <Button style={orangebtns} className="btn1">
            Get Started
          </Button>
          <Button
            variant="outlined"
            style={{ border: "1px solid var(--orange)", color: "white" }}
            className="btn2"
          >
            Learn More
          </Button>
        </div>
      </div>
      {/* right div */}
      <div className="right-s">
        <Button style={orangebtns}>Join Now</Button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>bpm</span>
        </div>
        {/* hero images */}
        <img src={hero_image} className="heroimage" alt="" />
        <img src={hero_image_back} alt="" className="hero_image_back" />
        {/* calories  */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
