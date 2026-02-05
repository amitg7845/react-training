import "./App.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import { useCallback, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, "New Todo"]);
  }, [todos]);

  return (
    <div className="App">
      <Header heading="useCallback Hooks" />
      <div className="useCallback-hooks">
        <button onClick={increment}>Increment</button>
        <span> Count: {count} </span>
        <hr />
        <Todos todos={todos} addTodo={addTodo} />
      </div>
    </div>
  );
}
