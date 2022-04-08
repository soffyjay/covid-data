import React from "react";
import shape from "../../../assets/Shape.svg";
import "./style.css";

const FilterBox = () => {
  return (
    <div className="filter-box">
      <span>Filter Options</span>
      <span>
        <img src={shape} alt="shape" />
      </span>
    </div>
  );
};

export default FilterBox;
