import React, { useEffect } from "react";

import { useCheckboxSelection } from "./useCheckboxSelection";
import {
  contentTypes,
  employeeEngagementContentAssets,
} from "./embedment-constants";

function EmployeeEngagement({ onAssetsSelected }) {
  const { selectedRows, handleCheckboxChange, getSelectedContentAssets } =
    useCheckboxSelection(employeeEngagementContentAssets);

  useEffect(() => {
    onAssetsSelected(getSelectedContentAssets());
  }, [selectedRows]);

  return (
    <tbody className="evp-embedment-table-tbody">
      {contentTypes.map((type, index) => (
        <tr
          key={index}
          className={selectedRows.includes(index) ? "selected" : ""}
        >
          <td>{type}</td>
          <td>{employeeEngagementContentAssets[index]}</td>
          <td>
            <input
              type="checkbox"
              checked={selectedRows.includes(index)}
              onChange={() => handleCheckboxChange(index)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default EmployeeEngagement;
