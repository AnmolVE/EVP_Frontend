import React, { useEffect } from "react";

import { useCheckboxSelection } from "./useCheckboxSelection";
import { contentTypes, preHiringContentAssets } from "./embedment-constants";

function PreHiring({ onAssetsSelected }) {
  const { selectedRows, handleCheckboxChange, getSelectedContentAssets } =
    useCheckboxSelection(preHiringContentAssets);

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
          <td>{preHiringContentAssets[index]}</td>
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

export default PreHiring;
