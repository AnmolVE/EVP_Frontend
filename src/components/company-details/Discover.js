import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./Discover.css";

function Discover({ currentListItem, listItemEndpointMapping }) {
  const companyName = localStorage.getItem("companyName");
  const accessToken = localStorage.getItem("accessToken");

  const { data } = useSelector((store) => store.inputField);

  const [companyData, setCompanyData] = useState(null);

  const [fileNames, setFileNames] = useState(["Upload documents"]);
  const [transcriptFiles, setTranscriptFiles] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setCompanyData(data[0]);
    }
  }, [data]);

  const handleInputChange = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
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
        body: JSON.stringify(companyData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleTranscriptFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileNames = selectedFiles.map((file) => file.name);
    setFileNames(fileNames);
    setTranscriptFiles(selectedFiles);
  };

  const handleTranscriptSVGClick = () => {
    fileInputRef.current.click();
  };

  const handleTranscriptSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    transcriptFiles.forEach((file) => {
      formData.append("documents", file);
    });

    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/transcript/${companyName}/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Failed to submit transcript:");
      }
    } catch (error) {
      console.error("Error submitting transcript:", error);
    }
  };

  return (
    <>
      {currentListItem === "Company Info" && companyData ? (
        <div className="company-detail-below-secondContainer-div">
          <div className="company-detail-below-secondContainer-div-div">
            <label>Headquarters</label>
            <textarea
              onChange={handleInputChange}
              name="headquarters"
              value={companyData.headquarters}
            ></textarea>
            <label>Established date</label>
            <textarea
              onChange={handleInputChange}
              name="established_date"
              value={companyData.established_date}
            ></textarea>
            <label>About the company</label>
            <textarea
              onChange={handleInputChange}
              name="about_the_company"
              value={companyData.about_the_company}
            ></textarea>
            <label>Industry</label>
            <textarea
              onChange={handleInputChange}
              name="industry"
              value={companyData.industry}
            ></textarea>
            <label>Company Financials</label>
            <textarea
              onChange={handleInputChange}
              name="company_financials"
              value={companyData.company_financials}
            ></textarea>
            <label>Company History</label>
            <textarea
              onChange={handleInputChange}
              name="company_history"
              value={companyData.company_history}
            ></textarea>
            <label>Top 3 Competitors</label>
            <textarea
              onChange={handleInputChange}
              name="top_3_competitors"
              value={companyData.top_3_competitors}
            ></textarea>
            <label>Number of Employees</label>
            <textarea
              onChange={handleInputChange}
              name="number_of_employees"
              value={companyData.number_of_employees}
            ></textarea>
            <label>Number of Geographies</label>
            <textarea
              onChange={handleInputChange}
              name="number_of_geographies"
              value={companyData.number_of_geographies}
            ></textarea>
            <label>LinkedIn Info</label>
            <textarea
              onChange={handleInputChange}
              name="linked_info"
              value={companyData.linked_info}
            ></textarea>
            <label>Instagram Info</label>
            <textarea
              onChange={handleInputChange}
              name="instagram_info"
              value={companyData.instagram_info}
            ></textarea>
            <label>Tiktok Info</label>
            <textarea
              onChange={handleInputChange}
              name="tiktok_info"
              value={companyData.tiktok_info}
            ></textarea>
            <label>Facebook Info</label>
            <textarea
              onChange={handleInputChange}
              name="facebook_info"
              value={companyData.facebook_info}
            ></textarea>
            <label>Twitter Info</label>
            <textarea
              onChange={handleInputChange}
              name="twitter_info"
              value={companyData.twitter_info}
            ></textarea>
            <label>Internal Comms Channels</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="internal_comms_channels"
              value={companyData.internal_comms_channels}
            ></textarea>
            <div className="company-detail-below-secondContainer-div-div-buttons">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button>Reset</button>
            </div>
          </div>
        </div>
      ) : currentListItem === "Perception" && companyData ? (
        <div className="company-detail-below-secondContainer-div">
          <div className="company-detail-below-secondContainer-div-div">
            <label>Exit Interview Feedback Summary</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="exit_interview_feedback_summary"
              value={companyData.exit_interview_feedback_summary}
            ></textarea>
            <label>Employee Feedback Summary</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="employee_feedback_summary"
              value={companyData.employee_feedback_summary}
            ></textarea>
            <label>Engagement Survey Result Summary</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="engagement_survey_result_summary"
              value={companyData.engagement_survey_result_summary}
            ></textarea>
            <label>Glassdoor Score</label>
            <textarea
              onChange={handleInputChange}
              name="glassdoor_score"
              value={companyData.glassdoor_score}
            ></textarea>
            <label>Online Forums Summary</label>
            <textarea
              onChange={handleInputChange}
              name="online_forums_summary"
              value={companyData.online_forums_summary}
            ></textarea>
            <div className="company-detail-below-secondContainer-div-div-buttons">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button>Reset</button>
            </div>
          </div>
        </div>
      ) : currentListItem === "Loyalty" && companyData ? (
        <div className="company-detail-below-secondContainer-div">
          <div className="company-detail-below-secondContainer-div-div">
            <label>Average Tenure of Employee</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="average_tenure_of_employee"
              value={companyData.average_tenure_of_employee}
            ></textarea>
            <label>Net Promoter Score</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="net_promoter_score"
              value={companyData.net_promoter_score}
            ></textarea>
            <label>Number of Early Exits</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="number_of_early_exits"
              value={companyData.number_of_early_exits}
            ></textarea>
            <label>Number of Re Hires</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="number_of_re_hires"
              value={companyData.number_of_re_hires}
            ></textarea>
            <label>What Retains Talent</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="what_retains_talent"
              value={companyData.what_retains_talent}
            ></textarea>
            <div className="company-detail-below-secondContainer-div-div-buttons">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button>Reset</button>
            </div>
          </div>
        </div>
      ) : currentListItem === "Advocacy" && companyData ? (
        <div className="company-detail-below-secondContainer-div">
          <div className="company-detail-below-secondContainer-div-div">
            <label>Number of Employees</label>
            <textarea
              onChange={handleInputChange}
              name="number_of_employees"
              value={companyData.number_of_employees}
            ></textarea>
            <label>Number of Referrals</label>
            <textarea
              onChange={handleInputChange}
              name="number_of_referrals"
              value={companyData.number_of_referrals}
            ></textarea>
            <label>Number of Referrals to Hires</label>
            <textarea
              onChange={handleInputChange}
              name="number_of_referrals_to_hires"
              value={companyData.number_of_referrals_to_hires}
            ></textarea>
            <label>ESAT Recommendability Score</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="esat_recommendability_score"
              value={companyData.esat_recommendability_score}
            ></textarea>
            <div className="company-detail-below-secondContainer-div-div-buttons">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button>Reset</button>
            </div>
          </div>
        </div>
      ) : currentListItem === "Attraction" && companyData ? (
        <div className="company-detail-below-secondContainer-div">
          <div className="company-detail-below-secondContainer-div-div">
            <label>Number of Jobs Posted</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="number_of_jobs_posted"
              value={companyData.number_of_jobs_posted}
            ></textarea>
            <label>Average Number of Job Post Clicks</label>
            <textarea
              onChange={handleInputChange}
              name="average_number_of_job_post_clicks"
              value={companyData.average_number_of_job_post_clicks}
            ></textarea>
            <label>Number of Direct Hires</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="number_of_direct_hires"
              value={companyData.number_of_direct_hires}
            ></textarea>
            <label>Average Time to Fill</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="average_time_to_fill"
              value={companyData.average_time_to_fill}
            ></textarea>
            <label>Number of Offers Made</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="number_of_offers_made"
              value={companyData.number_of_offers_made}
            ></textarea>
            <label>Number of Offers Accepted</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="number_of_offers_accepted"
              value={companyData.number_of_offers_accepted}
            ></textarea>
            <label>Number of Direct Applicants</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="number_of_direct_applicants"
              value={companyData.number_of_direct_applicants}
            ></textarea>
            <label>Number of Hires</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="number_of_hires"
              value={companyData.number_of_hires}
            ></textarea>
            <label>What Attracts Talent</label>
            <textarea
              onChange={handleInputChange}
              name="what_attracts_talent"
              value={companyData.what_attracts_talent}
            ></textarea>
            <div className="company-detail-below-secondContainer-div-div-buttons">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button>Reset</button>
            </div>
          </div>
        </div>
      ) : currentListItem === "Influence" && companyData ? (
        <div className="company-detail-below-secondContainer-div">
          <div className="company-detail-below-secondContainer-div-div">
            <label>Number of Career Page Subscribers</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="number_of_career_page_subscribers"
              value={companyData.number_of_career_page_subscribers}
            ></textarea>
            <label>Number of Views</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="number_of_views"
              value={companyData.number_of_views}
            ></textarea>
            <label>Engagement</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="engagement"
              value={companyData.engagement}
            ></textarea>
            <label>Number of Media Mentions</label>
            <textarea
              onChange={handleInputChange}
              name="number_of_media_mentions"
              value={companyData.number_of_media_mentions}
            ></textarea>
            <label>Number of Awards</label>
            <textarea
              onChange={handleInputChange}
              name="number_of_awards"
              value={companyData.number_of_awards}
            ></textarea>
            <label>Summary of Awards / Recognition</label>
            <textarea
              onChange={handleInputChange}
              name="summary_of_awards_or_recognition"
              value={companyData.summary_of_awards_or_recognition}
            ></textarea>
            <div className="company-detail-below-secondContainer-div-div-buttons">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button>Reset</button>
            </div>
          </div>
        </div>
      ) : currentListItem === "Brand" && companyData ? (
        <div className="company-detail-below-secondContainer-div">
          <div className="company-detail-below-secondContainer-div-div">
            <label>Employee Value Proposition</label>
            <textarea
              onChange={handleInputChange}
              name="employee_value_proposition"
              value={companyData?.employee_value_proposition || ""}
            ></textarea>
            <label>Culture and Values</label>
            <textarea
              onChange={handleInputChange}
              name="culture_and_values"
              value={companyData?.culture_and_values || ""}
            ></textarea>
            <label>Purpose</label>
            <textarea
              onChange={handleInputChange}
              name="purpose"
              value={companyData?.purpose || ""}
            ></textarea>
            <label>Customer Value Proposition</label>
            <textarea
              onChange={handleInputChange}
              name="customer_value_proposition"
              value={companyData?.customer_value_proposition || ""}
            ></textarea>
            <label>Vision</label>
            <textarea
              onChange={handleInputChange}
              name="vision"
              value={companyData?.vision || ""}
            ></textarea>
            <label>Mission</label>
            <textarea
              onChange={handleInputChange}
              name="mission"
              value={companyData?.mission || ""}
            ></textarea>
            <label>Internal Comms Samples</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="internal_comms_samples"
              value={companyData?.internal_comms_samples || ""}
            ></textarea>
            <label>External Comms Samples</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="external_comms_samples"
              value={companyData?.external_comms_samples || ""}
            ></textarea>
            <label>Brand Guidelines</label>
            <textarea
              placeholder="User Input"
              onChange={handleInputChange}
              name="brand_guidelines"
              value={companyData?.brand_guidelines || ""}
            ></textarea>
            <div className="company-detail-below-secondContainer-div-div-buttons">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button>Reset</button>
            </div>
          </div>
        </div>
      ) : currentListItem === "Primary Research" ? (
        <div className="transcript-container">
          <div className="transcript-nextContainer">
            <p className="transcript-nextContainer-para">
              Interview Transcript
            </p>
            <form className="transcript-form" onSubmit={handleTranscriptSubmit}>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleTranscriptFileChange}
                style={{ display: "none" }}
                multiple
              />
              <div className="transcript-file-display-area">
                {fileNames.map((name, index) => (
                  <div key={index} className="transcript-file-name">
                    {name}
                  </div>
                ))}
              </div>
              <button type="submit" className="transcript-button">
                Submit
              </button>
              <svg
                onClick={handleTranscriptSVGClick}
                fill="#000000"
                height="20"
                width="20"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <path d="M256,0c-54.013,0-97.955,43.943-97.955,97.955v338.981c0,41.39,33.674,75.064,75.064,75.064c41.39,0,75.064-33.674,75.064-75.064V122.511c0-28.327-23.046-51.375-51.375-51.375c-28.327,0-51.374,23.047-51.374,51.375v296.911h31.347V122.511c0-11.042,8.984-20.028,20.028-20.028s20.028,8.985,20.028,20.028v314.424c0,24.106-19.612,43.717-43.718,43.717c-24.106,0-43.717-19.612-43.717-43.717V97.955c0-36.727,29.88-66.608,66.608-66.608s66.608,29.881,66.608,66.608v321.467h31.347V97.955C353.955,43.943,310.013,0,256,0z" />
                  </g>
                </g>
              </svg>
              <br />
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Discover;
