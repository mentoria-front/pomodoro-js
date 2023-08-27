import React, { useContext } from "react";
import { QuoteContext } from "../../contexts/Quote.context";

import "./Quote.css";

export default function Quote() {
  const { quote } = useContext(QuoteContext);

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
