import React from "react";

import "./Develop.css";
import AttributeOfGreatPlace from "./attribute-of-great-place/AttributeOfGreatPlace";
import KeyThemes from "./key-themes/KeyThemes";
import PrimaryResearchResults from "./primary-research-results/PrimaryResearchResults";
import TalentInsights from "./talent-insights/TalentInsights";

function Develop({
  setLoading,
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  return (
    <>
      {currentListItem === "Attributes of Great Place" ? (
        <div className="develop-main-container">
          <AttributeOfGreatPlace
            currentListItem={currentListItem}
            listItemEndpointMapping={listItemEndpointMapping}
            companyName={companyName}
            accessToken={accessToken}
          />
        </div>
      ) : currentListItem === "Key Themes" ? (
        <div className="develop-main-container">
          <KeyThemes
            currentListItem={currentListItem}
            listItemEndpointMapping={listItemEndpointMapping}
            companyName={companyName}
            accessToken={accessToken}
          />
        </div>
      ) : currentListItem === "Primary Research Results" ? (
        <div className="develop-main-container">
          <PrimaryResearchResults
            currentListItem={currentListItem}
            listItemEndpointMapping={listItemEndpointMapping}
            companyName={companyName}
            accessToken={accessToken}
          />
        </div>
      ) : currentListItem === "Talent Insights" ? (
        <div className="develop-main-container">
          <TalentInsights
            setLoading={setLoading}
            currentListItem={currentListItem}
            listItemEndpointMapping={listItemEndpointMapping}
            companyName={companyName}
            accessToken={accessToken}
          />
        </div>
      ) : null}
    </>
  );
}

export default Develop;
