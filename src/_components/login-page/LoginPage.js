import React from "react";

export default function LoginPage() {
  return (
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
  );
}
