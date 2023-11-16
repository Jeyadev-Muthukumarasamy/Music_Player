import React, { useState } from "react";
import axios from "axios";
import "./signUp.css";

const SignUp = () => {
  const [fields, setFields] = useState({
    username: "",
    password: "",
    phonenumber: "",
    name: "",
  });

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:3005/api/signup", fields);
      console.log(response.data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleChange = (event) => {
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div id="signupcontainer">
      <div id="signuppartone">
        <input
          type="text"
          id="signupusername"
          name="username"
          placeholder="Enter the Username"
          onChange={handleChange}
        />
        <input
          type="password"
          id="signuppassword"
          name="password"
          placeholder="Enter the password"
          onChange={handleChange}
        />
        <input
          type="text"
          id="signupphonenumber"
          name="phonenumber"
          placeholder="Enter your phonenumber"
          onChange={handleChange}
        />
        <input
          type="text"
          id="signupname"
          placeholder="Enter the name that you would like us to call you"
          name="name"
          onChange={handleChange}
        />
        <button id="signuploginsignup" onClick={handleSignUp}>
          Signup
        </button>
      </div>
      <div id="signupparttwo">
        <img
          src="./public/A boy listening.png"
          alt=""
          id="signupheadphoneboy"
        />
      </div>
    </div>
  );
};

export default SignUp;
