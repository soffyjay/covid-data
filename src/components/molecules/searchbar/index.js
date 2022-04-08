import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./style.css";

const SearchBar = ({
  direction,
  placeholder,
  fontSize,
  color,
  border,
  width,
  height,
}) => {
  return (
    <div className="search-bar" style={{ position: "relative" }}>
      <label htmlFor="search"></label>
      <input
        type="text"
        name="text"
        alt="Ask us any question"
        style={{
          border: border,
          backgroundColor: color,
          width: width,
          height: height,
          outline: "none",
        }}
        placeholder={placeholder}
        className="search-input"
      />
      <div
        className={
          (direction = "end" ? "search-icon-end" : "search-icon-start")
        }
        style={{ position: "absolute" }}
      >
        <IoSearchOutline fontSize={22} />
      </div>
    </div>
  );
};

export default SearchBar;
