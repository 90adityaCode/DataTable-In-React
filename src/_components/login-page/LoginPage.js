import React from "react";

export default function LoginPage() {
  return (
    <form class="email-login">
      <div class="u-form-group">
        <input type="email" placeholder="Email" />
      </div>
      <div class="u-form-group">
        <input type="password" placeholder="Password" />
      </div>
      <div class="u-form-group">
        <button>Log in</button>
      </div>
      <div class="u-form-group">
        <a href="#" class="forgot-password">
          Forgot password?
        </a>
      </div>
    </form>
  );
}
