import React from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }
  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  const intitalData = 0;
  //   const [myNum, setMyNUM] = React.useState(intitalData);
  const [state, dispatch] = React.useReducer(reducer, intitalData);
  return (
    <div>
      <div className="center_div">
        <p>{state}</p>
      </div>
      <div className="button2" onClick={() => dispatch({ type: "INCR" })}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
      </div>
      <div className="button2" onClick={() => dispatch({ type: "DECR" })}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR
      </div>
    </div>
  );
};

export default UseReducer;
