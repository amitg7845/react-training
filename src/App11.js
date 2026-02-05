import "./App.css";
import CheckOnlineStatus from "./Components/CheckOnlineStatus";
import Counter from "./Components/Counter";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="App">
      <Header heading="Custom Hooks" />
      <div className="new-custom-hooks">
        {/* Your custom hooks related components can go here */}
        <CheckOnlineStatus />
        <Counter />
      </div>
    </div>
  );
}
