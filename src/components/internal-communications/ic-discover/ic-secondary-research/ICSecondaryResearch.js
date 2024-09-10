import React, { useState, useRef } from "react";

import "./ICSecondaryResearch.css";

function ICSecondaryResearch() {
  const [fileNames, setFileNames] = useState(["Upload documents"]);
  const [files, setFiles] = useState([]);

  const fileInputRef = useRef(null);

  const handleUploadFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileNames = selectedFiles.map((file) => file.name);
    setFileNames(fileNames);
    setFiles(selectedFiles);
  };

  const handleUploadFile = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="ic-secondaryResearch-main-container">
      <div className="ic-secondaryResearch-container">
        <div className="ic-secondaryResearch-info">
          <div className="ic-secondaryResearch-information-top">
            <p className="ic-secondaryResearch-information-top-para-heading">
              Secondary Research
            </p>
            <p className="ic-secondaryResearch-para">
              Company and industry documents personalise the EVP
            </p>
            <p className="ic-secondaryResearch-info-para">
              In addition to processing your documents, the platform will crawl
              hundreds of curated online sources to conduct comprehensive
              secondary research.
            </p>
          </div>
          <hr />
          <div className="ic-secondaryResearch-information-bottom">
            <h4>Documents to Upload</h4>
            <ul className="ic-secondaryResearch-information-bottom-unordered-list">
              <li>Exit interview data</li>
              <li>Employee feedback</li>
              <li>ESAT survey results</li>
              <li>Current / frequently hired for job positions</li>
              <li>Brand Guidelines</li>
            </ul>
          </div>
        </div>
        <div className="ic-secondaryResearch-upload">
          <div className="ic-secondaryResearch-upload-container">
            <div className="ic-secondaryResearch-upload-documents">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleUploadFileChange}
                style={{ display: "none" }}
                multiple
              />
              <div
                className="ic-secondaryResearch-file-display-area"
                onClick={handleUploadFile}
              >
                <div className="ic-secondaryResearch-file-svg">
                  <svg
                    fill="#000000"
                    height="20"
                    width="20"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0c-54.013,0-97.955,43.943-97.955,97.955v338.981c0,41.39,33.674,75.064,75.064,75.064
                        c41.39,0,75.064-33.674,75.064-75.064V122.511c0-28.327-23.046-51.375-51.375-51.375c-28.327,0-51.374,23.047-51.374,51.375
                        v296.911h31.347V122.511c0-11.042,8.984-20.028,20.028-20.028s20.028,8.985,20.028,20.028v314.424
                        c0,24.106-19.612,43.717-43.718,43.717c-24.106,0-43.717-19.612-43.717-43.717V97.955c0-36.727,29.88-66.608,66.608-66.608
                        s66.608,29.881,66.608,66.608v321.467h31.347V97.955C353.955,43.943,310.013,0,256,0z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="ic-secondaryResearch-upload-files">
                  {fileNames.map((name, index) => (
                    <div key={index} className="ic-secondaryResearch-file-name">
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ic-secondaryResearch-document-upload-button">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ICSecondaryResearch;