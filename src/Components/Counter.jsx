import useCounter from "../utils/useCounter";

function Counter() {
  const { count, increment, decrement, data } = useCounter(10, 5);
  return (
    <div className="custom-counter-wrp">
      <h2>Counter Component Placeholder</h2>
      <h3>Count: {count}</h3>
      <div className="btn-wrp">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
