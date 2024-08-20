import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-content-para-heading">About Stimulai</p>
          <p className="footer-content-para">
            Upload files and instantly translated files in selected language
          </p>
        </div>
        <div className="footer-content">
          <p className="footer-content-para-heading">Other Services</p>
          <p className="footer-content-para">
            Upload Audio/Video files and download your transcript in selected
            language
          </p>
        </div>
        <div className="footer-content">
          <p className="footer-content-para-heading">Contact Us</p>
          <p className="footer-content-para">
            Get your prompt work on latest internet data
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
