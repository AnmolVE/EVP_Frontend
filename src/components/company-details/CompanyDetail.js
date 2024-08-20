import React, { useState, useEffect } from "react";
import Navbar from "../bars/Navbar";
import Footer from "../bars/Footer";
import "./CompanyDetail.css";
import CompanyDetailsLeftbar from "./CompanyDetailsLeftbar";
import { useSelector } from "react-redux";
import {
  DISCOVER,
  DEVELOP,
  DISSECT,
  DESIGN,
  DELIVER,
  listItemEndpointMapping,
} from "../../staticData/labels";

import Discover from "./evp-discover/Discover";
import Develop from "./evp-develop/Develop";
import Dissect from "./evp-dissect/Dissect";
import Design from "./evp-design/Design";
import Deliver from "./evp-deliver/Deliver";

import Loading from "../utils/loading/Loading";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function CompanyDetail() {
  const { loading } = useSelector((store) => store.inputField);

  const companyName = localStorage.getItem("companyName");
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const accessToken = tokens.access;

  const [pageLoading, setPageLoading] = useState(false);

  const [pageName, setPageName] = useState("DISCOVER");
  const [listItems, setListItems] = useState(DISCOVER);
  const [currentListItem, setCurrentListItem] = useState(listItems[0]?.name);

  const [pillars, setPillars] = useState([]);
  const [newPillars, setNewPillars] = useState([{}]);

  useEffect(() => {
    setPageLoading(loading);
  }, [loading]);

  const handleListItemClick = (listItem) => {
    setCurrentListItem(listItem);
  };

  const handleDevelopClick = async () => {
    setPageLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/develop/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ company_name: companyName }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(response.message || "Error");
      }
      const responseData = await response.json();
      console.log(responseData);
      setPageLoading(false);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleDissectClick = async () => {
    setPageLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/dissect/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ company_name: companyName }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(response.message || "Error");
      }
      const responseData = await response.json();
      console.log(responseData);
      setPageLoading(false);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleDesignClick = async () => {
    setPageLoading(true);
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/design/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ company_name: companyName }),
      });
      if (!response.ok) {
        throw new Error(response.message || "Error");
      }
      const responseData = await response.json();
      setPillars(responseData);
      const tabNames = responseData.map((item) => item.tab_name);
      setNewPillars(tabNames);
      setPageLoading(false);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  if (pageLoading) {
    return <Loading />;
  }

  return (
    <div className="company-detail-main-container">
      <Navbar />
      <div className="company-detail-container">
        <div className="company-detail-navbar">
          <ul>
            <li
              onClick={() => {
                setPageName("DISCOVER");
                setListItems(DISCOVER);
              }}
              className={pageName === "DISCOVER" ? "active" : ""}
            >
              DISCOVER
            </li>
            <li
              onClick={() => {
                handleDevelopClick();
                setPageName("DEVELOP");
                setListItems(DEVELOP);
                setCurrentListItem(DEVELOP[0]?.name);
              }}
              className={pageName === "DEVELOP" ? "active" : ""}
            >
              DEVELOP
            </li>
            <li
              onClick={() => {
                handleDissectClick();
                setPageName("DISSECT");
                setListItems(DISSECT);
                setCurrentListItem(DISSECT[0]?.name);
              }}
              className={pageName === "DISSECT" ? "active" : ""}
            >
              DISSECT
            </li>
            <li
              onClick={() => {
                handleDesignClick();
                setPageName("DESIGN");
                setListItems(DESIGN);
                setCurrentListItem(DESIGN[0]?.name);
              }}
              className={pageName === "DESIGN" ? "active" : ""}
            >
              DESIGN
            </li>
            <li
              onClick={() => {
                setPageName("DELIVER");
                setListItems(DELIVER);
                setCurrentListItem(DELIVER[0]?.name);
              }}
              className={pageName === "DELIVER" ? "active" : ""}
            >
              DELIVER
            </li>
          </ul>
        </div>
        <div className="company-detail-below">
          <CompanyDetailsLeftbar
            listItems={listItems}
            currentListItem={currentListItem}
            handleListItemClick={handleListItemClick}
          />
          <div className="company-detail-below-secondContainer">
            {pageName === "DISCOVER" ? (
              <Discover
                setPageLoading={setPageLoading}
                currentListItem={currentListItem}
                setCurrentListItem={setCurrentListItem}
                listItemEndpointMapping={listItemEndpointMapping}
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : pageName === "DEVELOP" ? (
              <Develop
                currentListItem={currentListItem}
                listItemEndpointMapping={listItemEndpointMapping}
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : pageName === "DISSECT" ? (
              <Dissect
                currentListItem={currentListItem}
                listItemEndpointMapping={listItemEndpointMapping}
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : pageName === "DESIGN" ? (
              <Design
                setPageLoading={setPageLoading}
                currentListItem={currentListItem}
                pillars={pillars}
                newPillars={newPillars}
                setPillars={setPillars}
                setNewPillars={setNewPillars}
                companyName={companyName}
                accessToken={accessToken}
              />
            ) : pageName === "DELIVER" ? (
              <Deliver currentListItem={currentListItem} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CompanyDetail;
