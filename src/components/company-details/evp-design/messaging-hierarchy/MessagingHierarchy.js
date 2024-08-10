import React, { useState, useEffect } from "react";
import "./MessagingHierarchy.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function MessagingHierarchy({
  setPageLoading,
  pillars,
  newPillars,
  companyName,
  accessToken,
}) {
  const [mainTheme, setMainTheme] = useState("");
  const [selectedPillars, setSelectedPillars] = useState(["", "", ""]);
  const [tagline, setTagline] = useState("");
  const [storedPillars, setStoredPillars] = useState([]);
  const [storedNewPillars, setStoredNewPillars] = useState([]);

  useEffect(() => {
    setStoredPillars(pillars);
    setStoredNewPillars(newPillars);
  }, [pillars, newPillars]);

  useEffect(() => {
    const fetchData = async () => {
      setPageLoading(true);
      try {
        const response = await fetch(
          `${REACT_APP_BASE_URL}/messaging-hierarchy/${companyName}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.ok) {
          const responseData = await response.json();
          setMainTheme(responseData.main_theme || "");
          setSelectedPillars([
            responseData.pillar_1 || "",
            responseData.pillar_2 || "",
            responseData.pillar_3 || "",
          ]);
          setTagline(responseData.tagline || "");
        }
        setPageLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleMainThemeChange = (e) => {
    setMainTheme(e.target.value);
  };

  const handlePillarChange = (index, e) => {
    const newSelectedPillars = [...selectedPillars];
    newSelectedPillars[index] = e.target.value;
    setSelectedPillars(newSelectedPillars);
  };

  const handleGenerateTagline = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        company_name: companyName,
        main_theme: mainTheme,
        pillars: selectedPillars,
      };
      console.log(requestBody);

      console.log("Request Body:", requestBody);

      const response = await fetch(`${REACT_APP_BASE_URL}/tagline/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseData = await response.json();
        setTagline(responseData.tagline || "");
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleSubmitTagline = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/tagline/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
          main_theme: mainTheme,
          pillars: selectedPillars,
          tagline: tagline,
        }),
      });
      if (response.ok) {
        alert("Data submitted successfully");
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="messaging-hierarchy">
      <p>
        Choose the option to select the main theme and 3 pillars to generate a
        tagline
      </p>
      <div className="messaging-hierarchy-themes-and-pillars">
        <div className="messaging-hierarchy-themes-and-pillars-inside">
          <label>Overarching Theme</label>
          <select onChange={handleMainThemeChange} value={mainTheme}>
            {storedPillars.map((pillar) => (
              <option key={pillar.tab_name} value={pillar.tab_name}>
                {pillar.tab_name}
              </option>
            ))}
          </select>
        </div>
        {selectedPillars.map((pillar, index) => (
          <div
            key={index}
            className="messaging-hierarchy-themes-and-pillars-inside"
          >
            <label>Pillar {index + 1}</label>
            <select
              value={pillar}
              onChange={(e) => handlePillarChange(index, e)}
            >
              <option value="">{""}</option>
              {storedNewPillars.map((pillar) => (
                <option key={pillar} value={pillar}>
                  {pillar}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button onClick={handleGenerateTagline}>Generate Tagline</button>
      </div>
      <div className="messaging-hierarchy-content">
        <textarea
          onChange={(e) => setTagline(e.target.value)}
          name="tagline"
          value={tagline}
        />
        <button onClick={handleSubmitTagline} className="tagline-submit-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default MessagingHierarchy;
