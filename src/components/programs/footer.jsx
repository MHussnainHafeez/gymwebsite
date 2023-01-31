import React from "react";
import "./footer.css";
import Github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <img src={Github} alt="" />
        <img src={instagram} alt="" />
        <img src={LinkedIn} alt="" />
        </div>
      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
      <div className="blur footer-blur1"></div>
      <div className="blur footer-blur2"></div>
      </div>
    </div>
  );
}

export default Footer;
