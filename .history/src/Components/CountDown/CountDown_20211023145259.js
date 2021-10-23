import React from "react";
import "./CountDown.css";
const CountDown = () => {
  return (
    <div>
      <div className="app">
        <div className="time-circle">
          <div className="time">00:04</div>
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
