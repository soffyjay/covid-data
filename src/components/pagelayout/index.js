import React from "react";
import Aside from "./aside";
import Main from "./main";
import "./style.css";

const PageLayout = () => {
  return (
    <div className="layout">
      <div className="layout-container">
        <div className="aside">
          <Aside />
        </div>
        <div className="main">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
