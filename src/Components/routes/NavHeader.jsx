import { NavLink } from "react-router-dom";
import "../../App.css";

export default function NavHeader() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <div className="headers-wrp">
      <NavLink style={navLinkStyles} to={"/app"}>
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        About
      </NavLink>
      <NavLink style={navLinkStyles} to={"/contact"}>
        Contact
      </NavLink>
    </div>
  );
}
