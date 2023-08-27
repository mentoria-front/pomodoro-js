import React, { useContext } from "react";
import { FIVE_MINUTES, TEN_MINUTES } from "../../constants/time";
import { CountdownContext } from "../../contexts/Countdown.context";
import "./Timer.css";
import { Button } from "../Button/Button";

export const Timer = () => {
  const { remainingTime, startPomodoro } = useContext(CountdownContext);

  const minutes = String(Math.floor(remainingTime / 60)).padStart(2, "0");
  const seconds = String(remainingTime % 60).padStart(2, "0");

  document.title = `${minutes} : ${seconds}`;

  return (
    <div>
      <div className="buttons-container">
        <Button title="Long time" actionType="long" onClick={() => startPomodoro(TEN_MINUTES)} />
        <Button title="Short time" actionType="short" onClick={() => startPomodoro(FIVE_MINUTES)} />
      </div>

      <p className="timer">
        {minutes} : {seconds}
      </p>
    </div>
  );
};
