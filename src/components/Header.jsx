import React from "react";
import headerImg from "../assets/User-tab-assest/Header.jpg";
import "../App.scss";
import { LangugeSelector } from "./LangugeSelector";
export const Header = () => {
  return (
    <div className="header">
      <img src={headerImg} />
      <LangugeSelector
        items={[
          { value: "English", id: 1 },
          { value: "Hinglish", id: 2 },
        ]}
      />
    </div>
  );
};
