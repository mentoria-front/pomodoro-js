import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "../pages/challange/Characters";
import { Pomodoro } from "../pages/Pomodoro";
import Header from "../components/Header/Header";

export default function Router() {  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Pomodoro />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}
