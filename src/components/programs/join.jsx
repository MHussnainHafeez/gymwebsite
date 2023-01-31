import React, { useRef } from "react";
import "./join.css";
import { Button } from "@mui/material";



function Join() {
    const form = useRef();
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="outlined-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="outlined-text"> WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container">
            <input type="email" name="user_email" placeholder="Enter Your Email" />
            <Button style={{backgroundColor:'var(--orange)',color:'white'}} className="btn-j">Join Now</Button>
        </form>
      </div>

    </div>
  );
}

export default Join;
