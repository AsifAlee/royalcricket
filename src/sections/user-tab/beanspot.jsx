import React, { useState } from "react";
import "../../styles/user-tab.scss";
import beanspotTxt from "../../assets/User-tab-assest/beanspottxt.png";
import beanspotbg from "../../assets/User-tab-assest/beanspotbg.png";
import beanspot from "../../assets/User-tab-assest/beanspot.png";
import dailyBeansSpotTitle from "../../assets/dailybeanspot.png";
export const Beanspot = () => {
  const [beanActiveTab, setBeanActiveTab] = useState({
    daily: true,
    hourly: false,
  });
  return (
    <>
      <div className="bean-tab-btns">
        <button
          className={beanActiveTab.daily ? "hourlyOff" : "hourlyOn"}
          onClick={() =>
            setBeanActiveTab({
              daily: false,
              hourly: true,
            })
          }
        ></button>
        <button
          className={beanActiveTab.hourly ? "dailyOff" : "dailyOn"}
          onClick={() =>
            setBeanActiveTab({
              daily: true,
              hourly: false,
            })
          }
        ></button>
      </div>
      {beanActiveTab.hourly ? (
        <div className="beans-spot">
          <img src={beanspotbg} className="beans-spot-img" />

          <img src={beanspotTxt} className="beans-spot-txt" />
          <img src={beanspot} className="beanspot" />
          <div className="beans-amount-bg">
            <span>1202,2525,22</span>
          </div>
          <p>
            Hourly beans pot will be rewarded to top 5 ranking on the Hourly
            Leaderboard
          </p>
        </div>
      ) : (
        <div className="beans-spot">
          <img src={beanspotbg} className="beans-spot-img" />

          <img src={dailyBeansSpotTitle} className="daily-beans-spot-txt" />
          <img src={beanspot} className="beanspot" />
          <div className="beans-amount-bg">
            <span>1202,2525,22</span>
          </div>
          <p>
            Hourly beans pot will be rewarded to top 5 ranking on the Hourly
            Leaderboard
          </p>
        </div>
      )}
    </>
  );
};
