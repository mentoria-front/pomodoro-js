import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const FIVE_MINUTES = 5 * 60;
const LONG_MINUTES = 10 * 60;
const ONE_SECOND = 1000;

let timeout;

function App() {

  const [time, setTime] = useState(FIVE_MINUTES);
  const [isActive, setIsActive] = useState(true);

  function handleChangeTimer(timetoSet) {
    stopCounter()
    setTime(timetoSet)
    setIsActive(true);
  }

  function stopCounter() {
    clearTimeout(timeout)
    setIsActive(false);
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (isActive && time > 0) {
      timeout = setTimeout(() => {
        setTime(time - 1);
      }, ONE_SECOND);
    } else {
      setIsActive(false)
    }

  }, [time, isActive]);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => handleChangeTimer(FIVE_MINUTES)}>Short breake</button>
        <button onClick={() => handleChangeTimer(LONG_MINUTES)}>Long breake</button>

        <p>{minutes} : {seconds}</p>
       
      </header>
    </div>
  );
}

export default App;
