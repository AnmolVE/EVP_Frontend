import React from "react";

import "./EVPJourney.css";

function EVPJourney({ setCurrentListItem }) {
  return (
    <div className="evp-journey-main-container">
      <h1>EVP Journey</h1>
      <div className="evp-journey-top">
        <div className="evp-journey-top-left">
          <p>
            An Employee Value Proposition is the essence of your employer brand.
            The unique selling point that sets you apart from competition to
            attract and retain top talent. Organizations with a clear EVP
            experience bottom line impact. A well-defined EVP drives tangible
            business results, including up to 50% more qualified candidates, a
            30% reduction in attrition, and up to 2X faster time-to-fill.
          </p>
        </div>
        <div className="evp-journey-top-right">
          <p>
            We collect, segment, and analyze the following datasets to arrive at
            your EVP:
          </p>
          <div className="evp-journey-top-right-list">
            <ul className="evp-journey-top-right-unordered-list">
              <li>Company Dataset</li>
              <li>Industry</li>
              <li>Talent Dataset</li>
              <li>STIMULAI's EVP Dataset</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="evp-journey-middle">
        <p>The process we follow in this module:</p>
        <div className="evp-journey-middle-main-content">
          <ul className="evp-journey-middle-main-content-unordered-list">
            <li>
              Discovery - all of the research and data points collected from
              internal and external sources, secondary and primary research
            </li>
            <li>
              Develop - here the data is segmented into appropriate EVP-relevant
              categories
            </li>
            <li>
              Dissect - here the data has now turned into insights after
              undergoing SWOT and sentiment analyses
            </li>
            <li>
              Design - finally, the insights have now turned into messaging
              providing you with the key pillars of your EVP and the positioning
              statement and other deliverables
            </li>
            <li>
              Deliver - if you've chosen this feature, we will then bring your
              EVP to life via ready-to-use creatives
            </li>
          </ul>
        </div>
      </div>
      <div className="evp-journey-buttons">
        <button onClick={() => setCurrentListItem("Primary Research")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default EVPJourney;
