import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Characters from "../pages/challange/Characters";
import { Pomodoro } from "../pages/Pomodoro";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={"/"}> Home </Link>
          </li>
          <li>
            <Link to={"/characters"}>characters</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Pomodoro />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}
