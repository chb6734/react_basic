import React, { useState } from "react";
import "./App.css";
import Pointer from "../components/Pointer";

export default function AppXY() {
  const onMouseMove = (event) => {
    console.log("pageX : ", event.pageX, ", pageY : ", event.pageY);
    setPosition({ x: event.clientX, y: event.clientY });
  };
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div className="window" onPointerMove={onMouseMove}>
      <Pointer Position={position} />
    </div>
  );
}
