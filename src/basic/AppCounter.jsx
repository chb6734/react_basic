import React, { useState } from "react";
import Counter from "../components/Counter";

export default function AppCounter() {
  const [totalCnt, setTotalCnt] = useState(0);
  const handleClick = () => setTotalCnt((prev) => prev + 1);
  return (
    <div>
      <div className="totalCount">Total Count: {totalCnt}</div>
      <Counter total={totalCnt} onClick={handleClick} />
      <Counter total={totalCnt} onClick={handleClick} />
    </div>
  );
}
