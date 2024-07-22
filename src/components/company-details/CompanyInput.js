import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyInput.css";
import Navbar from "../bars/Navbar";
import Loading from "../utils/loading/Loading";

function CompanyInput() {
  const accessToken = localStorage.getItem("accessToken");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
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
    formData.append("company_website", companyWebsite);
    files.forEach((file) => {
      formData.append("documents", file);
    });

    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/search/", {
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
      <Navbar />
      <div className="company-input-adjust">
        <div className="company-input-container-left">
          <p className="company-input-para">Add Company</p>
          <form className="company-input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Company Website"
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
              multiple
            />
            <div className="file-display-area">
              {fileNames.map((name, index) => (
                <div key={index} className="file-name">
                  {name}
                </div>
              ))}
            </div>
            <button type="submit" className="company-input-button">
              Submit
            </button>
            <svg
              onClick={handleSVGClick}
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
    </>
  );
}

export default CompanyInput;