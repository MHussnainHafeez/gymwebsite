import React from 'react'
import './testimonial.css'
import { useState } from 'react';
import {testimonialsData} from '../../data/testimonialsData';
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from '../../assets/rightArrow.png';

const tLength=testimonialsData.length;


function Testimonial() {
    const [selected,setselected]= useState(0);
  return (
    <div className='Testimonials'>
        <div className="left-t">
            <span>Testimonials</span >
            <span className='outlined-text'>What They</span>
            <span>say about us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
            <span style={{color:'var(--orange)'}}>
                {testimonialsData[selected].name}
            </span> - {testimonialsData[selected].status}
            </span>
        </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
            <img onClick={()=>{
                selected===0 ? setselected(tLength-1):
                setselected((prev)=>prev-1);
}} src={leftArrow} alt="" />
            <img onClick={()=>{
                selected===tLength-1 ? setselected(0):
                setselected((prev)=>prev+1);
}} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
