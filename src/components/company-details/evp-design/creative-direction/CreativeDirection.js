import React, { useState, useEffect } from "react";
import "./CreativeDirection.css";
import { useSelector } from "react-redux";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

function CreativeDirection({ companyName, accessToken }) {
  const { data } = useSelector((store) => store.inputField);
  const [creativeDirectionData, setCreativeDirectionData] = useState({
    creative_direction_data: "",
  });

  useEffect(() => {
    if (data) {
      setCreativeDirectionData(data);
    }
  }, [data]);

  const handleCreativeDirectionChange = (e) => {
    setCreativeDirectionData({
      ...creativeDirectionData,
      creative_direction_data: e.target.value,
    });
  };

  const handleCreativeDirectionSubmit = async () => {
    if (creativeDirectionData) {
      const payload = {
        company_name: companyName,
        creative_direction_data: creativeDirectionData.creative_direction_data,
      };
      try {
        const response = await fetch(
          `${REACT_APP_BASE_URL}/creative-direction/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(payload),
          }
        );
        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          setCreativeDirectionData(responseData);
          alert("Data submitted successfully!!!");
        } else {
          alert("Error submitting data");
        }
      } catch (error) {
        console.error("Error submitting data", error);
      }
    }
  };

  return (
    <div className="creative-direction">
      <div className="creative-direction-data">
        <h1>Creative Direction</h1>
        <textarea
          onChange={handleCreativeDirectionChange}
          value={creativeDirectionData.creative_direction_data}
          type="text"
          placeholder="Creative Direction"
        ></textarea>
      </div>
      <div className="creative-direction-buttons">
        <button onClick={handleCreativeDirectionSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default CreativeDirection;
