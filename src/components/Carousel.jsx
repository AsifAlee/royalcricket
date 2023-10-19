import React, { useState } from "react";
import "../styles/carousel.scss";
export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};
const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderLength = React.Children.count(children);

  const nextSlide = () => {
    // if (activeIndex >= sliderLength.length - 1) {
    //   setActiveIndex(0);
    // } else setActiveIndex((prev) => prev + 1);
  };
  const prevSlide = () => {
    // if (activeIndex === 0) {
    //   setActiveIndex(sliderLength.length - 1);
    // } else {
    //   setActiveIndex((prev) => prev - 1);
    // }
  };

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex > React.Children.count(children) - 1) {
      // newIndex = React.Children.count(children) - 1;
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="nxt-prev-btns">
        <button
          className="prev"
          onClick={() => updateIndex(activeIndex - 1)}
        ></button>
        <button
          className="next"
          onClick={() => updateIndex(activeIndex + 1)}
        ></button>
      </div>

      <div className="indicators">
        {/* <button onClick={() => updateIndex(activeIndex - 1)}>Prev</button> */}
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => updateIndex(index)}
            >
              {/* {index + 1} */}
            </button>
          );
        })}
        {/* <button onClick={() => updateIndex(activeIndex + 1)}>Next</button> */}
      </div>
    </div>
  );
};

export default Carousel;
