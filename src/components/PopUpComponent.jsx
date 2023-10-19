import React, { useState } from "react";
import "../styles/popup.scss";
import coin from "../assets/coin.png";
export const PopUpComponent = (props) => {
  const { closePopUp } = props;
  const tableData = [
    { runs: "20 - 22", coins: 2121 },
    { runs: "20 - 22", coins: 2121 },
    { runs: "20 - 22", coins: 2121 },
    { runs: "20 - 22", coins: 2121 },
    { runs: "20 - 22", coins: 2121 },
  ];
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }
  return (
    <div class="modal">
      <div class="modal-content">
        <table className="">
          <tr className="border-bottom">
            <th>Runs scored</th>
            <th>Rewards</th>
          </tr>

          {tableData.map((item) => (
            <tr>
              <td>{item.runs}</td>
              <td className="border-right">
                {item.coins} <img src={coin} className="coin-img" />
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="close-div">
        <button className="closeBtn" onClick={closePopUp}></button>
      </div>
    </div>
  );
};
