import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./EVPHandbook.css";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function EVPHandbook({ companyName, accessToken }) {
  const { data } = useSelector((store) => store.inputField);

  const [evpHandbookData, setEvpHandbookData] = useState(null);

  useEffect(() => {
    if (data) {
      setEvpHandbookData(data);
    }
  }, [data]);

  const handleEVPHandbookSubmit = async () => {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/evp-handbook/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          company_name: companyName,
          handbook_data: evpHandbookData.handbook_data,
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        alert("Data Submitted successfully!!!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="evp-handbook">
      <div className="evp-handbook-data">
        <h1>Handbook</h1>
        <textarea
          value={evpHandbookData ? evpHandbookData.handbook_data : ""}
          onChange={(e) =>
            setEvpHandbookData({
              ...evpHandbookData,
              handbook_data: e.target.value,
            })
          }
          type="text"
          placeholder="EVP Handbook"
        />
      </div>
      <div className="evp-handbook-buttons">
        <button onClick={handleEVPHandbookSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default EVPHandbook;
