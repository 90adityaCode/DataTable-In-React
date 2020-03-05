import React, {useState} from "react";
import "./LandingPage.css";
import SignIn from '../login-page/LoginPage';
import SingUp from '../register-page/RegisterPage';

export default function LandingPage() {
  const [page,setPage] = useState(true)
  const loadPage = ()=>{
    console.log(page)
    if(page){
       return <SignIn />
    } else {
      return <SingUp />
    }
  }
  const LoginHanlder = ()=>{
   
  }
  
  const SignupHanlder = ()=>{
    
  }
  return (
    <div class="login-box">
      <div class="lb-header">
        <a href="#" class="active" id="login-box-link">
          Login
        </a>
        <a href="#" id="signup-box-link">
          Sign Up
        </a>
      </div>
      {loadPage}
    </div>
  );
}
