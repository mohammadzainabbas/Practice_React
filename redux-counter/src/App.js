import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "./actions/counterActions";

const App = () => {
  const counter = useSelector(state => state.counter.counterValue);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button>
    </div>
  );
};

export default App;
