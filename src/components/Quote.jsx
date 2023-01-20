import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchQuotes } from "../services/getQuotes";

import "./Quote.css";

const FIVE_MINUTES = 5 * 60;

export default function Quote({ currentTime }) {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState();

  const { data } = useQuery("quotes", fetchQuotes, {
    staleTime: FIVE_MINUTES,
  });

  useEffect(() => {
    setQuotes(data);
  }, [data]);

  useEffect(() => {
    if (currentTime === 0) {
      getRandomQuote();
    }
  }, [currentTime]);

  function getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];

    setQuote(randomQuote);
  }

  return (
    <div className="quote-container">
      {quote && (
        <>
          <p>{quote.text}</p>
          <p>{quote.author}</p>
        </>
      )}
    </div>
  );
}
