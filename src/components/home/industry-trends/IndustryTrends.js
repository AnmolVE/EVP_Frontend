import React from "react";

import "./IndustryTrends.css";

function IndustryTrends() {
  return (
    <div className="industry-trends-main-container">
      <div className="industry-trends-container">
        <div className="industry-trends-heading">
          <h1>Industry Trends</h1>
        </div>
        <div className="industry-trends-below">
          <div className="industry-trends-below-left">
            <div className="industry-trends-below-left-data">
              Select Industry
            </div>
            <div className="industry-trends-below-left-data">
              Select Sub-Industry
            </div>
            <div className="industry-trends-below-left-data">
              Select Geography
            </div>
          </div>
          <div className="industry-trends-below-right">Output</div>
        </div>
      </div>
    </div>
  );
}

export default IndustryTrends;
