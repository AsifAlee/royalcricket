import React from "react";
import { useState } from "react";
import "../styles/slider.scss";
import rewardBase from "../assets/rewards/Rewards-base.png";
import beans from "../assets/rewards/beanbag.png";
import { useEffect } from "react";
export const SliderComponent = ({
  data,
  dataLength,
  itemsPerSlide = 1,
  multiItem,
  triItem,
}) => {
  const [positionText, setPositionText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex === 0) {
      setPositionText();
    }
  }, currentIndex);
  const nextSlide = () => {
    if (currentIndex >= dataLength - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const prevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(dataLength - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  return (
    <div className="slider-container">
      {currentIndex === 0 ? (
        <div className="rankDiv">
          <span>1</span>
          <sup>{`st`}</sup>
        </div>
      ) : currentIndex === 1 ? (
        <div className="rankDiv">
          <span>2</span>
          <sup>{`nd`}</sup>
        </div>
      ) : currentIndex === 2 ? (
        <div className="rankDiv">
          <span>3</span>
          <sup>{`rd`}</sup>
        </div>
      ) : (
        <div className="rankDiv">
          <span>4</span>
          <sup>{`th`}</sup>
        </div>
      )}
      <div className="slider-content">
        {triItem ? (
          <>
            {data
              .slice(currentIndex, currentIndex + itemsPerSlide)
              .map((item) => {
                return (
                  <div className="tri-single-item">
                    <div className="single-item">
                      <img src={item[0].imageUrl} className="reward-img" />
                      <img src={rewardBase} className="reward-base" />
                      <p>{item[0].text}</p>
                    </div>
                    <div className="single-item">
                      <img src={item[1].imageUrl} className="reward-img" />

                      <img src={rewardBase} className="reward-base" />
                      <p>{item[1].text}</p>
                    </div>
                    <div className="single-item">
                      <img src={item[2].imageUrl} className="reward-img" />
                      <img src={rewardBase} className="reward-base" />
                      <p>{item[2].text}</p>
                    </div>
                  </div>
                );
              })}
          </>
        ) : multiItem ? (
          <>
            {data
              .slice(currentIndex, currentIndex + itemsPerSlide)
              .map((item) => {
                return (
                  <div className="two-single-item">
                    <div className="single-item">
                      <img src={item[0].imageUrl} className="reward-img" />
                      <img src={rewardBase} className="reward-base" />

                      <p>{item[0].text}</p>
                    </div>
                    <div className="single-item">
                      <img src={item[1].imageUrl} className="reward-img" />
                      <img src={rewardBase} className="reward-base" />

                      <p>{item[1].text}</p>
                    </div>
                  </div>
                );
              })}
          </>
        ) : (
          data.slice(currentIndex, currentIndex + itemsPerSlide).map((item) => {
            return (
              <div className="single-item">
                <img src={item.imageUrl} className="reward-img" />
                <img src={rewardBase} className="reward-base" />
                <p>{item.text}</p>
              </div>
            );
          })
        )}
      </div>
      <button className="left-arrow" onClick={prevSlide}></button>
      <button className="right-arrow" onClick={nextSlide}></button>
      <div className="indicators">
        {Array.from({ length: dataLength }).map((item, index) => (
          <div className={index === currentIndex ? "active-dot" : "dot"}></div>
        ))}
      </div>
    </div>
  );
};
