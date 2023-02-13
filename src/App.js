import Characters from "./pages/challange/Characters";
import { Pomodoro } from "./pages/Pomodoro";
import { QuoteContext } from "./contexts/Quote.context";
import { useContext } from "react";
import Router from "./routes";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
