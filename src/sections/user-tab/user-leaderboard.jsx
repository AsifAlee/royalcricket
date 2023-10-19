import React, { useState, useContext } from "react";
import "../../styles/leaderboard.scss";
import leaderBoardImg from "../../assets/leaderboardtxt.png";
import { LeaderBoardTabToday } from "../../components/leaderBoardTabToday";
import { LeaderBoardTabYest } from "../../components/leaderBoardTabYest";
import { LeaderBoardContext } from "../../App";
import { LeaderBoardOverall } from "../../components/LeaderBoardOverall";
export const UserLeaderBoardSection = () => {
  const {
    userOverallToday,
    userHourlyToday,
    userHourlyYest,
    userCricketMasterToday,
    userCricketMasterYest,
    potValues,
  } = useContext(LeaderBoardContext);
  const { hourlyPotValue, dailyPotValue, previousDayPotValue } = potValues;
  const hourlyEstimatedRewards = [
    (hourlyPotValue / 100) * 30,
    (hourlyPotValue / 100) * 15,
    (hourlyPotValue / 100) * 10,
    (hourlyPotValue / 100) * 5,
  ];
  const masterBlasterTodayRewards = [
    (dailyPotValue / 100) * 50,
    (dailyPotValue / 100) * 20,
    (dailyPotValue / 100) * 10,
    (dailyPotValue / 100) * 10,
  ];

  const masterBlasterPrevRewards = [
    (previousDayPotValue / 100) * 50,
    (previousDayPotValue / 100) * 20,
    (previousDayPotValue / 100) * 10,
    (previousDayPotValue / 100) * 10,
  ];

  const [activeTab, setActiveTab] = useState({
    hourly: true,
    cricketmaster: false,
    masterblaster: false,
  });

  const [leaderBrdInnerTab, setLeaderBoardInnerTab] = useState({
    today: true,
    yesterday: false,
  });

  return (
    <div className="leaderbrd-Div">
      <div className="leaderbrd-tab-btns">
        <button
          onClick={() => {
            setActiveTab({
              hourly: true,
              cricketmaster: false,
              masterblaster: false,
            });
          }}
          className={activeTab.hourly ? "hourly-active" : "hourly-unactive"}
        ></button>
        <button
          onClick={() => {
            setActiveTab({
              hourly: false,
              cricketmaster: true,
              masterblaster: false,
            });
          }}
          className={
            activeTab.cricketmaster ? "cricketmaster-on" : "cricketmaster-off"
          }
        ></button>
        <button
          onClick={() => {
            setActiveTab({
              hourly: false,
              cricketmaster: false,
              masterblaster: true,
            });
          }}
          className={
            activeTab.masterblaster ? "master-blaster-on" : "master-blaster-off"
          }
        ></button>
      </div>

      {/* {activeTab} */}

      {activeTab.cricketmaster ? (
        <div className="leaderboard-main-div">
          <img src={leaderBoardImg} className="leaderBoard-title" />

          <LeaderBoardOverall data={userOverallToday} />
        </div>
      ) : activeTab.hourly ? (
        <div className="leaderboard-main-div">
          <img src={leaderBoardImg} className="leaderBoard-title" />
          <div className="leaderBrd-inner-tab-btn">
            <button
              className={leaderBrdInnerTab.today ? "today" : ""}
              onClick={() => {
                setLeaderBoardInnerTab({ today: true, yesterday: false });
              }}
            ></button>
            <button
              className={leaderBrdInnerTab.yesterday ? "yesterday" : ""}
              onClick={() => {
                setLeaderBoardInnerTab({ today: false, yesterday: true });
              }}
            ></button>
          </div>
          {leaderBrdInnerTab.today ? (
            <LeaderBoardTabToday data={userHourlyToday} />
          ) : (
            <LeaderBoardTabYest data={userHourlyYest} />
          )}
        </div>
      ) : (
        <div className="leaderboard-main-div">
          <img src={leaderBoardImg} className="leaderBoard-title" />
          <div className="leaderBrd-inner-tab-btn">
            <button
              className={leaderBrdInnerTab.today ? "today" : ""}
              onClick={() => {
                setLeaderBoardInnerTab({ today: true, yesterday: false });
              }}
            ></button>
            <button
              className={leaderBrdInnerTab.yesterday ? "yesterday" : ""}
              onClick={() => {
                setLeaderBoardInnerTab({ today: false, yesterday: true });
              }}
            ></button>
          </div>
          {leaderBrdInnerTab.today ? (
            <LeaderBoardTabToday
              data={userCricketMasterToday}
              estimatedRewards={masterBlasterTodayRewards}
            />
          ) : (
            <LeaderBoardTabYest
              data={userCricketMasterYest}
              estimatedRewards={masterBlasterPrevRewards}
            />
          )}
        </div>
      )}
    </div>
  );
};
