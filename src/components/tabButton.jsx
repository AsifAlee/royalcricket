import React from "react";

const TabButton = ({ isActive, onTabChange, activeText }) => {
  debugger;
  return (
    <button
      className={
        (activeText === "user" && isActive ? "activeUser" : "unActiveUser") ||
        (activeText === "talent" && isActive
          ? "activeTalent"
          : "unActiveTalent")
      }
      onClick={() => onTabChange(activeText)}
    >
      {/* {btnText} */}
    </button>
  );
};

export default TabButton;
