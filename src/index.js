import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/client";
import { CountdownProvider } from "./contexts/Countdown.context";
import { QuoteProvider } from "./contexts/Quote.context";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CountdownProvider>
      <QueryClientProvider client={queryClient}>
        <QuoteProvider>
          <App />
        </QuoteProvider>
      </QueryClientProvider>
    </CountdownProvider>
  </React.StrictMode>
);
