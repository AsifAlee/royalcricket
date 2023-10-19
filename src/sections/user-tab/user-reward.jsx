import React, { useState } from "react";
import "../../styles/rewards.scss";
import rewardsTitle from "../../assets/rewards.png";
import Carousel, { CarouselItem } from "../../components/Carousel";
import riderEntrance from "../../assets/Rider-entrance.png";
import roomIcon from "../../assets/Room-icon.png";
import solarFlare from "../../assets/Solar-flare-entrance.png";
import { SliderComponent } from "../../components/SliderComponent";
import beans from "../../assets/rewards/beanbag.png";
import rider from "../../assets/rewards/rider.png";
import banner from "../../assets/rewards/banner.png";
import solar from "../../assets/rewards/solar.png";
import mention from "../../assets/rewards/mention.png";
import dragon from "../../assets/rewards/dragon.png";
import criketFramGold from "../../assets/rewards/cricketMasterGolden.png";
import criketWorldFrame from "../../assets/rewards/cricketWorldFrame.png";

export const UserReward = () => {
  const [activeReward, setActiveReward] = useState({
    hourly: true,
    cricketMaster: false,
    masterBlaster: false,
  });
  const hourlyData = [
    {
      imageUrl: beans,
      text: "30% of beans pot",
    },
    {
      imageUrl: beans,
      text: "15% of beans pot",
    },
    {
      imageUrl: beans,
      text: "10% of beans pot",
    },
    {
      imageUrl: beans,
      text: "5% of beans pot",
    },
  ];
  const cricketMasterData = [
    [
      {
        imageUrl: banner,
        text: "3 days banner",
      },
      {
        imageUrl: solar,
        text: "7 days solar flare entrance ticket",
      },
    ],
    [
      {
        imageUrl: mention,
        text: "Mention of winner’s webpage ",
      },
      {
        imageUrl: rider,
        text: "5 Days Rider Entrance effect ",
      },
    ],
    [
      {
        imageUrl: mention,
        text: "Mention of winner’s webpage ",
      },
      {
        imageUrl: rider,
        text: "5 Days Rider Entrance effect ",
      },
    ],
    [
      {
        imageUrl: mention,
        text: "Mention of winner’s webpage ",
      },
      {
        imageUrl: dragon,
        text: "3 Days Dragon Entrance ",
      },
    ],
  ];

  const masterBlasterData = [
    [
      {
        imageUrl: criketFramGold,
        text: "15 Days Cricket Master Profile Frame (Golden) ",
      },
      {
        imageUrl: beans,
        text: "50% of the Beans Pot",
      },
    ],
    [
      {
        imageUrl: criketFramGold,
        text: "15 * Days Cricket Master Profile Frame (Silver)  ",
      },
      {
        imageUrl: beans,
        text: "20% of the Beans Pot",
      },
    ],
    [
      {
        imageUrl: criketFramGold,
        text: "15 * Days Cricket Master Profile Frame (Bronze) ",
      },
      {
        imageUrl: beans,
        text: "10% of the Beans Pot",
      },
    ],
    [
      {
        imageUrl: criketFramGold,
        text: "10 * Days Cricket Master Profile Frame (Bronze) ",
      },
      {
        imageUrl: beans,
        text: "10% of the Beans Pot",
      },
    ],
  ];

  return (
    <div className="rewards-wrapper">
      <div className="rewards-tabs">
        <button
          onClick={() => {
            setActiveReward({
              hourly: false,
              cricketMaster: false,
              masterBlaster: true,
            });
          }}
          className={
            activeReward.masterBlaster
              ? "master-blaster-on"
              : "master-blaster-off"
          }
        ></button>
        <button
          onClick={() => {
            setActiveReward({
              hourly: true,
              cricketMaster: false,
              masterBlaster: false,
            });
          }}
          className={activeReward.hourly ? "hourly-active" : "hourly-unactive"}
        ></button>
        <button
          onClick={() => {
            setActiveReward({
              hourly: false,
              cricketMaster: true,
              masterBlaster: false,
            });
          }}
          className={
            activeReward.cricketMaster
              ? "cricket-master-on"
              : "cricket-master-off"
          }
        ></button>
      </div>
      <img src={rewardsTitle} className="rewards-title" />
      {activeReward.hourly ? (
        <SliderComponent
          data={hourlyData}
          itemsPerSlide={1}
          dataLength={hourlyData.length}
        />
      ) : (
        ""
      )}
      {activeReward.cricketMaster ? (
        <SliderComponent
          data={cricketMasterData}
          dataLength={cricketMasterData.length}
          itemsPerSlide={1}
          multiItem={true}
        />
      ) : (
        ""
      )}
      {activeReward.masterBlaster ? (
        <SliderComponent
          data={masterBlasterData}
          dataLength={masterBlasterData.length}
          itemsPerSlide={1}
          multiItem={true}
        />
      ) : (
        ""
      )}
      {/* {activeReward.hourly ? (
        <Carousel>
          {hourlyData.map((item) => (
            <CarouselItem>
              <div className="item">
                <img src={item.imageUrl} />
                <p>{item.text}</p>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      ) : (
        ""
      )} */}
      {/* {activeReward.cricketMaster ? (
        <Carousel>
          {cricketMasterData.map((item) => (
            <CarouselItem>
              <div className="cricket-master-data">
                <div className="item1">
                  <img src={item.imageUrl} />
                  <p>{item.text}</p>
                </div>
                <div className="item2">
                  <img src={item.image2Url} />
                  <p>{item.text2}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      ) : (
        ""
      )} */}
      {/* 
      {activeReward.masterBlaster ? (
        <Carousel>
          {hourlyData.map((item) => (
            <CarouselItem>
              <div className="item">
                <img src={item.imageUrl} />
                <p>{item.text}</p>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      ) : (
        ""
      )} */}
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
