import React from "react";

export default function RegisterPage() {
  return (
    <form class="email-signup">
      <div class="u-form-group">
        <input type="email" placeholder="Email" />
      </div>
      <div class="u-form-group">
        <input type="password" placeholder="Password" />
      </div>
      <div class="u-form-group">
        <input type="password" placeholder="Confirm Password" />
      </div>
      <div class="u-form-group">
        <button>Sign Up</button>
      </div>
    </form>
  );
}
