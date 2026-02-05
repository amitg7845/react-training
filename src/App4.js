import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ContextAPI1 from "./Components/ContextAPI1";

const AppState = createContext();
const SurnameState = createContext();

export default function App() {
  const [data, setData] = useState("Context API Data");
  const [firstName, setFirstName] = useState("Amitkumar");
  const [surname, setSurname] = useState("Gupta");
  return (
    <div className="App">
      <AppState.Provider value={{ firstName, data }}>
        <SurnameState.Provider value={{ surname }}>
          <Header heading="Context API" />
          <div className="context-api">
            <ContextAPI1 />
          </div>
        </SurnameState.Provider>
      </AppState.Provider>
    </div>
  );
}

export { AppState, SurnameState };
