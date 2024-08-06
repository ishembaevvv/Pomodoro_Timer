import React from "react";

export default function Changer({ minutes, seconds, setMinutes, setSeconds }) {
  return (
    <div className="changers">
      <b>Minutes:</b>
      <input
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        type="number"
        name="text"
        className="input"
        pattern="\d+"
        placeholder="Numbers only or shake"
      />
      <b>Seconds:</b>
      <input
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        type="number"
        name="text"
        className="input"
        pattern="\d+"
        placeholder="Numbers only or shake"
      />
    </div>
  );
}
