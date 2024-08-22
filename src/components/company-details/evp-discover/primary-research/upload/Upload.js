import React, { useState, useRef } from "react";

import "./Upload.css";

function Upload() {
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
    <div className="upload-main-container">
      <div className="upload-container">
        <div className="upload-header">
          <p className="upload-header-para-heading">Add Transcripts</p>
          <p className="upload-header-para">
            Upload interview transcripts, think tank session takeaways, and
            survey results.
          </p>
        </div>
        <div className="upload-documents">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleUploadFileChange}
            style={{ display: "none" }}
            multiple
          />
          <div className="upload-file-display-area" onClick={handleUploadFile}>
            {fileNames.map((name, index) => (
              <div key={index} className="upload-file-name">
                {name}
              </div>
            ))}
          </div>
          <div className="upload-button">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
