import React from "react";

import "./DesignPrinciples.css";

function DesignPrinciples() {
  return (
    <div className="designPrinciples-main-container">
      <div className="designPrinciples-header">
        <p className="designPrinciples-header-paraHeading">Design Principles</p>
        <p className="designPrinciples-header-para">
          Fill all Design Principles questions before going to next step
        </p>
      </div>
      <div className="designPrinciples-content">
        <div className="designPrinciples-content-fields">
          <label>What are the strategic goals for the next 3-5 years?</label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            Do you have an existing EVP? If so, what aspects of it are working
            well, and what areas need improvement?
          </label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            What are the key attributes or messages that you want to convey
            through your EVP?
          </label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>How would you describe your company culture?</label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            What values are most important to your organization and its
            employees?
          </label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            What challenges do you currently face in attracting and retaining
            top talent?
          </label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            What are the key reasons employees stay at your company? What are
            the reasons they leave?
          </label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            What talent segment(s) do you most want your EVP to target
          </label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            How do you differentiate your company's employee experience from
            competitors?
          </label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            How do you currently measure employee satisfaction and engagement?
          </label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            What channels do you use to communicate with employees and potential
            candidates?
          </label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            How do you plan to measure the success and impact of the new EVP?
          </label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            How do you believe your company is perceived by potential candidates
            in the market?
          </label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            What are the key messages you want to convey to the market about
            working at your company?
          </label>
          <textarea />
        </div>
        <div className="designPrinciples-content-fields">
          <label>
            What are your competitors doing in terms of EVP that you admire or
            want to differentiate from?
          </label>
          <textarea />
        </div>
      </div>
      <div className="designPrinciples-button">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default DesignPrinciples;
