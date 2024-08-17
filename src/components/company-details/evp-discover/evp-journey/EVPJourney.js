import React from "react";

import { EVPJourneyImage } from "../../../../assets/images/images";

import "./EVPJourney.css";

function EVPJourney({ setCurrentListItem }) {
  return (
    <div className="evp-journey-main-container">
      <div className="evp-journey-information">
        <div className="evp-journey-information-top">
          <p className="evp-journey-information-top-para-heading">
            EVP Journey
          </p>
          <p className="evp-journey-para">
            An Employee Value Proposition is the essence of your brand
          </p>
          <p className="evp-journey-info-para">
            It is the unique selling point that sets you apart from competition
            to attract and retain top talent. A well-defined EVP drives tangible
            business results, including up to 50% more qualified candidates, a
            30% reduction in attrition, and upto 2X faster time-to-fill.
          </p>
        </div>
        <hr />
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
