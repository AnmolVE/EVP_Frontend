import React, { useEffect } from "react";

import { useCheckboxSelection } from "./useCheckboxSelection";
import {
  contentTypes,
  separationExitContentAssets,
} from "./embedment-constants";

function SeparationExit({ onAssetsSelected }) {
  const { selectedRows, handleCheckboxChange, getSelectedContentAssets } =
    useCheckboxSelection(separationExitContentAssets);

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
          <td>{separationExitContentAssets[index]}</td>
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

export default SeparationExit;
