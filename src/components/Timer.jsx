import React, { useContext, useEffect, useState } from "react";
import { FIVE_MINUTES, TEN_MINUTES } from "../constants/time";
import { CountdownContext } from "../contexts/Countdown.context";
import "./Timer.css";

export const Timer = () => {
  const { time, handleChangeTime } = useContext(CountdownContext);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  document.title = `${minutes} : ${seconds}`;

  return (
    <div>
      <button onClick={() => handleChangeTime(TEN_MINUTES)}>Long time</button>
      <button onClick={() => handleChangeTime(FIVE_MINUTES)}>Short time</button>

      <p className="timer">
        {minutes} : {seconds}
      </p>
    </div>
  );
};
