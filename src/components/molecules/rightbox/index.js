import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import circle from "../../../assets/circle.svg";
import shape from "../../../assets/Shape.svg";
import "./style.css";
const RightBox = () => {
  return (
    <div className="right-box">
      <div className="first-box">
        <IoIosNotificationsOutline fontSize={20} />
        <span className="three">3</span>
      </div>
      <div className="line"></div>
      <div className="header-second-box">
        <img src={circle} alt="circle" className="circle" />
        <img src={shape} className="img" alt="shape" />
      </div>
    </div>
  );
};

export default RightBox;
