import React from "react";
import blackbg from "../assets/black-bg.png";

export const UserLeaderboardListItem = () => {
  return (
    <div className="user-leaderbrd-listitem">
      <div className="user-user-info">
        <span className="indexNo">1</span>
        <img src={blackbg} className="profile" />
        <span>username</span>
      </div>
      <span className="estTxt">Est Rewards</span>
      <span className="runsTxt">123515</span>
    </div>
  );
};
