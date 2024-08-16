import React from "react";

import EVPJourneyImage from "../../../../assets/images/EVP_Journey.png";

import "./EVPJourney.css";

function EVPJourney({ setCurrentListItem }) {
  return (
    <div className="evp-journey-main-container">
      <div className="evp-journey-information">
        <div className="evp-journey-information-top">
          <h1>EVP Journey</h1>
          <p>An Employee Value Proposition is the essence of your brand</p>
        </div>
        <div className="evp-journey-information-bottom">
          <h4>5-Step-Process</h4>
          <ul className="evp-journey-information-bottom-unordered-list">
            <li>Conducting primary and secondary research</li>
            <li>Segment data into talent categories</li>
            <li>SWOT and Sentiment analysis</li>
            <li>Arrange themes into desired hierarchy</li>
            <li>Get final outcomes after human validation</li>
          </ul>
        </div>
      </div>
      <div className="evp-journey-image">
        <figure className="evp-journey-image-figure">
          <img src={EVPJourneyImage} alt="EVP Journey" />
        </figure>
      </div>
    </div>
  );
}

export default EVPJourney;
