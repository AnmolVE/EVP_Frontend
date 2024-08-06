import React from "react";

import "./Develop.css";
import AttributeOfGreatPlace from "./attribute-of-great-place/AttributeOfGreatPlace";
import KeyThemes from "./key-themes/KeyThemes";
import AudienceWiseMessaging from "./audience-wise-messaging/AudienceWiseMessaging";

function Develop({
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
      ) : currentListItem === "Audience-Wise Messaging" ? (
        <div className="develop-main-container">
          <AudienceWiseMessaging
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
