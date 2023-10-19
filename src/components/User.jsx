import React, { useState } from "react";
import { RewardHistoryPopUp } from "../sections/reward-history-popup";
import { Beanspot } from "../sections/user-tab/beanspot";
import { Game } from "../sections/user-tab/game";
import { UserLeaderBoardSection } from "../sections/user-tab/user-leaderboard";
import { UserReward } from "../sections/user-tab/user-reward";
import "../styles/user-tab.scss";

export const User = () => {
  const [isRewardHistoryOpen, setIsRewardHistoryOpen] = useState(0);
  const closerewardHistoryPopUp = () => {
    setIsRewardHistoryOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div className="user-main-tab">
      <Game />
      <Beanspot />
      <UserReward />
      <UserLeaderBoardSection />
      <button
        className="reward-history-btn"
        onClick={() => setIsRewardHistoryOpen(1)}
      ></button>
      {isRewardHistoryOpen ? (
        <RewardHistoryPopUp closePopUp={closerewardHistoryPopUp} />
      ) : (
        ""
      )}
    </div>
  );
};
