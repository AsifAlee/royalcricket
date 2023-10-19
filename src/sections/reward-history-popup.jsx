import React from "react";
import "../styles/reward-history-popup.scss";
import coin from "../assets/coin.png";
import gamebg from "../assets/game-bg.png";
export const RewardHistoryPopUp = (props) => {
  const { closePopUp } = props;
  const tableData = [
    { level: 1, time: "2022-09-27 17:15" },
    { level: 2, time: "2022-09-27 17:16" },
    { level: 3, time: "2022-09-27 17:17" },
    { level: 4, time: "2022-09-27 17:18" },
  ];
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }

  return (
    <div class="reward-history-modal">
      <div class="modal-content">
        <button className="reward-hist-btn"></button>
        <table className="">
          <tr className="border-bottom">
            <th>Time</th>
            <th>Rewards won</th>
          </tr>

          {tableData.map((item, index) => (
            <tr>
              <td
                className={`${
                  index !== tableData.length - 1 ? "border-bottom" : ""
                } `}
                style={{ fontSize: "2vw" }}
              >
                {item.time}
              </td>
              <td
                className={`border-right ${
                  index !== tableData.length - 1 ? "border-bottom" : ""
                } `}
                style={{ paddingTop: "1vw", paddingBottom: "1vw" }}
              >
                <div>
                  <img src={gamebg} className="gamebg" />
                  <div
                    style={
                      {
                        // marginTop: "-1.5vw",
                      }
                    }
                  >
                    <span style={{ fontSize: "2vw" }}>{1400}</span>
                    <img src={coin} className="coin-img" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </table>
        <div className="bottom-bg"></div>
        <div className="more-btn"></div>
      </div>
      <div className="close-div">
        <button className="closeBtn" onClick={closePopUp}></button>
      </div>
    </div>
  );
};
