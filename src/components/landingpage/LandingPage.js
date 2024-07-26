import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page-main-container">
      <section className="landing-page-section-1">
        <div className="landing-page-section-1-top">
          <div className="landing-page-section-1-top-left">
            <img src="" alt="image" />
          </div>
          <div className="landing-page-section-1-top-right">
            <div className="landing-page-section-1-top-right-component">
              <img src="" alt="image"></img>
              <p>Company Profile</p>
            </div>
            <div className="landing-page-section-1-top-right-component">
              <img src="" alt="image"></img>
              <p>Talent Insights</p>
            </div>
            <div className="landing-page-section-1-top-right-component">
              <img src="" alt="image"></img>
              <p>Industry Trends</p>
            </div>
            <div className="landing-page-section-1-top-right-component">
              <img src="" alt="image"></img>
              <p>Dashboard</p>
            </div>
          </div>
        </div>
        <div className="landing-page-section-1-bottom">
          <p>Company's Talent</p>
          <p>Marketing Workspace</p>
          <p>7897 credits</p>
        </div>
      </section>
      <section className="landing-page-section-2">
        <div className="landing-page-section-2-left">
          <ul>
            <li>Measure Employer Brand</li>
            <li>Positioning Statement</li>
            <li>Recruitment Campaign</li>
            <li>Social & Digital Content</li>
            <li>Internal Comms</li>
            <li>Leadership Brand</li>
            <li>Integration Comms</li>
          </ul>
        </div>
        <div className="landing-page-section-2-right">
          <div className="landing-page-section-2-right-top">
            <p>How would you like to build your employer brand today?</p>
          </div>
          <div className="landing-page-section-2-right-center">
            <div className="landing-page-section-2-right-center-left">
              <div className="landing-page-section-2-right-center-left-top">
                <div>
                  <p>Measure my employer brand</p>
                </div>
                <div>
                  <p>Write an email</p>
                </div>
              </div>
              <div className="landing-page-section-2-right-center-left-bottom">
                <div>
                  <p>Create a campaign</p>
                </div>
                <div>
                  <p>Create a value proposition statement</p>
                </div>
              </div>
            </div>
            <div className="landing-page-section-2-right-center-right">
              <p>Document upload part</p>
            </div>
          </div>
          <div className="landing-page-section-2-right-bottom">
            <input placeholder="Write an email" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
