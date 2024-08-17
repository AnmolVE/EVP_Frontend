import React, { useState, useRef } from "react";

import "./PrimaryResearch.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function PrimaryResearch() {
  const companyName = localStorage.getItem("companyName");
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const accessToken = tokens.access;

  const [interviewInputFields, setInterviewInputFields] = useState([
    { id: 1, value: "" },
  ]);
  const maxInterviewInputFields = 5;

  const [thinkTanks, setThinkTanks] = useState([
    { id: 1, emails: [{ id: 1, value: "" }] },
  ]);
  const maxThinkTanks = 5;
  const maxThinkTankInputFields = 10;

  // const [transcript, setTranscript] = useState("");
  const [fileNames, setFileNames] = useState(["Upload documents"]);
  const [transcriptFiles, setTranscriptFiles] = useState([]);
  const fileInputRef = useRef(null);

  const [designFileNames, setDesignFileNames] = useState(["Upload documents"]);
  const [designFiles, setDesignFiles] = useState([]);
  const designFileInputRef = useRef(null);

  const handleAddInterviewInputField = () => {
    if (interviewInputFields.length < maxInterviewInputFields) {
      setInterviewInputFields([
        ...interviewInputFields,
        { id: interviewInputFields.length + 1, value: "" },
      ]);
    } else {
      alert("Not allowed to add more than 5 input fields");
    }
  };

  const handleSendInterviewEmails = () => {
    const interviewEmailAddresses = interviewInputFields
      .map((field) => field.value)
      .filter((email) => email);
    if (interviewEmailAddresses.length > 0) {
      const subject = "Interview Invitation";
      const body = `Dear Candidate, \n\nWe would like to invite you for a 1-on-1 interview. Please let us know your availability.\n\nBest regards,\n${companyName}`;

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        interviewEmailAddresses.join(",")
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailLink, "_blank");
    } else {
      alert("Please enter at least one email address");
    }
  };

  const handleAddThinkTank = () => {
    if (thinkTanks.length < maxThinkTanks) {
      setThinkTanks([
        ...thinkTanks,
        { id: thinkTanks.length + 1, emails: [{ id: 1, value: "" }] },
      ]);
    } else {
      alert("Not allowed to add more than 5 Think Tanks");
    }
  };

  const handleAddThinkTankInputField = (thinkTankIndex) => {
    const newThinkTanks = [...thinkTanks];
    if (newThinkTanks[thinkTankIndex].emails.length < maxThinkTankInputFields) {
      newThinkTanks[thinkTankIndex].emails.push({
        id: newThinkTanks[thinkTankIndex].emails.length + 1,
        value: "",
      });
      setThinkTanks(newThinkTanks);
    } else {
      alert("Not allowed to add more than 10 email addresses");
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
        `${REACT_APP_BASE_URL}/transcript/${companyName}/`,
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

  const handleDesignFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const designFileNames = selectedFiles.map((file) => file.name);
    setDesignFileNames(designFileNames);
    setDesignFiles(selectedFiles);
  };

  const handleDesignSVGClick = () => {
    designFileInputRef.current.click();
  };

  const handleDesignSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    designFiles.forEach((file) => {
      formData.append("documents", file);
    });

    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/design-principles/${companyName}/`,
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
        console.error("Failed to submit design principles:");
      }
    } catch (error) {
      console.error("Error submitting design principles:", error);
    }
  };

  return (
    <>
      <div className="primaryResearch-main-container">
        <div className="primaryResearch-information">
          <div className="primaryResearch-information-top">
            <p className="primaryResearch-information-top-para-heading">
              Primary Research
            </p>
            <p className="primaryResearch-para">
              First-hand information adds credibility to your research
            </p>
            <p className="primaryResearch-info-para">
              The result is a strong and compelling EVP that is equal parts
              credible as well as aspirational and accurately represents the
              views of the most important stakeholders.
            </p>
          </div>
          <hr />
          <div className="primaryResearch-information-bottom">
            <h4>Talent Cohorts to Cover</h4>
            <ul className="primaryResearch-information-bottom-unordered-list">
              <li>Current Employees</li>
              <li>Ex-Employees</li>
              <li>Interviewing Candidates</li>
              <li>Candidates who refused to offer</li>
              <li>Clients (if possible)</li>
              <li>Headhunters and recruiters</li>
              <li>Core EVP team</li>
            </ul>
          </div>
        </div>
        <div className="primaryResearch-uploadContainer">
          <div className="primary-research-container">
            <div className="primary-research-nextContainer">
              <h1>Send Meeting Requests</h1>
              <div className="primary-research-dataGather">
                <div className="primary-research-interview">
                  <label>1-on-1-interview</label>
                  {interviewInputFields.map((field, index) => (
                    <div
                      key={field.id}
                      className="primary-research-interview-inputField"
                    >
                      <input
                        type="email"
                        placeholder="Enter email address"
                        value={field.value}
                        onChange={(e) => {
                          const newFields = [...interviewInputFields];
                          newFields[index].value = e.target.value;
                          setInterviewInputFields(newFields);
                        }}
                      />
                      {index === interviewInputFields.length - 1 &&
                        interviewInputFields.length <
                          maxInterviewInputFields && (
                          <button onClick={handleAddInterviewInputField}>
                            +
                          </button>
                        )}
                    </div>
                  ))}
                  <button
                    className="primary-research-interview-button"
                    onClick={handleSendInterviewEmails}
                  >
                    Send
                  </button>
                </div>
                <div className="primary-research-thinkTanks">
                  {thinkTanks.map((thinkTank, thinkTankIndex) => (
                    <div
                      key={thinkTank.id}
                      className="primary-research-thinkTank"
                    >
                      <div className="primary-research-thinkTank-label">
                        <label>Think Tank</label>
                        {thinkTankIndex === thinkTanks.length - 1 &&
                          thinkTanks.length < maxThinkTanks && (
                            <button onClick={handleAddThinkTank}>+</button>
                          )}
                      </div>
                      <div className="primary-research-thinkTank-inputField">
                        <input type="text" placeholder="Enter name" />
                        <input type="text" placeholder="Enter description" />
                        {thinkTank.emails.map((email, emailIndex) => (
                          <div
                            key={email.id}
                            className="primary-research-thinkTank-inputField-more"
                          >
                            <input
                              type="email"
                              placeholder="Enter email address"
                              value={email.value}
                              onChange={(e) => {
                                const newThinkTanks = [...thinkTanks];
                                newThinkTanks[thinkTankIndex].emails[
                                  emailIndex
                                ].value = e.target.value;
                                setThinkTanks(newThinkTanks);
                              }}
                            />
                            {emailIndex === thinkTank.emails.length - 1 &&
                              thinkTank.emails.length <
                                maxThinkTankInputFields && (
                                <button
                                  onClick={() =>
                                    handleAddThinkTankInputField(thinkTankIndex)
                                  }
                                >
                                  +
                                </button>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button className="primary-research-thinkTank-button">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="transcript-container">
            <div className="transcript-nextContainer">
              <h1>Upload Transcripts</h1>
              <form
                className="transcript-form"
                onSubmit={handleTranscriptSubmit}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleTranscriptFileChange}
                  style={{ display: "none" }}
                  multiple
                />
                <div
                  className="transcript-file-display-area"
                  onClick={handleTranscriptSVGClick}
                >
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
          <div className="design-container">
            <div className="design-nextContainer">
              <h1>Design Principles</h1>
              <form className="design-form" onSubmit={handleDesignSubmit}>
                <input
                  type="file"
                  ref={designFileInputRef}
                  onChange={handleDesignFileChange}
                  style={{ display: "none" }}
                  multiple
                />
                <div
                  className="design-file-display-area"
                  onClick={handleDesignSVGClick}
                >
                  {designFileNames.map((name, index) => (
                    <div key={index} className="design-file-name">
                      {name}
                    </div>
                  ))}
                </div>
                <button type="submit" className="design-button">
                  Submit
                </button>
                <svg
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
        </div>
      </div>
    </>
  );
}

export default PrimaryResearch;
