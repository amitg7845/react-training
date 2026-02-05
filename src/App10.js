import "./App.css";
import Header from "./Components/Header";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./states/reducers/index";

export default function App() {
  const count = useSelector((state) => state.countReducer.value); // Accessing the state from the Redux store
  const dispatch = useDispatch(); // Getting the dispatch function to dispatch actions

  return (
    <div className="App">
      <Header heading="React Redux" />
      <div className="react-redux">
        <h2>{count}</h2>
        <div className="btn-wrp">
          <button onClick={() => dispatch(increment(10))}>Increment</button>
          <button onClick={() => dispatch(decrement(5))}>Decrement</button>
        </div>
      </div>
    </div>
  );
}
