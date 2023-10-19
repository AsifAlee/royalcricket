import React from "react";
import "../styles/event-gifts.scss";
import giftTxt from "../assets/eventgiftstxt.png";
export const EventGifts = () => {
  const data = [
    { imgUrl: require("../assets/Sk-Billionaire.png") },
    { imgUrl: require("../assets/Warrior.png") },
    { imgUrl: require("../assets/Aatish-Baazi.png") },
    { imgUrl: require("../assets/Loot-Chest.png") },
  ];
  return (
    <div className="event-gifts-wrapper">
      <img src={giftTxt} className="txtImg" />
      {data.map((item) => (
        <img src={item.imgUrl} className="gift-item" />
      ))}
    </div>
  );
};
