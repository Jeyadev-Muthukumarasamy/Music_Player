import React from 'react';
import "./signUp.css";


const SignUp = () => {
  return (
    <>
 

<div id="signupcontainer"> 
      <div id="signuppartone"> 
        <input type="text" id="signupusername" placeholder="Enter the Username" /> 
        <input type="password" id="signuppassword" placeholder="Enter the password" /> 
        <input type="text" id="signupphonenumber" placeholder="Enter your phonenumber" /> 
        <input type="text" id="signupname" placeholder="Enter the name that you would like us to call you" /> 
        <button id="signuploginsignup">Signup</button> 
      </div>
      <div id="signupparttwo"> 
        <img src="./public/A boy listening.png" alt="" id="signupheadphoneboy" /> 
      </div>
    </div>

    </>
    
  );
}

export default SignUp;
