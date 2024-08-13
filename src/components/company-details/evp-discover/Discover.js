import React from "react";

import "./Discover.css";
import PrimaryResearch from "./primary-research/PrimaryResearch";
import SecondaryResearch from "./secondary-research/SecondaryResearch";
import CompanyInfo from "./company-info/CompanyInfo";
import TalentDataset from "./talent-dataset/TalentDataset";

function Discover({
  setPageLoading,
  currentListItem,
  listItemEndpointMapping,
  companyName,
  accessToken,
}) {
  return (
    <>
      {currentListItem === "Primary Research" ? (
        <PrimaryResearch />
      ) : currentListItem === "Secondary Research" ? (
        <SecondaryResearch setPageLoading={setPageLoading} />
      ) : currentListItem === "Company Dataset" ? (
        <div className="discover-main-container">
          <CompanyInfo
            currentListItem={currentListItem}
            listItemEndpointMapping={listItemEndpointMapping}
            companyName={companyName}
            accessToken={accessToken}
          />
        </div>
      ) : currentListItem === "Talent Dataset" ? (
        <div className="discover-main-container">
          <TalentDataset
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

export default Discover;
