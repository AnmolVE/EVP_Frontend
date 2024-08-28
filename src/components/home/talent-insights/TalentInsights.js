import React from "react";

import "./TalentInsights.css";

function TalentInsights() {
  return (
    <div className="talent-insights-main-container">
      <div className="talent-insights-container">
        <div className="talent-insights-heading">
          <h1>Talent Insights</h1>
        </div>
        <div className="talent-insights-below">
          <div className="talent-insights-below-left">
            <div className="talent-insights-below-left-data">
              Data Scientists
            </div>
            <div className="talent-insights-below-left-data">
              Select Sub-Skillset
            </div>
            <div className="talent-insights-below-left-data">Philippines</div>
            <div className="talent-insights-below-left-data">
              Select Seniority
            </div>
          </div>
          <div className="talent-insights-below-right">Output</div>
        </div>
      </div>
    </div>
  );
}

export default TalentInsights;
