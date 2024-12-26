import { NavLink, Outlet } from "react-router-dom";
import { halfWidth } from "validator/lib/isHalfWidth";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink isactiveclassname=".active" to="/">
          Home
        </NavLink>
        <NavLink isactiveclassname=".active" to="/timer">
          Timer
        </NavLink>
        <NavLink isactiveclassname=".active" to="/counter">
          Counter
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

