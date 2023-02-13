import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { FIVE_MINUTES } from "../constants/time";
import { fetchQuotes } from "../services/getQuotes";
import { CountdownContext } from "./Countdown.context";

export const QuoteContext = createContext({});

export const QuoteProvider = ({ children }) => {
  const { time } = useContext(CountdownContext);

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState();

  const { data } = useQuery("quotes", fetchQuotes, {
    staleTime: FIVE_MINUTES,
  });

  useEffect(() => {
    setQuotes(data);
  }, [data]);

  useEffect(() => {
    if (time === 0) {
      getRandomQuote();
    }
  }, [time]);

  function getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];

    setQuote(randomQuote);
  }

  return (
    <QuoteContext.Provider value={{ quote }}>{children}</QuoteContext.Provider>
  );
};
