import React, { useState } from "react";

import "./TalentInsights.css";

import {
  talentInsightsFields,
  talentInsightsGeographies,
} from "./talent_insights_constant";

function TalentInsights() {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedSubSkill, setSelectedSubSkill] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedGeography, setSelectedGeography] = useState("");
  const [availableSubSkills, setAvailableSubSkills] = useState([]);
  const [availableRoles, setAvailableRoles] = useState([]);

  const [candidatePersona, setCandidatePersona] = useState("");

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    setSelectedSkill(skill);
    setSelectedSubSkill("");
    setSelectedRole("");

    // Set sub-skills based on the selected skill
    if (skill) {
      const subSkills = Object.keys(
        talentInsightsFields[skill]?.subSkills || {}
      );
      setAvailableSubSkills(subSkills);
      setAvailableRoles([]);
    } else {
      setAvailableSubSkills([]);
      setAvailableRoles([]);
    }
  };

  const handleSubSkillChange = (e) => {
    const subSkill = e.target.value;
    setSelectedSubSkill(subSkill);
    setSelectedRole("");

    // Set roles based on the selected sub-skill
    if (selectedSkill && subSkill) {
      const roles =
        talentInsightsFields[selectedSkill].subSkills[subSkill] || [];
      setAvailableRoles(roles);
    } else {
      setAvailableRoles([]);
    }
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleGenerateClick = async () => {
    const requestBody = {
      talent_insights: {
        skill: selectedSkill,
        sub_skill: selectedSubSkill,
        role: selectedRole,
        geography: selectedGeography,
      },
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/talent-insights-home/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setCandidatePersona(responseData.candidate_persona);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="talent-insights-main-container">
      <div className="talent-insights-container">
        <div className="talent-insights-heading">
          <h1>Talent Insights</h1>
        </div>
        <div className="talent-insights-below">
          <div className="talent-insights-below-left">
            <div className="talent-insights-below-left-top">
              <div className="talent-insights-below-left-data">
                <div className="talent-insights-below-left-data-fields">
                  <label>Skill</label>
                  <select value={selectedSkill} onChange={handleSkillChange}>
                    <option value="">Select Skill</option>
                    {Object.keys(talentInsightsFields).map((skill) => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="talent-insights-below-left-data">
                <div className="talent-insights-below-left-data-fields">
                  <label>Sub Skill</label>
                  <select
                    value={selectedSubSkill}
                    onChange={handleSubSkillChange}
                    disabled={!availableSubSkills.length}
                  >
                    <option value="">Select Sub Skill</option>
                    {availableSubSkills.map((subSkill) => (
                      <option key={subSkill} value={subSkill}>
                        {subSkill}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="talent-insights-below-left-data">
                <div className="talent-insights-below-left-data-fields">
                  <label>Role</label>
                  <select
                    value={selectedRole}
                    onChange={handleRoleChange}
                    disabled={!availableRoles.length}
                  >
                    <option value="">Select Role</option>
                    {availableRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="talent-insights-below-left-data">
                <div className="talent-insights-below-left-data-fields">
                  <label>Geography</label>
                  <select
                    value={selectedGeography}
                    onChange={(e) => setSelectedGeography(e.target.value)}
                  >
                    <option value="">Select Geography</option>
                    {talentInsightsGeographies.map((geo) => (
                      <option key={geo} value={geo}>
                        {geo}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="talent-insights-button">
              <button onClick={handleGenerateClick}>Generate</button>
            </div>
          </div>
          <div className="talent-insights-below-right">
            <div className="talent-insights-below-right-first">
              <div className="talent-insights-below-right-first-top">
                <figure className="talent-insights-below-right-first-top-image">
                  <img src="" alt="user" />
                </figure>
                <div className="talent-insights-below-right-first-top-info">
                  <p>Name: </p>
                  <p>Age: </p>
                  <p>Location: </p>
                  <p>Highest Qualification: </p>
                  <p>Work Experience: </p>
                  <p>Previous Companies: </p>
                  <p>Salary INR: </p>
                </div>
              </div>
              <div className="talent-insights-below-right-first-bottom">
                <p>Personality</p>
                <div></div>
              </div>
            </div>
            <div className="talent-insights-below-right-second">
              <div className="talent-insights-below-right-second-top">
                <p>Goals</p>
                <div></div>
              </div>
              <div className="talent-insights-below-right-second-middle">
                <p>Frustration</p>
                <div></div>
              </div>
              <div className="talent-insights-below-right-second-bottom">
                <p>Bio</p>
                <div></div>
              </div>
            </div>
            <div className="talent-insights-below-right-third">
              <div className="talent-insights-below-right-third-top">
                <p>Motivation</p>
                <div></div>
              </div>
              <div className="talent-insights-below-right-third-middle">
                <p>Topics of Interest</p>
                <div></div>
              </div>
              <div className="talent-insights-below-right-third-bottom">
                <p>Preferred Channels</p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentInsights;
