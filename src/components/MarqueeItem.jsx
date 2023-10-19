import React, { useState } from "react";
import "../styles/user-tab.scss";
import coin from "../assets/coin.png";
import unknow_user from "../assets/unknown-user.png";
export const MarqueeItem = ({ data }) => {
  const { userScore } = data;
  console.log("user", userScore);

  return (
    <div
      className="marquee-item"
      id="m"
      onClick={() => {
        document.getElementById("m").stop();
      }}
    >
      <img
        src={data.portrait ? data.portrait : unknow_user}
        className="user-img"
      />
      <p>
        ({data.nickName}) won this{" "}
        {userScore === 1
          ? 250
          : userScore === 2
          ? 500
          : userScore === 3
          ? 1000
          : userScore === 4
          ? 1500
          : 0}
        <img src={coin} className="marq-coin" /> for this marvellous performance
      </p>
    </div>
  );
};
