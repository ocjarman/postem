import { NavLink } from "react-router-dom";
import React from "react";

class MainNav extends React.Component {
  render() {
    return (
      <div className="navbar-nav mr-auto">
        <NavLink
          to="/"
          exact="true"
          className="nav-link"
          activeclassname="router-link-exact-active"
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          exact="true"
          className="nav-link"
          activeclassname="router-link-exact-active"
        >
          Profile
        </NavLink>
        <NavLink
          to="/external-api"
          exact="true"
          className="nav-link"
          activeclassname="router-link-exact-active"
        >
          External API
        </NavLink>
      </div>
    );
  }
}

export default MainNav;
