import "../../App.css";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import NavHeader from "./NavHeader";

export default function AppLayout() {
  return (
    <div>
      <div className="App">
        <Header heading="React Router Dom" />
        <NavHeader />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
