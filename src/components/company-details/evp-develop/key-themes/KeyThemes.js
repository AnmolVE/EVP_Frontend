import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./KeyThemes.css";

function KeyThemes({
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [keyThemesData, setKeyThemesData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setKeyThemesData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setKeyThemesData({
      ...keyThemesData,
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
        body: JSON.stringify(keyThemesData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="keyThemes-main-container">
        <div className="keyThemes-top">
          <p className="keyThemes-para-heading">Key Themes</p>
          <p className="keyThemes-para">
            Validate your Key Themes data before it goes to next step.
          </p>
        </div>
        <div className="keyThemes-information">
          <div className="keyThemes-information-fields">
            <label>Top Key Themes</label>
            <textarea
              onChange={handleInputChange}
              name="top_key_themes"
              value={keyThemesData?.top_key_themes || ""}
            ></textarea>
          </div>
        </div>
        <div className="keyThemes-buttons">
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default KeyThemes;
