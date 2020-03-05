import React from "react";

export default function RegisterPage() {
  return (
    <div class="form row" id="register">
      <div class="col-sm-12 container">
        <div class="input">
          <input
            class="main-form animated bounceInDown"
            type="text"
            name="name"
            placeholder=" NAME"
          />
        </div>
        <div class="input">
          <input
            class="main-form animated bounceInDown"
            type="text"
            name="usrname"
            placeholder=" EMAIL ADDRESS"
          />
        </div>
        <div class="input">
          <input
            class="main-form animated bounceInDown"
            type="password"
            name="password"
            placeholder=" PASSWORD"
          />
        </div>
        <div class="input">
          <input
            class="main-form btn animated bounceInDown"
            type="button"
            name="usrname"
            value="SIGN UP"
          />
        </div>
      </div>
    </div>
  );
}
