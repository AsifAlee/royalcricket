import React from "react";
import "../styles/master-blaster-popup.scss";
import shotbg from "../assets/Popup/shotbg.png";
import coin from "../assets/coin.png";
export const MasterBlasterPopUp = (props) => {
  const { closePopUp } = props;

  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }

  return (
    <div className="master-blastermodal">
      <div className="modal-content">
        <div style={{ position: "relative", bottom: "10vw" }}>
          <img src={shotbg} />
          <p>
            Whoa!You have scored a blistering {props.totalRun} runs and won
            33000{" "}
            <span>
              <img src={coin} />
            </span>
            .keep playing to score maximum runs and be our MASTER BLASTER
          </p>
        </div>
      </div>
      <div className="close-div">
        <button className="closeBtn" onClick={closePopUp}></button>
      </div>
    </div>
  );
};
