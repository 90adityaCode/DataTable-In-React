import React from "react";

import "./LandingPage.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="lb-header">
      <Link to="/login">
        <button className="active button-bg" id="login-box-link">
          Login
        </button>
      </Link>
      <Link to="/register">
        <button className="button-bg" id="signup-box-link">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default Header;
