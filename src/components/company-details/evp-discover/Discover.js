import React from "react";

import "./Discover.css";
import PrimaryResearch from "./primary-research/PrimaryResearch";
import SecondaryResearch from "./secondary-research/SecondaryResearch";
import CompanyInfo from "./company-info/CompanyInfo";

function Discover({
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
        <SecondaryResearch />
      ) : currentListItem === "Company Info" ? (
        <div className="discover-main-container">
          <CompanyInfo
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
