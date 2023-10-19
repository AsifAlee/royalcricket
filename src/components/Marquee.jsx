import React from "react";
import Marquee from "react-fast-marquee";
export const MarqueeComponent = (props) => {
  return (
    <Marquee play={1} speed={10} gradient={false}>
      {props.children}
    </Marquee>
  );
};
