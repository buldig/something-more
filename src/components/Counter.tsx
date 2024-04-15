import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <div className={classes.btn}>{counter}</div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default Counter;
