import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./CompanyInfo.css";

function CompanyInfo({
  currentListItem,
  setCurrentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  const { data } = useSelector((store) => store.inputField);

  const [companyInfoData, setCompanyInfoData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setCompanyInfoData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setCompanyInfoData({ ...companyInfoData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const baseApiEndpoint = listItemEndpointMapping[currentListItem];
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
        body: JSON.stringify(companyInfoData),
      });
      const responseData = await response.json();
      setCurrentListItem("Talent Dataset");
      // alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };
  console.log(currentListItem);

  return (
    <>
      <div className="company-info-top">
        <p className="company-info-para-heading">Company Dataset</p>
        <p className="company-info-para">
          Validate your Company data before it goes to next step.
        </p>
      </div>
      <div className="company-info-information">
        <div className="company-info-information-fields">
          <label>Headquarters</label>
          <textarea
            onChange={handleInputChange}
            name="headquarters"
            value={companyInfoData?.headquarters}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Established date</label>
          <textarea
            onChange={handleInputChange}
            name="established_date"
            value={companyInfoData?.established_date}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>About the company</label>
          <textarea
            onChange={handleInputChange}
            name="about_the_company"
            value={companyInfoData?.about_the_company}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Industry</label>
          <textarea
            onChange={handleInputChange}
            name="industry"
            value={companyInfoData?.industry}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Company Financials</label>
          <textarea
            onChange={handleInputChange}
            name="company_financials"
            value={companyInfoData?.company_financials}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Company History</label>
          <textarea
            onChange={handleInputChange}
            name="company_history"
            value={companyInfoData?.company_history}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Top 3 Competitors</label>
          <textarea
            onChange={handleInputChange}
            name="top_3_competitors"
            value={companyInfoData?.top_3_competitors}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Number of Employees</label>
          <textarea
            onChange={handleInputChange}
            name="number_of_employees"
            value={companyInfoData?.number_of_employees}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Number of Geographies</label>
          <textarea
            onChange={handleInputChange}
            name="number_of_geographies"
            value={companyInfoData?.number_of_geographies}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>LinkedIn Info</label>
          <textarea
            onChange={handleInputChange}
            name="linked_info"
            value={companyInfoData?.linked_info}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Instagram Info</label>
          <textarea
            onChange={handleInputChange}
            name="instagram_info"
            value={companyInfoData?.instagram_info}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Tiktok Info</label>
          <textarea
            onChange={handleInputChange}
            name="tiktok_info"
            value={companyInfoData?.tiktok_info}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Facebook Info</label>
          <textarea
            onChange={handleInputChange}
            name="facebook_info"
            value={companyInfoData?.facebook_info}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Twitter Info</label>
          <textarea
            onChange={handleInputChange}
            name="twitter_info"
            value={companyInfoData?.twitter_info}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Internal Comms Channels</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="internal_comms_channels"
            value={companyInfoData?.internal_comms_channels}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Exit Interview Feedback</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="exit_interview_feedback"
            value={companyInfoData?.exit_interview_feedback}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Employee Feedback Summary</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="employee_feedback_summary"
            value={companyInfoData?.employee_feedback_summary}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Engagement Survey Results</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="engagement_survey_results"
            value={companyInfoData?.engagement_survey_results}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Glassdoor Score</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="glassdoor_score"
            value={companyInfoData?.glassdoor_score}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Online Forums Mentions</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="online_forums_mentions"
            value={companyInfoData?.online_forums_mentions}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>What Retains Talent</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="what_retains_talent"
            value={companyInfoData?.what_retains_talent}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>What Attracts Talent</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="what_attracts_talent"
            value={companyInfoData?.what_attracts_talent}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Employee Value Proposition</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="employee_value_proposition"
            value={companyInfoData?.employee_value_proposition}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Culture and Values</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="culture_and_values"
            value={companyInfoData?.culture_and_values}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Purpose</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="purpose"
            value={companyInfoData?.purpose}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Customer Value Proposition</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="customer_value_proposition"
            value={companyInfoData?.customer_value_proposition}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Vision</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="vision"
            value={companyInfoData?.vision}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Mission</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="mission"
            value={companyInfoData?.mission}
          ></textarea>
        </div>
        <div className="company-info-information-fields">
          <label>Brand Guidelines</label>
          <textarea
            placeholder="User Input"
            onChange={handleInputChange}
            name="brand_guidelines"
            value={companyInfoData?.brand_guidelines}
          ></textarea>
        </div>
      </div>
      <div className="company-info-buttons">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default CompanyInfo;
