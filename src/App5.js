import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./Components/Header";

export default function App() {
  const [input, setInput] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function changeHandler(event) {
    setInput(event.target.value);
  }
  return (
    <div className="App">
      <Header heading="Hooks useRef" />
      <div className="use-ref">
        <input
          type="text"
          placeholder="Enter something..."
          value={input}
          onChange={changeHandler}
        />
        <h3>Application has been render {renderCount.current} times</h3>
      </div>
    </div>
  );
}
