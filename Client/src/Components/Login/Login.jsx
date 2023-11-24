import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3005/api/login", {
        username: userName,
        password: passWord,
      });

      localStorage.setItem("token", response.data.accessToken);

      navigate("/home");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
    <p id="intrologin">SignIn </p>
    <div id="loginContainer">
    

     
        <form>
          <GoogleOAuthProvider clientId="75525989553-p7d07rcfui64lj6utksjgi6q7cfhe2c8.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);

                console.log(decoded);
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
          <div id="logindivs">
          <label htmlFor="" id="signuplabel">UserName</label>
          <br/>
          <input
            type="text"
            id="logininput"
            name="username"
            onChange={handleChange}
            placeholder="Enter Your Username"
          />

          </div>
          <div id="logindivs">
          <label htmlFor="" id="signuplabel">Password</label>
          <br/>
          <input
            type="password"
            id="logininput"
            name="password"
            onChange={handleChange}
            placeholder="Enter Your Password"
            autoComplete="current-password"
          />

          </div>
          <div id="loginbuttondiv">
           
            
          <button type="button" onClick={handleLogin} id="loginbutton">
            Login
          </button>

          </div>

         
        </form>
        
      
      <ToastContainer />
    </div>
    </>
    
  );
};

export default Login;
