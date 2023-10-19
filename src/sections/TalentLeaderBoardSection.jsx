import React, { useContext, useEffect, useState } from "react";
import "../styles/leaderboard.scss";
import leaderBoardImg from "../assets/leaderboardtxt.png";
import { LeaderBoardTabToday } from "../components/leaderBoardTabToday";
import { LeaderBoardTabYest } from "../components/leaderBoardTabYest";
import { LeaderBoardContext } from "../App";
import { LeaderBoardOverall } from "../components/LeaderBoardOverall";
import { TalentLeaderBoardOverall } from "../components/TalentLeaderBoardOverall";
export const TalentLeaderBoardSection = () => {
  const { talentOverallToday } = useContext(LeaderBoardContext);
  const { talentHourlyYest } = useContext(LeaderBoardContext);
  const { talentHourlyToday } = useContext(LeaderBoardContext);
  const [activeLeaderBoard, setActiveLeaderBoard] = useState({
    hourly: true,
    overall: false,
  });
  const [leaderBrdInnerTabOverall, setLeaderBoardInnerTabOverall] = useState({
    today: true,
    yesterday: false,
  });
  const [leaderBoardInnerTabHourly, setLeaderBoardInnerTabHourly] = useState({
    today: true,
    yesterday: false,
  });

  return (
    <div className="leaderbrd-Div">
      <div className="leaderbrd-tab-btns">
        <button
          onClick={() => {
            setActiveLeaderBoard({ hourly: true, overall: false });
          }}
          className={
            activeLeaderBoard.hourly ? "hourly-active" : "hourly-unactive"
          }
          style={{ position: "relative", left: "3vw" }}
        ></button>
        <button
          onClick={() => {
            setActiveLeaderBoard({ hourly: false, overall: true });
          }}
          className={
            activeLeaderBoard.overall ? "overall-active" : "overall-unactive"
          }
        ></button>
      </div>

      {activeLeaderBoard.overall ? (
        <div className="leaderboard-main-div">
          <img src={leaderBoardImg} className="leaderBoard-title" />
          <TalentLeaderBoardOverall data={talentOverallToday} />
        </div>
      ) : (
        <div className="leaderboard-main-div">
          <img src={leaderBoardImg} className="leaderBoard-title" />
          <div className="leaderBrd-inner-tab-btn">
            <button
              className={leaderBoardInnerTabHourly.today ? "today" : ""}
              onClick={() => {
                setLeaderBoardInnerTabHourly({ today: true, yesterday: false });
              }}
            ></button>
            <button
              className={leaderBoardInnerTabHourly.yesterday ? "yesterday" : ""}
              onClick={() => {
                setLeaderBoardInnerTabHourly({ today: false, yesterday: true });
              }}
            ></button>
          </div>
          {leaderBoardInnerTabHourly.today ? (
            <LeaderBoardTabToday data={talentHourlyToday} />
          ) : (
            <LeaderBoardTabYest data={talentHourlyYest} />
          )}
        </div>
      )}
    </div>
  );
};
