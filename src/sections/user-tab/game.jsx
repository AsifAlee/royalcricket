import React, { useEffect, useRef, useState } from "react";
import "../../styles/user-tab.scss";
import gameBallMachine from "../../assets/gumball-machine.png";
import gameBg from "../../assets/Gumball-machine-bg.png";
import gameBg2 from "../../assets/gameBg.png";
import gameStop from "../../assets/main.png";
import play from "../../assets/play.png";
import { Ball } from "../../components/Ball";
import machineGif from "../../assets/main.gif";
import one from "../../assets/w1.gif";
import two from "../../assets/w2.gif";
import three from "../../assets/w3.gif";
import four from "../../assets/w4.gif";
import five from "../../assets/w5.gif";
import six from "../../assets/w6.gif";
import { PopUpComponent } from "../../components/PopUpComponent";
import { MasterBlasterPopUp } from "../master-blaster-popup";

export const Game = () => {
  let balls = [3, 5, 1, 2, 6, 4];
  const [playinGifIndex, setPlayingGifIndex] = useState(0);
  const [currentGif, setCurrentGif] = useState("");
  const [isPlying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [isOpen, setIsOpen] = useState(0);
  const [totalRun, setTotalRun] = useState(0);
  const [myChances, setMyChances] = useState(0);
  const [ballsList, setBallsList] = useState([]);
  const [inningsOver, setInningsOver] = useState(0);
  let uid;
  let u_token;
  try {
    // uid=502184264 ;
    // get user info
    window.phone.getUserInfo(function (userInfo) {
      console.log("fdjkfjdsklf", userInfo);
      // console.log(userInfo.userId)
      uid = userInfo.userId > 0 ? userInfo.userId : 0;
      // userId = userInfo.userId > 0 ? userInfo.userId : 0;
      u_token = userInfo.token != "" ? userInfo.token : null;
      // window.pageInfo(local);
      // showToast(userId);
      // alert(userId + ' UID: ' + uid);
      // window.queryData();
    });
  } catch (_error) {
    console.error("Can't get userInfo by window.phone.getUserInfo");
    // pageInfo(local);
    // showToast("error ");
  }

  const closeGiftPopUp = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };
  const closeMasterBlasterPopUp = () => {
    setInningsOver(false);
  };

  const gameBalls = [
    {
      num: "1",
      active: true,
    },
    {
      num: "20",
      active: false,
    },
    {
      num: "50",
      active: false,
    },
  ];
  const [firstRun, setFirstRun] = useState();
  const [secondRun, setSecondRun] = useState();
  const [thirdRun, setThirdRun] = useState();
  const [fourthRun, setFourthRun] = useState();
  const [fifthRun, setFifthRun] = useState();
  const [sixthRun, setSixthRun] = useState();
  const [isActiveBall, setActiveBall] = useState(gameBalls);

  useEffect(() => {
    ballsList.length > 0 && startInnings();
  }, [ballsList, playinGifIndex]);

  const playGame = () => {
    setScore(0);
    setIsPlaying(true);
    setCurrentGif(machineGif);
    setPlayingGifIndex(0);
    //calling info api
    fetch(
      `${process.env.REACT_APP_BASE_URL}/api/activity/adda/getUserEventInfo?userId=502184262`
    )
      .then((res) => res.json())
      .then((res) => {
        setTotalRun(res.data.myTotalRun);
        setMyChances(res.data.userDrawPoint / 25000);
        // setTimeout(() => {
        //   setBallsList([...balls]);
        // }, 5000);
      });

    fetch(
      `${process.env.REACT_APP_BASE_URL}/api/activity/adda/userDrawGame/?playCount=${isActiveBall}}`,
      {
        method: "POST",
        headers: {
          token: u_token,
          userId: uid,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        alert(res.data.firstBallList);
        setBallsList(res.data.firstBallList);
      });
  };

  const startInnings = () => {
    switch (ballsList[playinGifIndex]) {
      case 1:
        setCurrentGif(one);
        setScore((score) => score + 1);
        setTimeout(() => {
          setPlayingGifIndex((playinGifIndex) => playinGifIndex + 1);
        }, 3000);
        setFirstRun(ballsList[playinGifIndex]);
        break;
      case 2:
        setCurrentGif(two);
        setScore((score) => score + 2);
        setTimeout(() => {
          setPlayingGifIndex((playinGifIndex) => playinGifIndex + 1);
        }, 3000);
        setSecondRun(ballsList[playinGifIndex]);
        break;
      case 3:
        setCurrentGif(three);
        setScore((score) => score + 3);
        setTimeout(() => {
          setPlayingGifIndex((playinGifIndex) => playinGifIndex + 1);
        }, 3000);
        setThirdRun(ballsList[playinGifIndex]);
        break;
      case 4:
        setCurrentGif(four);
        setScore((score) => score + 4);
        setTimeout(() => {
          setPlayingGifIndex((playinGifIndex) => playinGifIndex + 1);
        }, 3000);
        setFourthRun(ballsList[playinGifIndex]);
        break;
      case 5:
        setCurrentGif(five);
        setScore((score) => score + 5);
        setTimeout(() => {
          setPlayingGifIndex((playinGifIndex) => playinGifIndex + 1);
        }, 3000);
        setFifthRun(ballsList[playinGifIndex]);
        break;
      case 6:
        setCurrentGif(six);
        setScore((score) => score + 6);
        setTimeout(() => {
          setPlayingGifIndex((playinGifIndex) => playinGifIndex + 1);
        }, 3000);
        setSixthRun(ballsList[playinGifIndex]);

        break;

      default:
        setCurrentGif(gameStop);
        setInningsOver(true);
        break;
    }
  };

  const changeActiveBall = (index) => {
    const newBalls = isActiveBall.map((ball) => {
      if (ball.num === index) {
        return {
          ...ball,
          active: true,
        };
      } else {
        return {
          ...ball,
          active: false,
        };
      }
    });
    setActiveBall([...newBalls]);
  };
  return (
    <div className="game">
      <button className="gift-btn" onClick={() => setIsOpen(true)}></button>
      <div className="runs-btns">
        <button className="currentRuns">Current Runs:{score}</button>
        <button className="totalRuns">Total runs scored :{totalRun}</button>
      </div>

      <div className="main-game">
        <div className="runsDiv">
          <span className="oneRuns">{firstRun}</span>
          <span className="twoRuns">{secondRun}</span>
          <span className="threeRuns">{thirdRun}</span>
          <span className="fourRuns">{fourthRun}</span>
          <span className="fiveRuns">{fifthRun}</span>
          <span className="sixRuns">{sixthRun}</span>
        </div>
        <img src={gameBg2} className="bg-img" />
        <img src={play} className="playBtn" onClick={playGame} />
        <span className="score">{score}</span>

        {!isPlying ? (
          <div className="game-stop">
            <img src={gameStop} className="game-stop-img" />
          </div>
        ) : (
          <div className="game-play">
            <img src={currentGif} className="game-playing-img" />
          </div>
        )}
      </div>
      <div className="game-chances">
        <div>
          {isActiveBall.map((item, index) => (
            <Ball
              isActiveBall={item.active}
              changeActiveBall={changeActiveBall}
              number={item.num}
              index={index}
            />
          ))}
        </div>

        <button className="my-chances">
          <span
            style={{ marginRight: "2vw", color: "white", fontSize: "2.4vw" }}
          >
            My Chances :{myChances}
          </span>
        </button>
      </div>
      {isOpen ? <PopUpComponent closePopUp={closeGiftPopUp} /> : ""}
      {inningsOver ? (
        <MasterBlasterPopUp
          closePopUp={closeMasterBlasterPopUp}
          totalRun={score}
        />
      ) : (
        ""
      )}
    </div>
  );
};
