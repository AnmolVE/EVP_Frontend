import React from "react";

import "./ICDesignPrinciples.css";

function ICDesignPrinciples() {
  return (
    <div className="ic-designPrinciples-main-container">
      <div className="ic-designPrinciples-header">
        <p className="ic-designPrinciples-header-paraHeading">
          Internal Communications Strategy Inputs
        </p>
      </div>
      <div className="ic-designPrinciples-content">
        <div className="ic-designPrinciples-content-fields">
          <label>
            What are the primary goals of your communications strategy?
          </label>
          <textarea />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            Who is your key target audience, both internally and externally?
          </label>
          <textarea />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            What are the key messages you want to convey to each audience?
          </label>
          <textarea />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            What channels or platforms are most effective for reaching your
            audience?
          </label>
          <textarea />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            How do you currently measure the success of your communications
            efforts?
          </label>
          <textarea />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            What are the biggest challenges or pain points in your current
            communications?
          </label>
          <textarea />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            Are there any upcoming events, changes, or initiatives that need
            focused communication efforts?
          </label>
          <textarea />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            How do you handle feedback and engagement from employees or external
            stakeholders?
          </label>
          <textarea />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            What tone and style of communication align with your company culture
            and brand?
          </label>
          <textarea />
        </div>
        <div className="ic-designPrinciples-content-fields">
          <label>
            Who will be responsible for executing and managing the
            communications plan?
          </label>
          <textarea />
        </div>
      </div>
      <div className="ic-designPrinciples-button">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default ICDesignPrinciples;
