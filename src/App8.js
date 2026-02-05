import "./App.css";
import Header from "./Components/Header";
import { useMemo, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState("");

  const expensiveCalculation = (num) => {
    console.log("CALCULATING In...");
    for (let i = 0; i < 10000000000; i++) {} //try with small values instead of 10 billions
    console.log("CALCULATING Out...");

    return num;
  };

  useMemo(() => expensiveCalculation(names), [names]);

  return (
    <div className="App">
      <Header heading="useMemo Hooks" />
      <div className="useMemo-hooks">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <span> Count: {count} </span>
        <hr />
        <input
          type="text"
          value={names}
          placeholder="Enter something..."
          onChange={(e) => setNames(e.target.value)}
        />
        <h3>{names}</h3>
      </div>
    </div>
  );
}
