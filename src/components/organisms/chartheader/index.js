import React from "react";
import ExportButton from "../../atoms/exportbutton";
import FilterBox from "../../molecules/filterbox";
import { IoSearchOutline } from "react-icons/io5";
import "./style.css";

//this component contains the title and some dummy data. its strictly for design purposes
const ChartHeader = () => {
  return (
    <div className="chart-header">
      <h2 className="efficiency-text">Analytics</h2>
      <span className="chart-search-container-mobile-hide  right-items">
        <input type="text" className="chart-search" placeholder="Search" />
        <span className="chart-search-icon-mobile">
          <IoSearchOutline fontSize={16} />
        </span>
      </span>
      <div className="chart-items">
        <span className="chart-search-container right-items">
          <input type="text" className="chart-search" placeholder="Search" />
          <span className="chart-search-icon">
            <IoSearchOutline fontSize={16} />
          </span>
        </span>
        <div className="right-items">
          <FilterBox />
        </div>
        <span className="short-line"></span>
        <div className="right-export">
          <ExportButton />
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
