import React from "react";
import '../landing-page/LandingPage.css';
import Header from '../landing-page/Header';
export default function LoginPage() {
  return (
    <div className="login-box">
       <Header />
      <form className="email-login">
        <div className="u-form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="u-form-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="u-form-group">
          <button>Log in</button>
        </div>
        <div className="u-form-group">
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
}
