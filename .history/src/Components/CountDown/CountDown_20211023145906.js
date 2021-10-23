import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./CountDown.css";
const CountDown = () => {
  const [countDown, setCountDown] = useState(180);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown((count) => --count);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div className="app">
        <div className="time-circle">
          <div className="time">{countDown}</div>
        </div>
        <div className="buttons">
          <button className="play-pause">
            <i className="fa fa-play fa-2x" />
          </button>
          <button className="play-pause">
            <i className="fa fa-pause fa-2x" />
          </button>
          <button className="reset">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
