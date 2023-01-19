import React from "react";

export default function Pointer(positionXY) {
  return (
    <div
      className="pointer"
      style={{
        position: "absolute",
        left: 1,
        top: 1,
      }}
    ></div>
  );
}
