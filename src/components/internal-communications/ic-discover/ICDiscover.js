import React, { useState } from "react";

import "./ICDiscover.css";
import ICDesignPrinciples from "./ic-design-principles/ICDesignPrinciples";

function ICDiscover() {
  const [activeTab, setActiveTab] = useState("Design Principles");

  return (
    <div className="ic-discover">
      <div className="ic-discover-left-nav">
        <div
          className={`ic-discover-left-nav-tab ${
            activeTab === "Design Principles" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Design Principles")}
        >
          <div className="ic-discover-left-nav-tab-content">
            <p>Design Principles</p>
          </div>
        </div>
        <div
          className={`ic-discover-left-nav-tab ${
            activeTab === "Primary Research" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Primary Research")}
        >
          <div className="ic-discover-left-nav-tab-content">
            <p>Primary Research</p>
          </div>
        </div>
        <div
          className={`ic-discover-left-nav-tab ${
            activeTab === "Secondary Research" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Secondary Research")}
        >
          <div className="ic-discover-left-nav-tab-content">
            <p>Secondary Research</p>
          </div>
        </div>
      </div>
      <div className="ic-discover-main-content">
        {activeTab === "Design Principles" && <ICDesignPrinciples />}
        {activeTab === "Primary Research" && <div>Primary Research</div>}
        {activeTab === "Secondary Research" && <div>Secondary Research</div>}
      </div>
    </div>
  );
}

export default ICDiscover;
