import React from "react";

export default function LoginPage() {
  return (
    <div class="form row" id="login">
      <div class="col-sm-12 container">
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
            value="LOGIN"
          />
        </div>
        <div class="input">
          <label class="pull-left">
            <input type="checkbox" />
            Remember me
          </label>
          <label class="pull-right">
            <a href="#" id="3" class="forget-password">
              Forgot password ?
            </a>
          </label>
        </div>
      </div>
    </div>
  );
}
