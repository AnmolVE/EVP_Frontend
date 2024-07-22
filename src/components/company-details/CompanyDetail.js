import React, { useState, useEffect, useRef } from "react";
import Navbar from "../bars/Navbar";
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
import Design from "./Design";
import Discover from "./Discover";
import Loading from "../utils/loading/Loading";

function CompanyDetail() {
  const { data } = useSelector((store) => store.inputField);
  // console.log("data : ", data);
  // console.log("Hello");

  const companyName = localStorage.getItem("companyName");
  const accessToken = localStorage.getItem("accessToken");

  const [pageName, setPageName] = useState("DISCOVER");
  const [listItems, setListItems] = useState(DISCOVER);
  const [currentListItem, setCurrentListItem] = useState("");

  const [pillars, setPillars] = useState([]);
  const [newPillars, setNewPillars] = useState([{}]);

  const [companyData, setCompanyData] = useState(null);

  const [chatbotText, setChatbotText] = useState("");
  const [chatbotFiles, setChatbotFiles] = useState([]);
  const [chatbotMessages, setChatbotMessages] = useState([
    {
      type: "bot",
      text: "To fill in the empty fields, either manually input data or upload relevant documents to generate data.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const chatBotFileInputRef = useRef(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setCompanyData(data[0]);
    }
  }, [data]);
  // console.log(companyData);

  const handleInputChange = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handleListItemClick = (listItem) => {
    setCurrentListItem(listItem);
  };

  const handleDevelopClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/develop/`, {
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
      setLoading(false);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleDissectClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/dissect/`, {
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
      setLoading(false);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleDesignClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/design/`, {
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
      setLoading(false);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const baseApiEndpoint = listItemEndpointMapping[currentListItem];
    console.log(baseApiEndpoint);
    if (!baseApiEndpoint) {
      alert("API endpoint not configured for this section");
      return;
    }

    try {
      const response = await fetch(`${baseApiEndpoint}/${companyName}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(companyData),
      });
      const responseData = await response.json();
      alert("Data updated successfully!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleChatbotTextChange = (e) => {
    setChatbotText(e.target.value);
  };

  const handleChatbotFileChange = (e) => {
    setChatbotFiles([...e.target.files]);
  };

  const handleChatbotSvgClick = () => {
    chatBotFileInputRef.current.click();
  };

  const handleChatbotSubmit = async (e) => {
    e.preventDefault();
    setChatbotMessages([
      ...chatbotMessages,
      { type: "user", text: chatbotText },
    ]);
    const formData = new FormData();
    formData.append("user_query", chatbotText);
    formData.append("company_name", companyName);
    if (chatbotFiles.length > 0) {
      chatbotFiles.forEach((file) => {
        formData.append("documents", file);
      });
    }

    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    try {
      const chatBotResponse = await fetch(
        "http://127.0.0.1:8000/api/chatbot/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: formData,
        }
      );
      const chatBotResponseData = await chatBotResponse.json();
      console.log("chatBotResponseData : ", chatBotResponseData);
      setChatbotMessages([
        ...chatbotMessages,
        { type: "user", text: chatbotText },
        { type: "bot", text: chatBotResponseData },
      ]);
      setChatbotText("");
      setChatbotFiles([]);
      chatBotFileInputRef.current.value = "";
    } catch (error) {
      console.error("Error submitting the form : ", error);
    }
  };

  if (loading) {
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
              data-hover-text="Data Collection"
            >
              DISCOVER
            </li>
            <li
              onClick={() => {
                handleDevelopClick();
                setPageName("DEVELOP");
                setListItems(DEVELOP);
              }}
              className={pageName === "DEVELOP" ? "active" : ""}
              data-hover-text="Data Segmentation"
            >
              DEVELOP
            </li>
            <li
              onClick={() => {
                handleDissectClick();
                setPageName("DISSECT");
                setListItems(DISSECT);
              }}
              className={pageName === "DISSECT" ? "active" : ""}
              data-hover-text="Data Analysis"
            >
              DISSECT
            </li>
            <li
              onClick={() => {
                handleDesignClick();
                setPageName("DESIGN");
                setListItems(DESIGN);
              }}
              className={pageName === "DESIGN" ? "active" : ""}
              data-hover-text="Data Insights"
            >
              DESIGN
            </li>
            <li
              onClick={() => {
                setPageName("DELIVER");
                setListItems(DELIVER);
              }}
              className={pageName === "DELIVER" ? "active" : ""}
              data-hover-text="EVP"
            >
              DELIVER
            </li>
          </ul>
        </div>
        <div className="company-detail-below">
          <CompanyDetailsLeftbar
            listItems={listItems}
            handleListItemClick={handleListItemClick}
          />
          <div className="company-detail-below-secondContainer">
            <h2>Company Name: {companyName}</h2>
            {pageName === "DISCOVER" ? (
              <Discover
                currentListItem={currentListItem}
                listItemEndpointMapping={listItemEndpointMapping}
              />
            ) : currentListItem === "Attributes of Great Place" ? (
              <div className="company-detail-below-secondContainer-div">
                <div className="company-detail-below-secondContainer-div-div">
                  <label>Culture</label>
                  <textarea
                    onChange={handleInputChange}
                    name="culture"
                    value={companyData?.culture || ""}
                  ></textarea>
                  <label>Purpose and Values</label>
                  <textarea
                    onChange={handleInputChange}
                    name="purpose_and_values"
                    value={companyData?.purpose_and_values || ""}
                  ></textarea>
                  <label>Benefits and Perks</label>
                  <textarea
                    onChange={handleInputChange}
                    name="benefits_perks"
                    value={companyData?.benefits_perks || ""}
                  ></textarea>
                  <label>Career Development</label>
                  <textarea
                    onChange={handleInputChange}
                    name="career_development"
                    value={companyData?.career_development || ""}
                  ></textarea>
                  <label>Office and Facilities</label>
                  <textarea
                    onChange={handleInputChange}
                    name="office_and_facilities"
                    value={companyData?.office_and_facilities || ""}
                  ></textarea>
                  <label>Leadership and Management</label>
                  <textarea
                    onChange={handleInputChange}
                    name="leadership_and_management"
                    value={companyData?.leadership_and_management || ""}
                  ></textarea>
                  <label>Rewards and Recognition</label>
                  <textarea
                    onChange={handleInputChange}
                    name="rewards_and_recognition"
                    value={companyData?.rewards_and_recognition || ""}
                  ></textarea>
                  <label>Teamwork and Collaboration</label>
                  <textarea
                    onChange={handleInputChange}
                    name="teamwork_and_collaboration"
                    value={companyData?.teamwork_and_collaboration || ""}
                  ></textarea>
                  <label>Brand and Reputation</label>
                  <textarea
                    onChange={handleInputChange}
                    name="brand_and_reputation"
                    value={companyData?.brand_and_reputation || ""}
                  ></textarea>
                  <label>Work Life Balance</label>
                  <textarea
                    onChange={handleInputChange}
                    name="work_life_balance"
                    value={companyData?.work_life_balance || ""}
                  ></textarea>
                  <div className="company-detail-below-secondContainer-div-div-buttons">
                    <button type="submit" onClick={handleSubmit}>
                      Submit
                    </button>
                    <button>Reset</button>
                  </div>
                </div>
              </div>
            ) : currentListItem === "Key Themes" ? (
              <div className="company-detail-below-secondContainer-div">
                <div className="company-detail-below-secondContainer-div-div">
                  <label>Top Key Themes</label>
                  <textarea
                    onChange={handleInputChange}
                    name="top_key_themes"
                    value={companyData?.top_key_themes || ""}
                  ></textarea>
                  <div className="company-detail-below-secondContainer-div-div-buttons">
                    <button type="submit" onClick={handleSubmit}>
                      Submit
                    </button>
                    <button>Reset</button>
                  </div>
                </div>
              </div>
            ) : currentListItem === "Audience-Wise Messaging" ? (
              <div className="company-detail-below-secondContainer-div">
                <div className="company-detail-below-secondContainer-div-div">
                  <label>Existing Employees</label>
                  <textarea
                    onChange={handleInputChange}
                    name="existing_employees"
                    value={companyData?.existing_employees || ""}
                  ></textarea>
                  <label>Alumni</label>
                  <textarea
                    onChange={handleInputChange}
                    name="alumni"
                    value={companyData?.alumni || ""}
                  ></textarea>
                  <label>Targeted Talent</label>
                  <textarea
                    onChange={handleInputChange}
                    name="targeted_talent"
                    value={companyData?.targeted_talent || ""}
                  ></textarea>
                  <label>Leadership</label>
                  <textarea
                    onChange={handleInputChange}
                    name="leadership"
                    value={companyData?.leadership || ""}
                  ></textarea>
                  <label>Recruiters</label>
                  <textarea
                    onChange={handleInputChange}
                    name="recruiters"
                    value={companyData?.recruiters || ""}
                  ></textarea>
                  <label>Clients</label>
                  <textarea
                    onChange={handleInputChange}
                    name="clients"
                    value={companyData?.clients || ""}
                  ></textarea>
                  <label>Offer Drops</label>
                  <textarea
                    onChange={handleInputChange}
                    name="offer_drops"
                    value={companyData?.offer_drops || ""}
                  ></textarea>
                  <div className="company-detail-below-secondContainer-div-div-buttons">
                    <button type="submit" onClick={handleSubmit}>
                      Submit
                    </button>
                    <button>Reset</button>
                  </div>
                </div>
              </div>
            ) : currentListItem === "Analysis" ? (
              <div className="company-detail-below-secondContainer-div">
                <div className="company-detail-below-secondContainer-div-div">
                  <label>What is Working Well for the Organization</label>
                  <textarea
                    onChange={handleInputChange}
                    name="what_is_working_well_for_the_organization"
                    value={
                      companyData?.what_is_working_well_for_the_organization ||
                      ""
                    }
                  ></textarea>
                  <label>What is Not Working Well for the Organization</label>
                  <textarea
                    onChange={handleInputChange}
                    name="what_is_not_working_well_for_the_organization"
                    value={
                      companyData?.what_is_not_working_well_for_the_organization ||
                      ""
                    }
                  ></textarea>
                  <div className="company-detail-below-secondContainer-div-div-buttons">
                    <button type="submit" onClick={handleSubmit}>
                      Submit
                    </button>
                    <button>Reset</button>
                  </div>
                </div>
              </div>
            ) : currentListItem === "Alignment" ? (
              <div className="company-detail-below-secondContainer-div">
                <div className="company-detail-below-secondContainer-div-div">
                  <label>What we want to be known for</label>
                  <textarea
                    onChange={handleInputChange}
                    name="what_we_want_to_be_known_for"
                    value={companyData?.what_we_want_to_be_known_for || ""}
                  ></textarea>
                  <div className="company-detail-below-secondContainer-div-div-buttons">
                    <button type="submit" onClick={handleSubmit}>
                      Submit
                    </button>
                    <button>Reset</button>
                  </div>
                </div>
              </div>
            ) : pageName === "DESIGN" ? (
              <Design
                currentListItem={currentListItem}
                pillars={pillars}
                newPillars={newPillars}
                setPillars={setPillars}
                setNewPillars={setNewPillars}
                data={data}
              />
            ) : currentListItem === "Touch Points" ? (
              <div className="company-detail-below-secondContainer-div">
                <div className="company-detail-below-secondContainer-div-div">
                  <label>Touch Points</label>
                  <textarea
                    onChange={handleInputChange}
                    name=""
                    value=""
                  ></textarea>
                  <div className="company-detail-below-secondContainer-div-div-buttons">
                    <button type="submit" onClick={handleSubmit}>
                      Submit
                    </button>
                    <button>Reset</button>
                  </div>
                </div>
              </div>
            ) : currentListItem === "EVP Phase" ? (
              <div className="company-detail-below-secondContainer-div">
                <div className="company-detail-below-secondContainer-div-div">
                  <label>EVP Phase</label>
                  <textarea
                    onChange={handleInputChange}
                    name=""
                    value=""
                  ></textarea>
                </div>
              </div>
            ) : currentListItem === "EVP Details" ? (
              <div className="company-detail-below-secondContainer-div">
                <div className="company-detail-below-secondContainer-div-div">
                  <label>EVP Details</label>
                  <textarea
                    onChange={handleInputChange}
                    name=""
                    value=""
                  ></textarea>
                </div>
              </div>
            ) : currentListItem === "EVP Audit" ? (
              <div className="company-detail-below-secondContainer-div">
                <div className="company-detail-below-secondContainer-div-div">
                  <label>EVP Audit</label>
                  <textarea
                    onChange={handleInputChange}
                    name=""
                    value=""
                  ></textarea>
                </div>
              </div>
            ) : currentListItem === "Recommendations" ? (
              <div className="company-detail-below-secondContainer-div">
                <div className="company-detail-below-secondContainer-div-div">
                  <label>Recommendations</label>
                  <textarea
                    onChange={handleInputChange}
                    name=""
                    value=""
                  ></textarea>
                </div>
              </div>
            ) : currentListItem === "Creative" ? (
              <div className="company-detail-below-secondContainer-div">
                <div className="company-detail-below-secondContainer-div-div">
                  <label>Creative</label>
                  <textarea
                    onChange={handleInputChange}
                    name=""
                    value=""
                  ></textarea>
                </div>
              </div>
            ) : currentListItem === "Execution Plan" ? (
              <div className="company-detail-below-secondContainer-div">
                <div className="company-detail-below-secondContainer-div-div">
                  <label>Execution Plan</label>
                  <textarea
                    onChange={handleInputChange}
                    name=""
                    value=""
                  ></textarea>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="company-detail-below-thirdContainer">
            <div className="company-detail-below-thirdContainer-chatting">
              {chatbotMessages &&
                chatbotMessages.map((msg, index) => (
                  <div
                    key={index}
                    className="company-detail-below-thirdContainer-chatting-1"
                  >
                    {msg.type === "user" ? (
                      <>
                        <h3>YOU</h3>
                        <p>{msg.text}</p>
                      </>
                    ) : (
                      <>
                        <img
                          style={{ width: "40px" }}
                          src="./bot.png"
                          alt="stimulai"
                        />
                        <p>{msg.text}</p>
                      </>
                    )}
                  </div>
                ))}
            </div>
            <div className="company-detail-below-thirdContainer-inp">
              <textarea
                type="text"
                placeholder="Type your message..."
                value={chatbotText}
                onChange={handleChatbotTextChange}
              />
              <input
                type="file"
                ref={chatBotFileInputRef}
                multiple
                style={{ display: "none" }}
                onChange={handleChatbotFileChange}
              />
              <button onClick={handleChatbotSubmit}>
                <img
                  style={{ width: "50px", height: "48px" }}
                  src="./botsendbutton.png"
                  alt="SendButton"
                />
              </button>
              <svg
                onClick={handleChatbotSvgClick}
                fill="#000000"
                height="30"
                width="30"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <path d="M256,0c-54.013,0-97.955,43.943-97.955,97.955v338.981c0,41.39,33.674,75.064,75.064,75.064c41.39,0,75.064-33.674,75.064-75.064V122.511c0-28.327-23.046-51.375-51.375-51.375c-28.327,0-51.374,23.047-51.374,51.375v296.911h31.347V122.511c0-11.042,8.984-20.028,20.028-20.028s20.028,8.985,20.028,20.028v314.424c0,24.106-19.612,43.717-43.718,43.717c-24.106,0-43.717-19.612-43.717-43.717V97.955c0-36.727,29.88-66.608,66.608-66.608s66.608,29.881,66.608,66.608v321.467h31.347V97.955C353.955,43.943,310.013,0,256,0z" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetail;
