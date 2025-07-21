import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Ravindar Kakunuri</h1>
          <p>I am Java Full-Stack developer with 4 years of experience.</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2025 Ravindar Kakunuri | <span> Portfolio developed using React</span>
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
