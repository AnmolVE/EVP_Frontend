import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Design.css";

const initialOptions = {
  preHiring: [
    "Careers Website",
    "LinkedIn",
    "Instagram",
    "Facebook",
    "Tiktok",
    "Twitter X",
    "Job Board",
    "Job Description",
    "Job Ad",
    "Referral Email",
  ],
  hiring: [
    "Event Toolkit",
    "Careers Website",
    "Interview Talking Points",
    "Application Form",
    "Offer Letter",
  ],
  onboarding: [
    "Welcome Email",
    "Employee Handbook",
    "Merchandise",
    "Orientation Deck",
  ],
  internalCommunications: ["Email Template", "PPT Template"],
};

function Design({
  currentListItem,
  pillars,
  newPillars,
  setPillars,
  setNewPillars,
}) {
  const { data } = useSelector((store) => store.inputField);
  const companyName = localStorage.getItem("companyName");
  const accessToken = localStorage.getItem("accessToken");

  const [designData, setDesignData] = useState(null);

  const [mainTheme, setMainTheme] = useState("");
  const [selectedPillars, setSelectedPillars] = useState(["", "", ""]);
  const [taglines, setTaglines] = useState("");

  const [preHiringSelects, setPreHiringSelects] = useState([
    initialOptions.preHiring,
  ]);
  const [hiringSelects, setHiringSelects] = useState([initialOptions.hiring]);
  const [onboardingSelects, setOnboardingSelects] = useState([
    initialOptions.onboarding,
  ]);
  const [internalCommunicationsSelects, setInternalCommunicationsSelects] =
    useState([initialOptions.internalCommunications]);

  useEffect(() => {
    if (data) {
      setDesignData(data);
    }
  }, [data]);

  const handleMainThemeChange = (e) => {
    setMainTheme(e.target.value);
  };

  const handlePillarChange = (index, e) => {
    const newSelectedPillars = [...selectedPillars];
    newSelectedPillars[index] = e.target.value;
    setSelectedPillars(newSelectedPillars);
  };

  const handleTaglineChange = (e) => {
    setTaglines({ ...taglines, [e.target.name]: [e.target.value] });
  };

  const handleGenerateTagline = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/tagline/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
          main_theme: mainTheme,
          pillars: selectedPillars.filter((pillar) => pillar),
        }),
      });
      const responseData = await response.json();
      setTaglines(responseData);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleSubmitTagline = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/tagline/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
          main_theme: mainTheme,
          pillars: selectedPillars.filter((pillar) => pillar),
          tagline: taglines.tagline || "",
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        setTaglines(responseData);
        alert("Data submitted successfully");
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleCreativeDirectionChange = () => {
    console.log("Hello");
  };

  const handleAddSelect = (category, setCategory) => {
    setCategory((prevSelects) => [...prevSelects, initialOptions[category]]);
  };

  console.log(designData);

  return (
    <>
      {currentListItem === "Top 4 Themes" ? (
        <div className="top-4-themes">
          <div className="top-4-themes-tabs">
            {pillars.map((pillar) => (
              <div key={pillar.tab_name}>
                <button>{pillar.tab_name}</button>
                <div>{pillar.tabs_data}</div>
              </div>
            ))}
          </div>
        </div>
      ) : currentListItem === "Messaging Hierarchy" ? (
        <div className="messaging-hierarchy">
          <p>
            Choose the option to select the main theme and 3 pillars to generate
            a tagline
          </p>
          <div className="messaging-hierarchy-themes-and-pillars">
            <div className="messaging-hierarchy-themes-and-pillars-inside">
              <label>Overarching Theme</label>
              <select onChange={handleMainThemeChange}>
                {pillars.map((pillar) => (
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
                  {newPillars.map((pillar) => (
                    <option key={pillar} value={pillar}>
                      {pillar}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button onClick={handleGenerateTagline}>Generate Tagline</button>
          </div>
          <textarea
            onChange={(e) =>
              setTaglines({ ...taglines, tagline: e.target.value })
            }
            className="messaging-hierarchy-textarea"
            name="tagline"
            value={taglines.tagline || ""}
          />
          <button
            onClick={handleSubmitTagline}
            className="tagline-submit-button"
          >
            Submit
          </button>
        </div>
      ) : currentListItem === "Creative Direction" ? (
        <div className="creative-direction">
          <div className="creative-direction-data">
            <label>Creative Direction</label>
            <textarea
              onChange={handleCreativeDirectionChange}
              name="creative_direction"
              value={designData.creative_direction || ""}
            ></textarea>
          </div>
          <div className="creative direction-button">
            <button>Submit</button>
          </div>
        </div>
      ) : currentListItem === "EVP Promise" ? (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Themes</th>
                <th>What makes this theme distinctive</th>
                <th>What employees can expect</th>
                <th>What is expected of employees</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(designData) &&
                designData.map((item) => (
                  <tr key={item.id}>
                    <td className="fixed-column">{item.theme}</td>
                    <td>{item.what_makes_this_theme_distinctive}</td>
                    <td>{item.what_employees_can_expect}</td>
                    <td>{item.what_is_expected_of_employees}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : currentListItem === "EVP Audit" ? (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Themes</th>
                <th>What makes this credible</th>
                <th>Where do we need to stretch</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(designData) &&
                designData.map((item) => (
                  <tr key={item.id}>
                    <td className="fixed-column">{item.theme}</td>
                    <td>{item.what_makes_this_credible}</td>
                    <td>{item.where_do_we_need_to_stretch}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : currentListItem === "EVP Embedment" ? (
        <div className="evp-embedment-container">
          <p>Add TouchPoints</p>
          <div className="evp-embedment">
            <div className="evp-embedment-selection">
              <label>Pre-hiring</label>
              <div className="evp-embedment-selection-inside">
                {preHiringSelects.map((options, index) => (
                  <div
                    key={index}
                    className="evp-embedment-selection-inside-select"
                  >
                    <select>
                      {options.map((option, idx) => (
                        <option key={idx}>{option}</option>
                      ))}
                    </select>
                    {index === preHiringSelects.length - 1 && (
                      <button
                        onClick={() =>
                          handleAddSelect("preHiring", setPreHiringSelects)
                        }
                      >
                        +
                      </button>
                    )}
                  </div>
                ))}
                <input placeholder="more" />
              </div>
            </div>
            <div className="evp-embedment-selection">
              <label>Hiring</label>
              <div className="evp-embedment-selection-inside">
                {hiringSelects.map((options, index) => (
                  <div
                    key={index}
                    className="evp-embedment-selection-inside-select"
                  >
                    <select>
                      {options.map((option, idx) => (
                        <option key={idx}>{option}</option>
                      ))}
                    </select>
                    {index === hiringSelects.length - 1 && (
                      <button
                        onClick={() =>
                          handleAddSelect("hiring", setHiringSelects)
                        }
                      >
                        +
                      </button>
                    )}
                  </div>
                ))}
                <input placeholder="more" />
              </div>
            </div>
            <div className="evp-embedment-selection">
              <label>Onboarding</label>
              <div className="evp-embedment-selection-inside">
                {onboardingSelects.map((options, index) => (
                  <div
                    key={index}
                    className="evp-embedment-selection-inside-select"
                  >
                    <select>
                      {options.map((option, idx) => (
                        <option key={idx}>{option}</option>
                      ))}
                    </select>
                    {index === onboardingSelects.length - 1 && (
                      <button
                        onClick={() =>
                          handleAddSelect("onboarding", setOnboardingSelects)
                        }
                      >
                        +
                      </button>
                    )}
                  </div>
                ))}
                <input placeholder="more" />
              </div>
            </div>
            <div className="evp-embedment-selection">
              <label>Internal Communications</label>
              <div className="evp-embedment-selection-inside">
                {internalCommunicationsSelects.map((options, index) => (
                  <div
                    key={index}
                    className="evp-embedment-selection-inside-select"
                  >
                    <select>
                      {options.map((option, idx) => (
                        <option key={idx}>{option}</option>
                      ))}
                    </select>
                    {index === internalCommunicationsSelects.length - 1 && (
                      <button
                        onClick={() =>
                          handleAddSelect(
                            "internalCommunications",
                            setInternalCommunicationsSelects
                          )
                        }
                      >
                        +
                      </button>
                    )}
                  </div>
                ))}
                <input placeholder="more" />
              </div>
            </div>
          </div>
        </div>
      ) : currentListItem === "EVP Narrative" ? (
        <div className="evp-narrative-container">
          <div className="evp-narrative">
            <label>Intro</label>
            <textarea></textarea>
            <label>Context</label>
            <textarea></textarea>
            <label>Journey</label>
            <textarea></textarea>
            <label>EVP Pillars</label>
            <textarea></textarea>
            <label>How it will be used</label>
            <textarea></textarea>
            <label>Visual</label>
            <textarea></textarea>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Design;
