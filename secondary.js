import React from "react";

function secondary() {
  return (
    <>
      <div className="secondaryResearch-uploadContainer">
        <h1>Add Company Documents</h1>
        <form className="secondaryResearch-form" onSubmit={handleSubmit}>
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
            className="secondaryResearch-file-display-area"
            onClick={handleSVGClick}
          >
            {fileNames.map((name, index) => (
              <div key={index} className="secondaryResearch-file-name">
                {name}
              </div>
            ))}
          </div>
          <button type="submit" className="secondaryResearch-button">
            Submit
          </button>
        </form>
      </div>
      <div className="secondaryResearch-design-principles-container">
        <div className="secondaryResearch-design-principles">
          <h1>Design Principles</h1>
          <label>
            List up to 5 things you would like your organization to be known for
            as an employer
          </label>
          <div className="secondaryResearch-add-design-principles-container">
            {designPrinciplesTextAreas.map((textArea, index) => (
              <div className="secondaryResearch-add-design-principles">
                <textarea
                  type="text"
                  value={textArea.value}
                  onChange={(e) =>
                    handleDesignTextChange(index, e.target.value)
                  }
                />
                <button onClick={handleDesignPrinciplesAddTextArea}>+</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default secondary;
