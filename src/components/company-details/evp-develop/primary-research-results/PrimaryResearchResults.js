import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./PrimaryResearchResults.css";

function PrimaryResearchResults({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [primaryResearchData, setPrimaryResearchData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setPrimaryResearchData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setPrimaryResearchData({
      ...primaryResearchData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const baseApiEndpoint = listItemEndpointMapping[currentListItem];
    console.log(baseApiEndpoint);
    if (!baseApiEndpoint) {
      alert("API endpoint not configured for this section");
      return;
    }

    try {
      const response = await fetch(`${baseApiEndpoint}/${companyName}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(primaryResearchData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="primaryResearchResults-top">
        <p className="primaryResearchResults-para-heading">
          Primary Research Results
        </p>
        <p className="primaryResearchResults-para">
          Validate your Primary Research data before it goes to next step.
        </p>
      </div>
      <div className="primaryResearchResults-information">
        <div className="primaryResearchResults-information-fields">
          <label>Existing Employees</label>
          <textarea
            onChange={handleInputChange}
            name="existing_employees"
            value={primaryResearchData?.existing_employees || ""}
          ></textarea>
        </div>
        <div className="primaryResearchResults-information-fields">
          <label>Alumni</label>
          <textarea
            onChange={handleInputChange}
            name="alumni"
            value={primaryResearchData?.alumni || ""}
          ></textarea>
        </div>
        <div className="primaryResearchResults-information-fields">
          <label>Targeted Talent</label>
          <textarea
            onChange={handleInputChange}
            name="targeted_talent"
            value={primaryResearchData?.targeted_talent || ""}
          ></textarea>
        </div>
        <div className="primaryResearchResults-information-fields">
          <label>Leadership</label>
          <textarea
            onChange={handleInputChange}
            name="leadership"
            value={primaryResearchData?.leadership || ""}
          ></textarea>
        </div>
        <div className="primaryResearchResults-information-fields">
          <label>Recruiters</label>
          <textarea
            onChange={handleInputChange}
            name="recruiters"
            value={primaryResearchData?.recruiters || ""}
          ></textarea>
        </div>
        <div className="primaryResearchResults-information-fields">
          <label>Clients</label>
          <textarea
            onChange={handleInputChange}
            name="clients"
            value={primaryResearchData?.clients || ""}
          ></textarea>
        </div>
        <div className="primaryResearchResults-information-fields">
          <label>Offer Drops</label>
          <textarea
            onChange={handleInputChange}
            name="offer_drops"
            value={primaryResearchData?.offer_drops || ""}
          ></textarea>
        </div>
      </div>
      <div className="primaryResearchResults-buttons">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default PrimaryResearchResults;
