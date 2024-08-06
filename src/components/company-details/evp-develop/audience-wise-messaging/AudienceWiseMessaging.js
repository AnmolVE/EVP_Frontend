import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./AudienceWiseMessaging.css";

function AudienceWiseMessaging({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [audienceWiseMessagingData, setAudienceWiseMessagingData] =
    useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setAudienceWiseMessagingData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setAudienceWiseMessagingData({
      ...audienceWiseMessagingData,
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
        body: JSON.stringify(audienceWiseMessagingData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="audienceWiseMessaging-container">
        <div className="audienceWiseMessaging-container-fields">
          <label>Existing Employees</label>
          <textarea
            onChange={handleInputChange}
            name="existing_employees"
            value={audienceWiseMessagingData?.existing_employees || ""}
          ></textarea>
        </div>
        <div className="audienceWiseMessaging-container-fields">
          <label>Alumni</label>
          <textarea
            onChange={handleInputChange}
            name="alumni"
            value={audienceWiseMessagingData?.alumni || ""}
          ></textarea>
        </div>
        <div className="audienceWiseMessaging-container-fields">
          <label>Targeted Talent</label>
          <textarea
            onChange={handleInputChange}
            name="targeted_talent"
            value={audienceWiseMessagingData?.targeted_talent || ""}
          ></textarea>
        </div>
        <div className="audienceWiseMessaging-container-fields">
          <label>Leadership</label>
          <textarea
            onChange={handleInputChange}
            name="leadership"
            value={audienceWiseMessagingData?.leadership || ""}
          ></textarea>
        </div>
        <div className="audienceWiseMessaging-container-fields">
          <label>Recruiters</label>
          <textarea
            onChange={handleInputChange}
            name="recruiters"
            value={audienceWiseMessagingData?.recruiters || ""}
          ></textarea>
        </div>
        <div className="audienceWiseMessaging-container-fields">
          <label>Clients</label>
          <textarea
            onChange={handleInputChange}
            name="clients"
            value={audienceWiseMessagingData?.clients || ""}
          ></textarea>
        </div>
        <div className="audienceWiseMessaging-container-fields">
          <label>Offer Drops</label>
          <textarea
            onChange={handleInputChange}
            name="offer_drops"
            value={audienceWiseMessagingData?.offer_drops || ""}
          ></textarea>
        </div>
      </div>
      <div className="audienceWiseMessaging-buttons">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default AudienceWiseMessaging;
