import React, { useState, useEffect } from "react";

import "./EVPPromise.css";

import { useSelector } from "react-redux";

function EVPPromise() {
  const { data } = useSelector((store) => store.inputField);

  const [evpPromiseData, setEvpPromiseData] = useState(null);

  useEffect(() => {
    if (data) {
      setEvpPromiseData(data);
    }
  }, [data]);

  return (
    <div className="evp-promise-main-container">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Themes</th>
              <th>What makes this theme distinctive</th>
              <th>What employees can expect</th>
              <th>What is expected of employees</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(evpPromiseData) &&
              evpPromiseData.map((item) => (
                <tr key={item.id}>
                  <td className="fixed-column">{item.theme}</td>
                  <td>{item.what_makes_this_theme_distinctive}</td>
                  <td>{item.what_employees_can_expect}</td>
                  <td>{item.what_is_expected_of_employees}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="evp-promise-buttons">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default EVPPromise;
