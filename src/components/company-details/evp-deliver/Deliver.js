import React from "react";
import "./Deliver.css";
import EvpExecutionPlan from "./evp-execution-plan/EvpExecutionPlan";

function Deliver({ currentListItem }) {
  return (
    <>
      {currentListItem === "EVP Statement & Pillars" ? (
        <div>EVP Statement & Pillars</div>
      ) : currentListItem === "EVP Hero Creative" ? (
        <div>EVP Hero Creative</div>
      ) : currentListItem === "EVP Narrative" ? (
        <div>EVP Narrative</div>
      ) : currentListItem === "EVP Talking Points" ? (
        <div>EVP Talking Points</div>
      ) : currentListItem === "EVP Execution Plan" ? (
        <EvpExecutionPlan />
      ) : null}
    </>
  );
}

export default Deliver;
