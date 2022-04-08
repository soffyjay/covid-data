import React, { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { RiArrowRightSLine, RiArrowDropDownLine } from "react-icons/ri";
import { IoCheckboxOutline } from "react-icons/io5";
import { TiCalendarOutline } from "react-icons/ti";
import { HiOutlineClock } from "react-icons/hi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./style.css";

//this is a list of dummy data. I made this just to have a right panel. this is just design
const navbars = [
  {
    name: "Covid Cases",
    icon: FiUsers,
  },
  {
    name: "Knowledge Base",
    icon: IoCheckboxOutline,
  },

  {
    name: "Agent Inbox",
    icon: TiCalendarOutline,
  },
  {
    name: "Help Center",
    icon: HiOutlineClock,
  },
  {
    name: "Analytics",
    icon: BiMessageRoundedDots,
    child: ["Teams", "Knowledge Base", "Help Center"],
  },
];
const styles = {
  borderLeft: "2px solid #ecebf5",
  color: "#060213",
  fontWeight: "600",
};
const AsideBars = ({ onClose }) => {
  const [showItems, setShowItems] = useState(true);
  const toggleShow = () => {
    setShowItems(!showItems);
    console.log(showItems);
  };
  return (
    <div className="aside-nav-container">
      {navbars.map((nav) => (
        <div
          key={nav.name}
          className={nav.child ? "aside-nav-drop" : "aside-navs"}
        >
          <div
            className="first-list"
            onClick={nav.child ? () => toggleShow() : onClose}
          >
            <nav.icon fontSize={20} />
            <Link to="/" className="aside-nav-links">
              {nav.name}
            </Link>
          </div>
          <div className={showItems ? "ri-arrow-icon-items" : "ri-arrow-icon"}>
            {showItems && nav.child ? (
              <RiArrowDropDownLine
                fontSize={32}
                onClick={() => toggleShow()}
                cursor={"pointer"}
              />
            ) : (
              <RiArrowRightSLine
                fontSize={22}
                onClick={nav.child ? () => toggleShow() : null}
                cursor={"pointer"}
              />
            )}
          </div>
          <div className={showItems ? "nav-dropdown-container" : "hide"}>
            {nav.child?.map((nav) => (
              <Link
                to="/"
                className="nav-dropdown"
                style={nav === "Teams" ? styles : null}
              >
                {nav}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AsideBars;
