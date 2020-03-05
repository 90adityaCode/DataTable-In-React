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
    <div className="login-box">
      
      {loadPage()}
    </div>
  );
}
