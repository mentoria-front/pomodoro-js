import React, { createContext, useEffect, useRef, useState } from "react";
import { FIVE_MINUTES, ONE_SECOND, TEN_MINUTES } from "../constants/time";

export const CountdownContext = createContext({});

export const CountdownProvider = ({ children }) => {
  const [remainingTime, setRemainingTime] = useState(TEN_MINUTES);
  const [pomodoroDuration, setPomodoroDuration] = useState(TEN_MINUTES);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [breakCount, setBreakCount] = useState(0);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isActive && remainingTime > 0) {
      timeoutRef.current = setTimeout(() => {
        setRemainingTime(remainingTime - 1);
      }, ONE_SECOND);
    } else {
      handleCountdownComplete();
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [remainingTime, isActive]);

  function handleCountdownComplete() {
    setIsActive(false);

    if (!isBreak && remainingTime === 0) {
      startBreak();
    } else if (isBreak && remainingTime === 0) {
      startPomodoro(pomodoroDuration);
    }
  }

  function startBreak() {
    setRemainingTime(FIVE_MINUTES + 1);
    setIsBreak(true);
    setIsActive(true);
    setBreakCount(prevCount => prevCount + 1); // Incrementa a contagem de pausas
  }

  function startPomodoro(duration) {
    setRemainingTime(duration);
    setPomodoroDuration(duration)
    setIsBreak(false);
    setIsActive(true);
  }

  return (
    <CountdownContext.Provider
      value={{
        startPomodoro,
        remainingTime,
        breakCount,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
