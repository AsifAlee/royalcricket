import { useState, createContext, useContext, useEffect } from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { MarqueeComponent } from "./components/Marquee";
import { MarqueeItem } from "./components/MarqueeItem";
import { Talent } from "./components/Talent";
import { User } from "./components/User";
import { GuidePopUp } from "./sections/guide-pop-up";
export const LeaderBoardContext = createContext();
function App() {
  const [tabButtonActive, setTabButtonActive] = useState({
    user: true,
    talent: false,
  });
  const [talentOverallToday, setTalentOverallToday] = useState([]);
  const [talentOverallYest, setTalentOverallYest] = useState([]);
  const [talentHourlyToday, setTalentHourlyToday] = useState([]);
  const [talentHourlyYest, setTalentHourlyYest] = useState([]);
  const [userOverallToday, setUserOverallToday] = useState([]);
  const [userOverallYest, setUserOverallYest] = useState([]);
  const [userHourlyToday, setUserHourlyToday] = useState([]);
  const [userHourlyYest, setUserHourlyYest] = useState([]);
  const [userCricketMasterToday, setCricketMasterToday] = useState([]);
  const [userCricketMasterYest, setUserCricketMasterYest] = useState([]);
  const [marqueeData, setMarqueeData] = useState([]);
  const [rewardHistory, setRewardHistory] = useState([]);
  const [potValues, setPotValues] = useState({
    dailyPotValue: 0,
    previousDayPotValue: 0,
    hourlyPotValue: 0,
  });
  const [isOpen, setIsOpen] = useState(0);
  localStorage.setItem("selectedLanguage", "English");
  const closeGiftPopUp = () => {
    document.body.style.overflow = "auto";
    setIsOpen(false);
  };

  //talent data
  useEffect(() => {
    // talent overall today
    fetch(
      `${process.env.REACT_APP_RANKING_API}/?eventDesc=${process.env.REACT_APP_EVENT}&pageIndex=${process.env.REACT_APP_PAGE_INDEX}&pageCount=${process.env.REACT_APP_PAGE_COUNT}&rankIndex=2&rankType=1&isBefore=0`
    )
      .then((res) => res.json())
      .then((data) => {
        setTalentOverallToday(data);
      });

    //talent overall yest
    fetch(
      `${process.env.REACT_APP_RANKING_API}/?eventDesc=${process.env.REACT_APP_EVENT}&pageIndex=${process.env.REACT_APP_PAGE_INDEX}&pageCount=${process.env.REACT_APP_PAGE_COUNT}&rankIndex=2&rankType=1&isBefore=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setTalentOverallYest(data);
      });

    //talent hourly today
    fetch(
      `${process.env.REACT_APP_RANKING_API}/?eventDesc=${process.env.REACT_APP_EVENT}&pageIndex=${process.env.REACT_APP_PAGE_INDEX}&pageCount=${process.env.REACT_APP_PAGE_COUNT}&rankIndex=2&rankType=3&isBefore=0`
    )
      .then((res) => res.json())
      .then((data) => {
        setTalentHourlyToday(data);
      });

    //talent hourly yest

    fetch(
      `${process.env.REACT_APP_RANKING_API}/?eventDesc=${process.env.REACT_APP_EVENT}&pageIndex=${process.env.REACT_APP_PAGE_INDEX}&pageCount=${process.env.REACT_APP_PAGE_COUNT}&rankIndex=2&rankType=3&isBefore=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setTalentHourlyYest(data);
      });
  }, []);

  // api call user tab data
  useEffect(() => {
    //user overall today
    fetch(
      `${process.env.REACT_APP_RANKING_API}/?eventDesc=${process.env.REACT_APP_EVENT}&pageIndex=${process.env.REACT_APP_PAGE_INDEX}&pageCount=${process.env.REACT_APP_PAGE_COUNT}&rankIndex=1&rankType=1&isBefore=0`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserOverallToday(data);
      });

    //user overall yest
    fetch(
      `${process.env.REACT_APP_RANKING_API}/?eventDesc=${process.env.REACT_APP_EVENT}&pageIndex=${process.env.REACT_APP_PAGE_INDEX}&pageCount=${process.env.REACT_APP_PAGE_COUNT}&rankIndex=1&rankType=1&isBefore=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserOverallYest(data);
      });

    //user hourly today
    fetch(
      `${process.env.REACT_APP_RANKING_API}/?eventDesc=${process.env.REACT_APP_EVENT}&pageIndex=${process.env.REACT_APP_PAGE_INDEX}&pageCount=${process.env.REACT_APP_PAGE_COUNT}&rankIndex=1&rankType=3&isBefore=0`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserHourlyToday(data);
      });

    //user hourly yes
    fetch(
      `${process.env.REACT_APP_RANKING_API}/?eventDesc=${process.env.REACT_APP_EVENT}&pageIndex=${process.env.REACT_APP_PAGE_INDEX}&pageCount=${process.env.REACT_APP_PAGE_COUNT}&rankIndex=1&rankType=3&isBefore=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserHourlyYest(data);
      });

    //user cricket master today
    fetch(
      `${process.env.REACT_APP_RANKING_API}/?eventDesc=${process.env.REACT_APP_EVENT}&pageIndex=${process.env.REACT_APP_PAGE_INDEX}&pageCount=${process.env.REACT_APP_PAGE_COUNT}&rankIndex=2&rankType=3&isBefore=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setCricketMasterToday(data);
      });

    //user cricket master yesterday
    fetch(
      `${process.env.REACT_APP_RANKING_API}/?eventDesc=${process.env.REACT_APP_EVENT}&pageIndex=${process.env.REACT_APP_PAGE_INDEX}&pageCount=${process.env.REACT_APP_PAGE_COUNT}&rankIndex=3&rankType=4&isBefore=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserCricketMasterYest(data);
      });
  }, []);

  //marquee api call
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_RANKING_API}/?eventDesc=${process.env.REACT_APP_EVENT}&pageIndex=${process.env.REACT_APP_PAGE_INDEX}&pageCount=${process.env.REACT_APP_PAGE_COUNT}&rankIndex=4&rankType=2&isBefore=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setMarqueeData(data);
      });
  }, []);

  //info api call
  useEffect(() => {
    fetch(`${process.env.REACT_APP_INFO_API}/?userId=502184262`)
      .then((res) => res.json())
      .then((data) => {
        setPotValues({
          dailyPotValue: data.dailyPotValue,
          previousDayPotValue: data.previousDayPotValue,
          hourlyPotValue: data.hourlyPotValue,
        });
      });
  }, []);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/api/activity/adda/getUserRewardHis/?userId=502184262&pageIndex=1&pageCount=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setRewardHistory(data);
      });
  }, []);
  return (
    <LeaderBoardContext.Provider
      value={{
        talentOverallToday: talentOverallToday,
        talentOverallYest: talentOverallYest,
        talentHourlyToday: talentHourlyToday,
        talentHourlyYest: talentHourlyYest,
        userOverallToday: userOverallToday,
        userOverallYest: userOverallYest,
        userHourlyToday: userHourlyToday,
        userHourlyYest: userHourlyYest,
        userCricketMasterToday: userCricketMasterToday,
        userCricketMasterYest: userCricketMasterYest,
        marqueeData,
        potValues: potValues,
      }}
    >
      <div className="App">
        <Header />
        <button className="guideBtn" onClick={() => setIsOpen(true)}></button>
        {tabButtonActive.user && (
          <div className="marquee-wrap">
            <MarqueeComponent>
              <div style={{ display: "flex", gap: 8 }}>
                {marqueeData.length > 0 &&
                  marqueeData.map((marqueeItem) => (
                    <MarqueeItem data={marqueeItem} />
                  ))}
              </div>
            </MarqueeComponent>
          </div>
        )}

        <div
          className={`tabBtnDiv ${
            tabButtonActive.talent ? "borderTopBottom" : ""
          }`}
        >
          <button
            onClick={() => {
              setTabButtonActive({
                user: true,
                talent: false,
              });
            }}
            className={tabButtonActive.user ? "activeUser" : "unActiveUser"}
          ></button>
          <button
            onClick={() => {
              setTabButtonActive({
                user: false,
                talent: true,
              });
            }}
            className={
              tabButtonActive.talent ? "activeTalent" : "unActiveTalent"
            }
          ></button>
        </div>
        <div className="mainTabs">
          {tabButtonActive.user ? <User /> : <Talent />}
        </div>
        {isOpen ? <GuidePopUp closePopUp={closeGiftPopUp} /> : ""}
        <div>
          <p className="copyrightText">All rights reserved by StreamKar</p>
        </div>
      </div>
    </LeaderBoardContext.Provider>
  );
}

export default App;
