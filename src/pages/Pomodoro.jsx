import React from "react";
import Quote from "../components/Quote/Quote";
import { Timer } from "../components/Timer/Timer";

import "./styles.css";

export const Pomodoro = () => {
  return (
    <>
      <div className="container">
        <Timer />
        <Quote />
      </div>
    </>
  );
};
