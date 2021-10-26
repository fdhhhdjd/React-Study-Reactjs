import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import "./Clock.css";
const ClockCountDown = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  return (
    <div className="App1">
      <Clock />
    </div>
  );
};
Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};
export default ClockCountDown;
