import React from "react";
import coin from "../assets/coin.png";
import "../styles/guide-popup.scss";
import howToPlay from "../assets/howToPlay.png";
import { languagesData } from "../languages/languagesData";
import { GuideTable } from "../components/guideTable";
export const GuidePopUp = (props) => {
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
    <div className="guide-popup-modal">
      <div className="modal-content">
        <div className="title-div">
          <img src={howToPlay} className="howToPlay" />
        </div>
        <div className="main-contents">
          {languagesData[
            localStorage.getItem("selectedLanguage")
          ].bulletGrp1.map((item) => (
            <p>{item.txt}</p>
          ))}
          <div className="tableOne">
            <table>
              <tr>
                <td>Score</td>
                <td>Beans</td>
              </tr>
              <tr className="txtLeft">
                <td>6-20 runs</td>
                <td>
                  250
                  <img src={coin} />
                </td>
              </tr>
              <tr className="txtLeft">
                <td>21-25 runs</td>
                <td>
                  500
                  <img src={coin} />
                </td>
              </tr>
              <tr className="txtLeft">
                <td>36-30 runs</td>
                <td>
                  1000 <img src={coin} />
                </td>
              </tr>
              <tr className="txtLeft">
                <td>31-36 runs</td>
                <td>
                  1500 <img src={coin} />
                </td>
              </tr>
            </table>
          </div>
          {languagesData[
            localStorage.getItem("selectedLanguage")
          ].bulletGrp2.map((item) => (
            <p>{item.txt}</p>
          ))}
          <GuideTable
            tableData={
              languagesData[localStorage.getItem("selectedLanguage")].table2Data
            }
            table4={false}
          />
          <div>
            <p>
              &bull;
              {
                languagesData[localStorage.getItem("selectedLanguage")]
                  .table3Title
              }
            </p>
            <GuideTable
              tableData={
                languagesData[localStorage.getItem("selectedLanguage")]
                  .table3Data
              }
              table4={false}
            />
          </div>

          <div>
            <p>
              &bull;
              {
                languagesData[localStorage.getItem("selectedLanguage")]
                  .table4Title
              }
            </p>
            <GuideTable
              tableData={
                languagesData[localStorage.getItem("selectedLanguage")]
                  .table4Data
              }
              table4={true}
            />
          </div>
        </div>
      </div>
      <div className="close-div">
        <button className="closeBtn" onClick={closePopUp}></button>
      </div>
    </div>
  );
};
