import React from "react";
import "./program.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png'
function Programs() {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="outlined-text">Explore our</span>
        <span>Programs</span>
        <span className="outlined-text">to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program)=>(
    <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
            </div>
        
        ))}
      </div>
    </div>
  );
}

export default Programs;
