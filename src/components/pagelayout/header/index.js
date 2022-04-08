import React, { useState, useEffect } from "react";
import SearchBar from "../../molecules/searchbar";
import RightBox from "../../molecules/rightbox";
import "./style.css";
import { MdMenu } from "react-icons/md";
import Aside from "../aside";

const Header = () => {
  const [showDrop, setShowDrop] = useState(false);

  const toggleMenu = () => {
    if (!showDrop) {
      setShowDrop(true);
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      setShowDrop(false);
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
    }
  };
  return (
    <header className="header">
      <div className="header-container">
        <span className="hamburger">
          <MdMenu cursor={"pointer"} onClick={() => toggleMenu()} />
        </span>

        <SearchBar
          direction={"end"}
          color={"#FAFAFC"}
          placeholder={"Search"}
          width={"441px"}
          height={"54px"}
          border={"none"}
        />
        <RightBox />
      </div>
      <div className={showDrop ? "backdrop" : "hide"}>
        <div className="backdrop-aside" onClick={() => null}>
          <Aside onClick={() => toggleMenu()} />
        </div>

        <div className="right-pane" onClick={() => toggleMenu()}></div>
      </div>
    </header>
  );
};

export default Header;
