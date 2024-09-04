import React, { useState } from "react";

import "./InternalCommunications.css";
import Navbar from "../bars/Navbar";
import Footer from "../bars/Footer";
import ICDiscover from "./ic-discover/ICDiscover";
import ICDevelop from "./ic-develop/ICDevelop";
import ICDissect from "./ic-dissect/ICDissect";
import ICDesign from "./ic-design/ICDesign";
import ICDeliver from "./ic-deliver/ICDeliver";

function InternalCommunications() {
  const [activeTab, setActiveTab] = useState("DISCOVER");

  return (
    <div className="ic-module">
      <div className="ic-main-container">
        <div className="ic-headers">
          <Navbar />
          <div className="ic-module-navbar-tabs">
            <div
              className={`ic-module-navbar-tab ${
                activeTab === "DISCOVER" ? "active" : ""
              }`}
              onClick={() => setActiveTab("DISCOVER")}
            >
              <p>DISCOVER</p>
            </div>
            <div
              className={`ic-module-navbar-tab ${
                activeTab === "DEVELOP" ? "active" : ""
              }`}
              onClick={() => setActiveTab("DEVELOP")}
            >
              <p>DEVELOP</p>
            </div>
            <div
              className={`ic-module-navbar-tab ${
                activeTab === "DISSECT" ? "active" : ""
              }`}
              onClick={() => setActiveTab("DISSECT")}
            >
              <p>DISSECT</p>
            </div>
            <div
              className={`ic-module-navbar-tab ${
                activeTab === "DESIGN" ? "active" : ""
              }`}
              onClick={() => setActiveTab("DESIGN")}
            >
              <p>DESIGN</p>
            </div>
            <div
              className={`ic-module-navbar-tab ${
                activeTab === "DELIVER" ? "active" : ""
              }`}
              onClick={() => setActiveTab("DELIVER")}
            >
              <p>DELIVER</p>
            </div>
          </div>
        </div>
        <div className="ic-content">
          {activeTab === "DISCOVER" && <ICDiscover />}
          {activeTab === "DEVELOP" && <ICDevelop />}
          {activeTab === "DISSECT" && <ICDissect />}
          {activeTab === "DESIGN" && <ICDesign />}
          {activeTab === "DELIVER" && <ICDeliver />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default InternalCommunications;
