import React from "react";
import AsideBars from "../../molecules/asidebars";
import LeftBox from "../../molecules/leftbox";
import "./style.css";

const Aside = ({ onClick }) => {
  return (
    <div className="left-pane">
      <LeftBox />
      <AsideBars onClose={onClick} />
    </div>
  );
};

export default Aside;
