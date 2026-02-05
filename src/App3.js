// Records keeping Projects
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log("useEffect has been called");
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${state}`
      );
      const user = await response.json();
      setData((data) => [...data, user]);
      console.log();
    }
    fetchData();
    document.title = `(${state + 1}) Cards Loaded`;
  }, [state]);

  // console.log("Function Body");

  return (
    <div>
      <Header heading="useEffect Hook" />
      {/* {console.log("Inside JSX")} */}
      <div className="container">
        <div className="btn">
          <button className="card-btn" onClick={() => setState(state + 1)}>
            Get New Users {state + 1}
          </button>
        </div>
        {console.log(data)}
        <div className="card-wrp">
          {data.map((element) => (
            <Card key={element.id} element={element} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
