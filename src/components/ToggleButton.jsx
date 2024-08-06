import React from "react";

export default function ToggleButton({ toggleTimer }) {
  return (
    <label className="switch">
      <input onClick={toggleTimer} className="cb" type="checkbox" />
      <span className="toggle">
        <span className="left">Start</span>
        <span className="right">Stop</span>
      </span>
    </label>
  );
}
