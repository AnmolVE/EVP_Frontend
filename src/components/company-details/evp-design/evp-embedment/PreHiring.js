import React from "react";

import { preHiringFields } from "./embedment-constants";

function PreHiring() {
  const handleClick = (field) => {
    console.log(field);
  };

  return (
    <div className="evp-embedment-content">
      <div className="evp-embedment-left">
        {preHiringFields.map((field, index) => (
          <div
            key={index}
            className="evp-embedment-left-box"
            onClick={() => handleClick(field)}
          >
            <p>{field}</p>
          </div>
        ))}
      </div>
      <div className="evp-embedment-right">PreHiring Content</div>
    </div>
  );
}

export default PreHiring;
