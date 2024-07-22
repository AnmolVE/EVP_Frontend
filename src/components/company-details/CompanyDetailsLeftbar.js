import React, { useState, useEffect } from "react";
import "./CompanyDetailLeftbar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataForSelectedItem } from "../../features/inputfields/inputfieldsSlice";

function CompanyDetailsLeftbar({ listItems, handleListItemClick }) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((store) => store.inputField);

  // console.log("data: ", data);

  // useEffect(() => {
  //   // Set the initial selected item when the component mounts
  //   handleListItemClick(listItems[selectedItemIndex].name);
  //   dispatch(fetchDataForSelectedItem(listItems[selectedItemIndex].name));
  // }, [listItems, selectedItemIndex]);

  const onItemClick = (index) => {
    const selectedItem = listItems[index];
    handleListItemClick(selectedItem.name);
    setSelectedItemIndex(index); // Use functional update
    dispatch(fetchDataForSelectedItem(selectedItem.name));
  };

  return (
    <div className="company-detail-below-firstContainer">
      <ul>
        {listItems.map((listItem, index) => (
          <li
            key={index}
            onClick={() => onItemClick(index)}
            className={index === selectedItemIndex ? "active" : ""}
          >
            {listItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyDetailsLeftbar;
