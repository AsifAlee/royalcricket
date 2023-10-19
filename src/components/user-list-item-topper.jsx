import React from "react";
import blackbg from "../assets/black-bg.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";

import unknown_user from "../assets/unknown-user.png";
export const UserListItemTopper = ({ item, index }) => {
  return (
    <div className="user-leaderboard-topper-listitem">
      <div className="user-user-info">
        <div className="topper-images">
          <img
            src={item.portrait ? item.portrait : unknown_user}
            className="profile"
          />
          <img
            src={
              index === 1
                ? frame1
                : index === 2
                ? frame2
                : index === 3
                ? frame3
                : ""
            }
            className="rankImg"
          />
        </div>
        <span className="userName">{item.nickName}</span>
      </div>
      <span className="estTxt">Est Rewards</span>
      <span className="runsTxt">{item.userScore}</span>
    </div>
  );
};
