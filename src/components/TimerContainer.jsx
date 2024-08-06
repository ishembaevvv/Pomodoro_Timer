import React, { useEffect, useState } from "react";
import Changer from "./Changer";
import ToggleButton from "./ToggleButton";

export default function TimerContainer() {
  const [enabled, setEnabled] = useState(false);
  const [seconds, setSeconds] = useState(2);
  const [minutes, setMinutes] = useState(1);

  const toggleTimer = () => {
    setEnabled(!enabled);
  };

  useEffect(() => {
    if (!enabled) return;

    const i = setInterval(() => {
      setSeconds((e) => Math.max(e - 1, 0));
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, [enabled]);

  useEffect(() => {
    if (seconds === 0) {
      setSeconds(59);
      setMinutes((e) => Math.max(e - 1, 0));
      if (seconds === 0 && minutes === 0) {
        setEnabled(false);
        setSeconds(0);
        setMinutes(0);
      }
    }
  }, [seconds]);

  return (
    <div className="container">
      <div className="timer">
        <div>
          <button class="brutalist-button">
            <div class="button-text">
              <span>
                {minutes < 10 ? "0" + minutes : minutes}
                <b>:</b>
                {seconds < 10 ? "0" + seconds : seconds}
              </span>
            </div>
          </button>
        </div>
        <span>
          <ToggleButton toggleTimer={toggleTimer} />
        </span>
      </div>

      <div>
        <Changer
          minutes={minutes}
          seconds={seconds}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
      </div>
    </div>
  );
}
