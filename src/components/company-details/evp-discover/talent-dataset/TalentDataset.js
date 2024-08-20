import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import "./TalentDataset.css";

const dummyData = [
  {
    id: 1,
    area: "Technology",
    role: "Software Developer",
    location: "India",
    seniority: "Entry to Mid",
  },
  {
    id: 2,
    area: "Technology",
    role: "Prompt Engineer",
    location: "USA",
    seniority: "Fresher",
  },
  {
    id: 3,
    area: "CAM",
    role: "Sales",
    location: "India",
    seniority: "Experienced",
  },
  {
    id: 4,
    area: "HR Department",
    role: "HR",
    location: "India",
    seniority: "Mid",
  },
  {
    id: 5,
    area: "Technology",
    role: "Software Developer",
    location: "India",
    seniority: "Entry to Mid",
  },
  {
    id: 6,
    area: "Technology",
    role: "Prompt Engineer",
    location: "USA",
    seniority: "Fresher",
  },
  {
    id: 7,
    area: "CAM",
    role: "Sales",
    location: "India",
    seniority: "Experienced",
  },
  {
    id: 8,
    area: "HR Department",
    role: "HR",
    location: "India",
    seniority: "Mid",
  },
  {
    id: 9,
    area: "Technology",
    role: "Software Developer",
    location: "India",
    seniority: "Entry to Mid",
  },
  {
    id: 10,
    area: "Technology",
    role: "Prompt Engineer",
    location: "USA",
    seniority: "Fresher",
  },
  {
    id: 11,
    area: "Technology",
    role: "Software Developer",
    location: "India",
    seniority: "Entry to Mid",
  },
  {
    id: 12,
    area: "Technology",
    role: "Prompt Engineer",
    location: "USA",
    seniority: "Fresher",
  },
  {
    id: 13,
    area: "CAM",
    role: "Sales",
    location: "India",
    seniority: "Experienced",
  },
  {
    id: 14,
    area: "HR Department",
    role: "HR",
    location: "India",
    seniority: "Mid",
  },
];

function TalentDataset() {
  const { data } = useSelector((store) => store.inputField);

  const [talentDatasetData, setTalentDatasetData] = useState(null);

  useEffect(() => {
    if (data) {
      setTalentDatasetData(data);
    }
  }, [data]);

  return (
    <div className="talent-dataset-main-container">
      <div className="talent-dataset-top">
        <p className="talent-dataset-para-heading">Talent Dataset</p>
        <p className="talent-dataset-para">
          Validate current or frequently hired-for job opportunities before it
          goes to Develop section.
        </p>
      </div>
      <div className="talent-dataset-table-container">
        <table className="talent-dataset-table">
          <thead>
            <tr className="talent-dataset-table-thead-tr">
              <th className="talent-dataset-table-thead-th">S.No</th>
              <th className="talent-dataset-table-thead-th">Area</th>
              <th className="talent-dataset-table-thead-th">Role</th>
              <th className="talent-dataset-table-thead-th">Location</th>
              <th className="talent-dataset-table-thead-th">Seniority</th>
            </tr>
          </thead>
          <tbody>
            {talentDatasetData &&
              talentDatasetData.map((data, index) => (
                <tr key={data.id}>
                  <td className="talent-dataset-table-tbody-td talent-dataset-fixed-column">{`${
                    index + 1
                  }`}</td>
                  <td className="talent-dataset-table-tbody-td">{data.area}</td>
                  <td className="talent-dataset-table-tbody-td">{data.role}</td>
                  <td className="talent-dataset-table-tbody-td">
                    {data.location}
                  </td>
                  <td className="talent-dataset-table-tbody-td">
                    {data.seniority}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="talent-dataset-buttons">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default TalentDataset;
