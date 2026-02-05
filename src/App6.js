import { useReducer } from "react";
import "./App.css";
import Header from "./Components/Header";

export default function App() {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "increment") {
      return state + 1;
    }
    if (action.type === "decrement") {
      return state - 1;
    }
    if (action.type === "reset") {
      return initialState;
    }
    return state;
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Header heading="Hooks useReducer" />
      <div className="use-reducer">
        <h2>Count - {count}</h2>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment By 1
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement By 1
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}
