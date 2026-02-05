import { useState } from "react";

export function useCounter(val1, val2) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + val1);
  };
  const decrement = () => {
    setCount(count - val2);
  };
  console.log(count);

  return { count, increment, decrement };
}
export default useCounter;
