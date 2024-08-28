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

  const [activeTab, setActiveTab] = useState("Company Docs");

  const [designPrinciplesTextAreas, setDesignPrinciplesTextAreas] = useState([
    { id: 1, value: "" },
  ]);
  const maxCharacters = 50;

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

  const handleDesignTextChange = (index, value) => {
    if (value.length <= maxCharacters) {
      const newDesignPrinciplesTextAreas = [...designPrinciplesTextAreas];
      newDesignPrinciplesTextAreas[index].value = value;
      setDesignPrinciplesTextAreas(newDesignPrinciplesTextAreas);
    }
  };

  const handleDesignPrinciplesAddTextArea = () => {
    setDesignPrinciplesTextAreas([
      ...designPrinciplesTextAreas,
      { id: designPrinciplesTextAreas.length + 1, value: "" },
    ]);
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
            <div
              className={`secondaryResearch-dataGather-tabs-name ${
                activeTab === "Company Docs" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Company Docs")}
            >
              <p>Company Docs</p>
            </div>
            <div
              className={`secondaryResearch-dataGather-tabs-name ${
                activeTab === "Design Principles" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Design Principles")}
            >
              <p>Design Principles</p>
            </div>
          </div>
          <div className="secondaryResearch-dataGather-content">
            {activeTab === "Company Docs" ? (
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
            ) : activeTab === "Design Principles" ? (
              <div className="design-container">
                <div className="design-content">
                  <div className="design-content-top">
                    <h1>Add Principles</h1>
                    <p>
                      List up to 5 things you would like your organization to be
                      known for as an employer
                    </p>
                  </div>
                  <div className="design-content-add-container">
                    {designPrinciplesTextAreas.map((textArea, index) => (
                      <div className="design-content-add">
                        <textarea
                          type="text"
                          value={textArea.value}
                          onChange={(e) =>
                            handleDesignTextChange(index, e.target.value)
                          }
                        />
                        {index === designPrinciplesTextAreas.length - 1 && (
                          <button onClick={handleDesignPrinciplesAddTextArea}>
                            +
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="design-button">
                  <button>Submit</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyInput;
