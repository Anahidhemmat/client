import { NavLink } from "react-router-dom";

export default function Nav() {
  let activeStyle = {
    color: "red",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h3>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Home
        </NavLink>
      </h3>
      <h3>
        <NavLink
          to="/course"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Course
        </NavLink>
      </h3>
      <h3>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About us
        </NavLink>
      </h3>
    </div>
  );
}
