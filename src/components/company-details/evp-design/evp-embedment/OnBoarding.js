import React, { useEffect } from "react";

import { useCheckboxSelection } from "./useCheckboxSelection";
import { contentTypes, onBoardingContentAssets } from "./embedment-constants";

function OnBoarding({ onAssetsSelected }) {
  const { selectedRows, handleCheckboxChange, getSelectedContentAssets } =
    useCheckboxSelection(onBoardingContentAssets);

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
          <td>{onBoardingContentAssets[index]}</td>
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

export default OnBoarding;
