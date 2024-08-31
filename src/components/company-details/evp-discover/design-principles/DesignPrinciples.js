import React, { useState } from "react";

import "./DesignPrinciples.css";

function DesignPrinciples() {
  const [designPrinciplesTextAreas, setDesignPrinciplesTextAreas] = useState([
    { id: 1, value: "" },
  ]);
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
            <div className="design-content-add">
              <textarea
                type="text"
                value={textArea.value}
                onChange={(e) => handleDesignTextChange(index, e.target.value)}
              />
              {index === designPrinciplesTextAreas.length - 1 && (
                <button onClick={handleDesignPrinciplesAddTextArea}>+</button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="design-button">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default DesignPrinciples;
