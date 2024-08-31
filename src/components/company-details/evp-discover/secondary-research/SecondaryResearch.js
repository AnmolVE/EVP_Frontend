import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SecondaryResearch.css";
import Loading from "../../../utils/loading/Loading";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function CompanyInput({ setPageLoading }) {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const accessToken = tokens.access;
  const [companyName, setCompanyName] = useState("");
  const [fileNames, setFileNames] = useState(["Upload documents"]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileNames = selectedFiles.map((file) => file.name);
    setFileNames(fileNames);
    setFiles(selectedFiles);
  };

  const handleSVGClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("company_name", companyName);
    files.forEach((file) => {
      formData.append("documents", file);
    });

    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    setPageLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/search/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("companyName", companyName);
        navigate("/company-detail");
      } else {
        console.error("Failed to add company:", response.statusText);
      }
      setPageLoading(false);
    } catch (error) {
      console.error("Error adding company:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="secondaryResearch-main-container">
        <div className="secondaryResearch-information">
          <div className="secondaryResearch-information-top">
            <p className="secondaryResearch-information-top-para-heading">
              Secondary Research
            </p>
            <p className="secondaryResearch-para">
              Company and industry documents personalise the EVP
            </p>
            <p className="secondaryResearch-info-para">
              In addition to processing your documents, the platform will crawl
              hundreds of curated online sources to conduct comprehensive
              secondary research.
            </p>
          </div>
          <hr />
          <div className="secondaryResearch-information-bottom">
            <h4>Documents to Upload</h4>
            <ul className="secondaryResearch-information-bottom-unordered-list">
              <li>Exit interview data</li>
              <li>Employee feedback</li>
              <li>ESAT survey results</li>
              <li>Current / frequently hired for job positions</li>
              <li>Brand Guidelines</li>
              <li>
                Design Principles: Up to 5 themes you'd like to be known for
              </li>
            </ul>
          </div>
        </div>
        <div className="secondaryResearch-dataGather">
          <div className="secondaryResearch-dataGather-tabs">
            <div className={`secondaryResearch-dataGather-tabs-name`}>
              <p>Company Docs</p>
            </div>
          </div>
          <div className="secondaryResearch-dataGather-content">
            <div className="company-container">
              <h1>Add Documents</h1>
              <form className="company-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  multiple
                />
                <div
                  className="company-file-display-area"
                  onClick={handleSVGClick}
                >
                  {fileNames.map((name, index) => (
                    <div key={index} className="company-file-name">
                      {name}
                    </div>
                  ))}
                </div>
                <button type="submit" className="company-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyInput;
