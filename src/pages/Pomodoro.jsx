import React, { useState } from "react";
import Quote from "../components/Quote";
import { Timer } from "../components/Timer";

import "./styles.css";

export const Pomodoro = () => {
  const [currentTime, setCurrentTime] = useState(0);

  const changeTime = (time) => {
    setCurrentTime(time);
  };

  return (
    <>
      <div className="container">
        <Timer onTimerChange={changeTime} styles={{ color: "red" }} />
        <Quote currentTime={currentTime} />
      </div>
    </>
  );
};
