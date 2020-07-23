import React, { Component } from "react";
import "./MainNav.css";
import { NavLink } from "react-router-dom";

export class MainNav extends Component {
  render() {
    return (
      <nav className="main-nav" title="main-nav-bar">
        {/* <span className="nav-link-container" title="main-nav-link">
          <NavLink className="nav-link" to="/" exact>
            
          </NavLink>
        </span> */}
        {/* <span className="nav-link-container move-right" title="main-nav-link">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </span> */}
        {/* <span className="nav-link-container" title="main-nav-link">
          <NavLink className="nav-link" to="/admin">
            Admin
          </NavLink>
        </span> */}

        <span className="nav-link-container" title="main-nav-link">
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
        </span>
        <span className="nav-link-container" title="main-nav-link">
          <NavLink className="nav-link" to="/all_listings">
            All Listings
          </NavLink>
        </span>

        <span className="nav-link-container" title="main-nav-link">
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
        </span>
      </nav>
    );
  }
}

export default MainNav;
