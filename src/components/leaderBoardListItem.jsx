import React from "react";
import blackimg from "../assets/black-bg.png";
import gem from "../assets/gems.png";
import goldframe from "../assets/User-tab-assest/Gold-frame.png";
import silverFram from "../assets/User-tab-assest/Silver-frame.png";
import unknown_user from "../assets/unknown-user.png";
import "../styles/leaderboard.scss";
export const LeaderBoardListItem = ({ item, index, hideGem, rewardValue }) => {
  return (
    <div className="leader-board-list-item">
      <div className="leader-info">
        <span className="indexTxt">{index + "."}</span>
        <div style={{ position: "relative" }}>
          <img
            src={item.portrait ? item.portrait : unknown_user}
            className="profile"
          />
          {/* <img src={goldframe} className="rankImg" /> */}
        </div>

        <span className="nameTxt">{item.nickName}</span>
      </div>
      <div className="leader-amount">
        {rewardValue ? <span>{rewardValue}</span> : ""}
        <span className="amount">{item.userScore}</span> : ""
        {hideGem === true ? "" : <img src={gem} className="gem" />}
      </div>
    </div>
  );
};
