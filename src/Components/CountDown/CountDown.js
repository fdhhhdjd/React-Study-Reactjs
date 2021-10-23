import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./CountDown.css";
const CountDown = () => {
  const [countDown, setCountDown] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalID, setIntervalID] = useState(null);
  useEffect(() => {
    if (isRunning) {
      const timer = window.setInterval(() => {
        setCountDown((count) => count - 1);
      }, 1000);
      setIntervalID(timer);
    } else {
      window.clearInterval(intervalID);
    }
  }, [isRunning]);
  return (
    <div>
      <div className="app">
        <div className="time-circle">
          <div className="time">{countDown}</div>
        </div>
        <div className="buttons">
          {!isRunning ? (
            <>
              <button className="play-pause" onClick={() => setIsRunning(true)}>
                <i className="fa fa-play fa-2x" />
              </button>
              <button className="reset">Run</button>
            </>
          ) : (
            <>
              <button
                className="play-pause"
                onClick={() => setIsRunning(false)}
              >
                <i className="fa fa-pause fa-2x" />
              </button>
              <button className="reset">Pause</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountDown;
