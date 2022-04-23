import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  const intitalData = 0;
  const [myNum, setMyNUM] = React.useState(intitalData);
  return (
    <div>
      <div className="center_div">
        <p>{myNum}</p>
      </div>
      <div className="button2" onClick={() => setMyNUM(myNum + 1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
      </div>
      <div
        className="button2"
        onClick={() => (myNum > 0 ? setMyNUM(myNum - 1) : setMyNUM(0))}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR
      </div>
    </div>
  );
};

export default UseState;
