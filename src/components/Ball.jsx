import React from "react";
import "../styles/user-tab.scss";

export const Ball = ({ isActiveBall, changeActiveBall, number, index }) => {
  // debugger;
  return (
    <button
      style={{ color: "white", fontSize: "3vw" }}
      className={isActiveBall ? "active-ball" : "un-active-ball"}
      onClick={() => changeActiveBall(number)}
    >
      {number}
    </button>
  );
};
