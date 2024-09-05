import React, { useState } from "react";

import "./DesignPrinciples.css";

function DesignPrinciples() {
  const [activeTab, setActiveTab] = useState("Tab 1");

  return (
    <div className="design-principles-container">
      <div className="design-principles-tabs">
        <div
          className={`design-principles-tab ${
            activeTab === "Tab 1" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 1")}
        >
          <p>Tab 1</p>
        </div>
        <div
          className={`design-principles-tab ${
            activeTab === "Tab 2" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 2")}
        >
          <p>Tab 2</p>
        </div>
        <div
          className={`design-principles-tab ${
            activeTab === "Tab 3" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 3")}
        >
          <p>Tab 3</p>
        </div>
        <div
          className={`design-principles-tab ${
            activeTab === "Tab 4" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 4")}
        >
          <p>Tab 4</p>
        </div>
        <div
          className={`design-principles-tab ${
            activeTab === "Tab 5" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 5")}
        >
          <p>Tab 5</p>
        </div>
        <div
          className={`design-principles-tab ${
            activeTab === "Tab 6" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 6")}
        >
          <p>Tab 6</p>
        </div>
        <div
          className={`design-principles-tab ${
            activeTab === "Tab 7" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 7")}
        >
          <p>Tab 7</p>
        </div>
        <div
          className={`design-principles-tab ${
            activeTab === "Tab 8" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 8")}
        >
          <p>Tab 8</p>
        </div>
        <div
          className={`design-principles-tab ${
            activeTab === "Tab 9" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Tab 9")}
        >
          <p>Tab 9</p>
        </div>
      </div>
      <div className="design-principles-content">
        {activeTab === "Tab 1" && (
          <>
            <div className="design-principles-content-fields">
              <label>
                What is the overarching vision and mission of your company?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What are the strategic goals for the next 3-5 years?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                How do you currently see your company's position in the market?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>What is your company's long-term growth strategy?</label>
              <textarea />
            </div>
          </>
        )}
        {activeTab === "Tab 2" && (
          <>
            <div className="design-principles-content-fields">
              <label>
                Do you have an existing EVP? If so, what aspects of it are
                working well, and what areas need improvement?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                How do you currently communicate your employer brand to
                potential and current employees?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What are the key attributes or messages that you want to convey
                through your EVP?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What differentiates your company from competitors in terms of
                work environment, culture, and employee experience?
              </label>
              <textarea />
            </div>
          </>
        )}
        {activeTab === "Tab 3" && (
          <>
            <div className="design-principles-content-fields">
              <label>
                Can you provide an overview of your current employee
                demographics (e.g., age, gender, tenure, roles)?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>How would you describe your company culture?</label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What values are most important to your organization and its
                employees?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What aspects of your workplace do employees value the most?
              </label>
              <textarea />
            </div>
          </>
        )}
        {activeTab === "Tab 4" && (
          <>
            <div className="design-principles-content-fields">
              <label>
                What challenges do you currently face in attracting and
                retaining top talent?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What are the key reasons employees stay at your company? What
                are the reasons they leave?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What talent segments are most critical to your business success?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                How do you differentiate your company's employee experience from
                competitors?
              </label>
              <textarea />
            </div>
          </>
        )}
        {activeTab === "Tab 5" && (
          <>
            <div className="design-principles-content-fields">
              <label>
                Do you conduct regular employee surveys or feedback sessions? If
                so, what are the key insights?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What are the most common themes in employee feedback regarding
                their experience at your company?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                How engaged are your employees, and what drives or hinders their
                engagement?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                How do you currently measure employee satisfaction and
                engagement?
              </label>
              <textarea />
            </div>
          </>
        )}
        {activeTab === "Tab 6" && (
          <>
            <div className="design-principles-content-fields">
              <label>
                How do you envision integrating the EVP across different
                touchpoints (recruitment, onboarding, internal communications,
                etc.)?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What channels do you use to communicate with employees and
                potential candidates?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                Who will be the key stakeholders involved in the EVP development
                and implementation process?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                How do you plan to measure the success and impact of the new
                EVP?
              </label>
              <textarea />
            </div>
          </>
        )}
        {activeTab === "Tab 7" && (
          <>
            <div className="design-principles-content-fields">
              <label>
                What are your company’s priorities and goals around diversity,
                equity, and inclusion?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                How does DEI currently influence your talent strategies and
                workplace culture?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What DEI challenges are you facing, and how do you plan to
                address them?
              </label>
              <textarea />
            </div>
          </>
        )}
        {activeTab === "Tab 8" && (
          <>
            <div className="design-principles-content-fields">
              <label>
                What benefits and perks do you currently offer, and how do they
                align with your company's culture?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                How do you support work-life balance and employee well-being?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What is the role of flexible work arrangements in your
                organization?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                How do you ensure a healthy and productive work environment for
                your employees?
              </label>
              <textarea />
            </div>
          </>
        )}
        {activeTab === "Tab 9" && (
          <>
            <div className="design-principles-content-fields">
              <label>
                How do you believe your company is perceived by potential
                candidates in the market?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What are the key messages you want to convey to the market about
                working at your company?
              </label>
              <textarea />
            </div>
            <div className="design-principles-content-fields">
              <label>
                What are your competitors doing in terms of EVP that you admire
                or want to differentiate from?
              </label>
              <textarea />
            </div>
          </>
        )}
      </div>
      <div className="design-principles-button">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default DesignPrinciples;
