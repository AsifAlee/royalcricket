import React, { useState } from "react";
import "../styles/rewards.scss";
import rewardsTitle from "../assets/rewards.png";
import Carousel, { CarouselItem } from "../components/Carousel";
import riderEntrance from "../assets/Rider-entrance.png";
import roomIcon from "../assets/Room-icon.png";

import solarFlare from "../assets/Solar-flare-entrance.png";
import { SliderComponent } from "../components/SliderComponent";
import beansbag from "../assets/rewards/beanbag.png";
import crickettheme from "../assets/rewards/cricket-audio.png";
import banner from "../assets/rewards/banner.png";
import mention from "../assets/rewards/mention.png";

export const RewwardSection = () => {
  const [activeReward, setActiveReward] = useState({
    hourly: true,
    overall: false,
  });

  const talentOverall = [
    [
      {
        imageUrl: beansbag,
        text: "3 days Banner  ",
      },
      {
        imageUrl: beansbag,
        text: "150,000 Beans ",
      },
      {
        imageUrl: crickettheme,
        text: "Cricket audio theme x 10 days",
      },
    ],
    [
      {
        imageUrl: mention,
        text: "Mention of winner’s web page  ",
      },
      {
        imageUrl: beansbag,
        text: "+ 50,000 Beans ",
      },
      {
        imageUrl: crickettheme,
        text: "Cricket audio theme x 7 days",
      },
    ],
    [
      {
        imageUrl: mention,
        text: "Mention of winner’s web page  ",
      },
      {
        imageUrl: beansbag,
        text: "+ 50,000 Beans ",
      },
      {
        imageUrl: crickettheme,
        text: "Cricket audio theme x 7 days",
      },
    ],
    [
      {
        imageUrl: mention,
        text: "Mention of winner’s web page ",
      },
      {
        imageUrl: beansbag,
        text: "25,000 Beans ",
      },
      {
        imageUrl: crickettheme,
        text: "Cricket audio theme x 5 days",
      },
    ],
  ];
  return (
    <div className="rewards-wrapper">
      <div className="rewards-tabs">
        <button
          onClick={() => {
            setActiveReward({ hourly: true, overall: false });
          }}
          className={activeReward.hourly ? "hourly-active" : "hourly-unactive"}
          style={{ position: "relative", left: "3vw" }}
        ></button>
        <button
          onClick={() => {
            setActiveReward({ hourly: false, overall: true });
          }}
          className={
            activeReward.overall ? "overall-active" : "overall-unactive"
          }
        ></button>
      </div>
      <img src={rewardsTitle} className="rewards-title" />
      {activeReward.overall ? (
        <SliderComponent
          data={talentOverall}
          dataLength={talentOverall.length}
          itemsPerSlide={1}
          multiItem={true}
          triItem={true}
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "38vw",
            color: "white",
            fontSize: "2.5vw",
          }}
        >
          "Top 2 Talents in hourly rewards will be displayed in the room icon."
        </div>
      )}

      {/* <Carousel>
        {rewardsData.map((item) => (
          <CarouselItem>
            <div className="item">
              <img src={item.imageUrl} />
              <p>{item.text}</p>
            </div>
          </CarouselItem>
        ))}
      </Carousel> */}
    </div>
  );
};
