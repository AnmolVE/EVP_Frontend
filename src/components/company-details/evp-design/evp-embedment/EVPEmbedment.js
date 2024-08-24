import React, { useState } from "react";

import "./EVPEmbedment.css";
import PreHiring from "./PreHiring";
import Hiring from "./Hiring";
import OnBoarding from "./OnBoarding";
import LearningAndDevelopment from "./LearningAndDevelopment";
import CompensationAndBenefits from "./CompensationAndBenefits";
import InternalCommunications from "./InternalCommunications";
import EmployeeEngagement from "./EmployeeEngagement";
import SeparationExit from "./SeparationExit";
import AlumniRelations from "./AlumniRelations";

function EVPEmbedment({ companyName, accessToken }) {
  const [activeTab, setActiveTab] = useState("Pre-hiring");
  const [selectedAssets, setSelectedAssets] = useState([]);

  const handleAssetsSelected = (assets) => {
    setSelectedAssets(assets);
  };

  const handleSubmit = async () => {
    const payload = {
      [activeTab]: selectedAssets,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/evp-embedmen/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
          touchpoints: payload,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        console.log("Data submitted successfully");
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="evp-embedment-main-container">
      <div className="evp-embedment-container">
        <div className="evp-embedment-tabs">
          <div
            className={`evp-embedment-tab ${
              activeTab === "Pre-hiring" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Pre-hiring")}
          >
            <p>Pre-hiring</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Hiring" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Hiring")}
          >
            <p>Hiring</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Onboarding" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Onboarding")}
          >
            <p>Onboarding</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Learning & Development" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Learning & Development")}
          >
            <p>Learning & Development</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Compensation & Benefits" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Compensation & Benefits")}
          >
            <p>Compensation & Benefits</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Internal Communications" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Internal Communications")}
          >
            <p>Internal Communications</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Employee Engagement" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Employee Engagement")}
          >
            <p>Employee Engagement</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Separation/Exit" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Separation/Exit")}
          >
            <p>Separation/Exit</p>
          </div>
          <div
            className={`evp-embedment-tab ${
              activeTab === "Alumni Relations" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Alumni Relations")}
          >
            <p>Alumni Relations</p>
          </div>
        </div>
        <div className="evp-embedment-table-container">
          <table className="evp-embedment-table">
            <thead>
              <tr>
                <th>Type of Content</th>
                <th>Content Asset</th>
                <th>Select</th>
              </tr>
            </thead>
            {activeTab === "Pre-hiring" && (
              <PreHiring onAssetsSelected={handleAssetsSelected} />
            )}
            {activeTab === "Hiring" && (
              <Hiring onAssetsSelected={handleAssetsSelected} />
            )}
            {activeTab === "Onboarding" && (
              <OnBoarding onAssetsSelected={handleAssetsSelected} />
            )}
            {activeTab === "Learning & Development" && (
              <LearningAndDevelopment onAssetsSelected={handleAssetsSelected} />
            )}
            {activeTab === "Compensation & Benefits" && (
              <CompensationAndBenefits
                onAssetsSelected={handleAssetsSelected}
              />
            )}
            {activeTab === "Internal Communications" && (
              <InternalCommunications onAssetsSelected={handleAssetsSelected} />
            )}
            {activeTab === "Employee Engagement" && (
              <EmployeeEngagement onAssetsSelected={handleAssetsSelected} />
            )}
            {activeTab === "Separation/Exit" && (
              <SeparationExit onAssetsSelected={handleAssetsSelected} />
            )}
            {activeTab === "Alumni Relations" && (
              <AlumniRelations onAssetsSelected={handleAssetsSelected} />
            )}
          </table>
        </div>
        <div className="evp-embedment-button">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default EVPEmbedment;
