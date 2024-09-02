import React, { useState } from "react";

import "./DesignPrinciples.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function DesignPrinciples({ companyName, accessToken }) {
  const [designPrinciplesTextAreas, setDesignPrinciplesTextAreas] = useState([
    { id: 1, value: "" },
  ]);
  const maxDesignPrinciplesTextAreas = 5;
  const maxCharacters = 50;

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

  const handleDesignPrinciplesSubmit = async () => {
    const design_principles = designPrinciplesTextAreas.map(
      (textArea) => textArea.value
    );

    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/design-principles/${companyName}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ design_principles: design_principles }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="design-container">
      <div className="design-content">
        <div className="design-content-top">
          <h1>Add Principles</h1>
          <p>
            List up to 5 things you would like your organization to be known for
            as an employer
          </p>
        </div>
        <div className="design-content-add-container">
          {designPrinciplesTextAreas.map((textArea, index) => (
            <div key={index} className="design-content-add">
              <textarea
                type="text"
                value={textArea.value}
                onChange={(e) => handleDesignTextChange(index, e.target.value)}
              />
              {index === designPrinciplesTextAreas.length - 1 &&
                designPrinciplesTextAreas.length <
                  maxDesignPrinciplesTextAreas && (
                  <button onClick={handleDesignPrinciplesAddTextArea}>+</button>
                )}
            </div>
          ))}
        </div>
      </div>
      <div className="design-button">
        <button onClick={handleDesignPrinciplesSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default DesignPrinciples;
