import React from "react";
import "./InfoBar.css";
import onlineIcon from "../../assets/icons/onlineIcon.png";
import closeIcon from "../../assets/icons/closeIcon.png";

interface indexProps {
  room: string | string[] | null;
}

export const InfoBar: React.FC<indexProps> = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" alt="" src={onlineIcon} />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="" />
        </a>
      </div>
    </div>
  );
};
