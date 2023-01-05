import React, { useState } from 'react'
import Quote from '../components/Quote'
import { Timer } from '../components/Timer';

export const Pomodoro = () => {
  const [currentTime, setCurrentTime] = useState(0);

  const changeTime = (time) => {
    setCurrentTime(time);
  };

  return (
    <div>
      <Timer onTimerChange={changeTime}/>
      <Quote currentTime={currentTime}/>
    </div>
  )
}
