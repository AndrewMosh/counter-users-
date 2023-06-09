import React, { useState } from "react";
import { counterState } from "../types/props";

const Counter = () => {
  const [state, setState] = useState<counterState>({ count: 0 });

  const incrementCount = () => {
    setState({ count: state.count + 1 });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
