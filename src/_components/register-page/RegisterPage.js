import React from "react";

import "../landing-page/LandingPage.css";
import Header from "../landing-page/Header";
export default function RegisterPage() {
  return (
    <div className="login-box">
      <Header />
      <form className="email-signup">
        <div className="u-form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="u-form-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="u-form-group">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="u-form-group">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}
