import React from "react";
import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";
import "../Info/Info.css";
const Info = ({ room }) => {
  return (
    <div className="InfoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close image" />
        </a>
      </div>
    </div>
  );
};

export default Info;
