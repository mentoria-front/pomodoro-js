import React, { useState } from "react";
import Quote from "../components/Quote";
import { Timer } from "../components/Timer";

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
