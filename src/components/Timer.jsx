import React, { useEffect, useState } from 'react';

let timeout;

const TEN_MINUTES = 30 * 60;
const FIVE_MINUTES = 5 * 1;
const ONE_SECOND = 1000;

export const Timer = ({ onTimerChange }) => {
  const [time, setTime] = useState(TEN_MINUTES)
  const [isActive, setIsActive] = useState(false)


  useEffect(() => {
    if (isActive && time > 0) {
      timeout = setTimeout(() => {
        setTime(time - 1);
        document.title = time - 1;
      }, ONE_SECOND); 
    } else {
      setIsActive(false);
    }

    onTimerChange(time);

  }, [time, isActive]);


  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');

  function stopCounter(timeToReset) {
    clearTimeout(timeout);
    setTime(Number.isNaN(timeToReset) || TEN_MINUTES)
    setIsActive(false)
  }
 

  function handleChangeTime(timeToChange) {
    stopCounter(timeToChange)
    setTime(timeToChange)
    setIsActive(true)
  }

  return (
    <div>
        <button onClick={() => handleChangeTime(TEN_MINUTES)}>Long time</button>
        <button onClick={() => handleChangeTime(FIVE_MINUTES)}>Short time</button>

        <p>{minutes} : {seconds}</p>
    </div>
  )
}