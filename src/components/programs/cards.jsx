import React from "react";
import "../programs/cards.css";
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'
import { Button } from "@mui/material";
function Cards() {

  return (
    <div className="cards">
      <div className="blur cards-blur1"></div>
      <div className="blur cards-blur2"></div>
      <div className="programs-header" style={{gap:'2rem'}}>
        <span className="outlined-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="outlined-text">NOW WITH US</span>
      </div>

      {/* cards */}
      <div className="plans">
        {plansData.map((plan,i)=>(

            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span> $ {plan.price}</span>
                <div className="features">
                   {plan.features.map((feature, i)=>(
                    <div className="feature">
                        <img src={whiteTick} alt="" />
                        <span key={i}>{feature}</span>
                    </div>


                   ))} 
                </div>
                <div>
                    <span>See more benefits -> </span>
                </div>
                <Button variant="contained" style={{backgroundColor:"white", color:'black' }}> Join Now</Button>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
