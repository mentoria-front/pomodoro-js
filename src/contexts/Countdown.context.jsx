import React, { createContext, useEffect, useState } from "react";
import { ONE_SECOND, TEN_MINUTES } from "../constants/time";

let timeout;

export const CountdownContext = createContext({});

export const CountdownProvider = ({ children }) => {
  const [time, setTime] = useState(TEN_MINUTES);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      timeout = setTimeout(() => {
        setTime(time - 1);
      }, ONE_SECOND);
    } else {
      setIsActive(false);
    }
  }, [time, isActive]);

  function stopCounter(timeToReset) {
    clearTimeout(timeout);
    setTime(Number.isNaN(timeToReset) || TEN_MINUTES);
    setIsActive(false);
  }

  function handleChangeTime(timeToChange) {
    stopCounter(timeToChange);
    setTime(timeToChange);
    setIsActive(true);
  }

  return (
    <CountdownContext.Provider
      value={{
        handleChangeTime,
        time,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
