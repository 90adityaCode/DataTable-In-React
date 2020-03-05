import React from "react";

export default function RegisterPage() {
  return (
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
  );
}
