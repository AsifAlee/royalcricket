import React from "react";
import "../styles/leaderboard.scss";
import unknown_user from "../assets/unknown-user.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import gem from "../assets/gems.png";
export const TalentLdrBrdLstItem = ({ item, index }) => {
  return (
    <div className="talent-leaderboard-topper-listitem">
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
      <div className="leader-amount">
        <span className="amount">{item.userScore}</span>
        <img src={gem} className="gem" />
      </div>
    </div>
  );
};
