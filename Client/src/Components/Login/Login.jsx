import React, { useState } from 'react';
import "./Login.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
  }

  return (
    <div className='loginContainer'>
      <p className='intrologin'>SignIn </p>
      <div className="loginupTwo">
        <img src="./public/loginpage.jpg" alt="" id="boylistening" className="loginimage" />
      </div>
      <div className="loginupOne">
        <form>
          <input type="text" id="loginusername" name="username" onChange={handleChange} placeholder='Enter Your Username' />
          <input type="password" id="loginpassword" name="password" onChange={handleChange} placeholder='Enter Your Password' autoComplete="current-password" />
          <button type="button" onClick={handleLogin} id="loginbutton">Login</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
