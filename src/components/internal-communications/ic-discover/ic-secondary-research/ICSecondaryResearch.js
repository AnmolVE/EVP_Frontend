import React, { useState } from "react";

import "./ICSecondaryResearch.css";

function ICSecondaryResearch() {
  const [activeTab, setActiveTab] = useState("Credibility");

  return (
    <div className="ic-secondaryResearch-main-container">
      <div className="ic-secondaryResearch-container">
        <div className="ic-secondaryResearch-info">Left</div>
        <div className="ic-secondaryResearch-upload">
          <div className="ic-secondaryResearch-upload-tabs">
            <div
              className={`ic-secondaryResearch-upload-tab ${
                activeTab === "Credibility" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Credibility")}
            >
              <p>Credibility</p>
            </div>
            <div
              className={`ic-secondaryResearch-upload-tab ${
                activeTab === "Respect" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Respect")}
            >
              <p>Respect</p>
            </div>
            <div
              className={`ic-secondaryResearch-upload-tab ${
                activeTab === "Fairness" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Fairness")}
            >
              <p>Fairness</p>
            </div>
            <div
              className={`ic-secondaryResearch-upload-tab ${
                activeTab === "Pride" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Pride")}
            >
              <p>Pride</p>
            </div>
            <div
              className={`ic-secondaryResearch-upload-tab ${
                activeTab === "Camaraderie" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Camaraderie")}
            >
              <p>Camaraderie</p>
            </div>
          </div>
          <div className="ic-secondaryResearch-upload-container">
            {activeTab === "Credibility" && <div>Credibility</div>}
            {activeTab === "Respect" && <div>Respect</div>}
            {activeTab === "Fairness" && <div>Fairness</div>}
            {activeTab === "Pride" && <div>Pride</div>}
            {activeTab === "Camaraderie" && <div>Camaraderie</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ICSecondaryResearch;
