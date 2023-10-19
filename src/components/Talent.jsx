import React, { useEffect } from "react";
import { EventGifts } from "../sections/EventGifts";
import { TalentLeaderBoardSection } from "../sections/TalentLeaderBoardSection";
import { RewwardSection } from "../sections/RewwardSection";

export const Talent = () => {
  return (
    <>
      <EventGifts />
      <RewwardSection />
      <TalentLeaderBoardSection />
    </>
  );
};
