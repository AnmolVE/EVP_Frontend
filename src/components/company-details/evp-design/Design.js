import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Design.css";
import Top4Themes from "./top-4-themes/Top4Themes";
import MessagingHierarchy from "./messaging-hierarchy/MessagingHierarchy";
import CreativeDirection from "./creative-direction/CreativeDirection";
import EVPPromise from "./evp-promise/EVPPromise";
import EVPAudit from "./evp-audit/EVPAudit";
import EVPEmbedment from "./evp-embedment/EVPEmbedment";
import EVPHandbook from "./evp-handbook/EVPHandbook";

function Design({
  currentListItem,
  pillars,
  newPillars,
  companyName,
  accessToken,
}) {
  return (
    <>
      {currentListItem === "Top 4 Themes" ? (
        <Top4Themes
          pillars={pillars}
          companyName={companyName}
          accessToken={accessToken}
        />
      ) : currentListItem === "Messaging Hierarchy" ? (
        <MessagingHierarchy
          companyName={companyName}
          accessToken={accessToken}
          pillars={pillars}
          newPillars={newPillars}
        />
      ) : currentListItem === "Creative Direction" ? (
        <CreativeDirection
          companyName={companyName}
          accessToken={accessToken}
        />
      ) : currentListItem === "EVP Promise" ? (
        <EVPPromise />
      ) : currentListItem === "EVP Audit" ? (
        <EVPAudit />
      ) : currentListItem === "EVP Embedment" ? (
        <EVPEmbedment companyName={companyName} accessToken={accessToken} />
      ) : currentListItem === "EVP Handbook" ? (
        <EVPHandbook companyName={companyName} accessToken={accessToken} />
      ) : null}
    </>
  );
}

export default Design;
