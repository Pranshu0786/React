import React, { useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  const intitalData = 0;
  const [myNum, setMyNUM] = React.useState(intitalData);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });
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
    </div>
  );
};

export default UseEffect;
