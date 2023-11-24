import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [fields, setFields] = useState({
    username: "",
    password: "",
    phonenumber: "",
    signupname: "",
  });

  const [errorFields, setErrorFields] = useState({
    username: false,
    password: false,
    phonenumber: false,
    signupname: false,
  });

  const isFormValidOnBlur = (event) => {
    // const error = {
    //   username: false,
    //   password: false,
    //   phonenumber: false,
    //   signupname: false,
    // };

    // if (fields.username === "") {
    //   error.username = true;
    // }
    // if (fields.password === "") {
    //   error.password = true;
    // }
    // if (fields.phonenumber === "") {
    //   error.phonenumber = true;
    // }
    // if (fields.signupname === "") {
    //   error.signupname = true;
    // }
    // setErrorFields(error);

    // if (Object.values((error) => error === true)) {
    //   return false;
    // }
    // return true;
    const { name, value } = event.target;
    let error = false;

    if (name === "username" && value === "") {
      error = true;
    } else if (name === "password" && value === "") {
      error = true;
    } else if (name === "phonenumber" && value === "") {
      error = true;
    } else if (name === "signupname" && value === "") {
      error = true;
    }

    setErrorFields((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (isFormValidOnBlur()) {
      const response = await axios.post(
        "http://localhost:3005/api/signup",
        fields
      );
      console.log(response.data);
      alert("submitted");
    } else {
      alert("not submitted");
    }
  };

  const handleChange = (event) => {
    isFormValidOnBlur(event);
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
       <>
      <div id="signupcontainer">
        <form onSubmit={handleSignUp} noValidate autoComplete="off" autoSave="off">
          <div id="divusername">
            <label htmlFor="signupusername" id="signuplabel">Username</label>
            <br/>
            <input
              type="text"
              id="signupinput"
              name="username"
              placeholder="Enter the Username"
              onChange={handleChange}
              onBlur={isFormValidOnBlur}
            />
             <br/>
            {errorFields.username && (
              <p className="danger">please enter the valid username</p>
            )}
          </div>
          <div id="divusername">
            <label htmlFor="signupinput" id="signuplabel">Password</label>
            <br/>
            <input
              type="password"
              id="signupinput"
              name="password"
              placeholder="Enter the password"
              onChange={handleChange}
              onBlur={isFormValidOnBlur}
            />
            <br/>

            {errorFields.password && (
              <p className="danger">please enter the valid password</p>
            )}
          </div>
          <div id="divusername">
            <label htmlFor="signupphonenumber" id="signuplabel">Phone Number</label>
            <br/>
            <input
              type="text"
              id="signupinput"
              name="phonenumber"
              placeholder="Enter your phonenumber"
              onChange={handleChange}
              onBlur={isFormValidOnBlur}
            />
            {errorFields.phonenumber && (
              <p className="danger">please enter the valid phonenumber</p>
            )}
          </div>
          <div id="divusername">
            <label htmlFor="signupname" id="signuplabel"s>SignupName</label>
            <br/>
            <input
              type="text"
              id="signupinput"
              name="signupname"
              placeholder="Enter the name that you would like us to call you"
              onChange={handleChange}
              onBlur={isFormValidOnBlur}
            />
            
            {errorFields.signupname && (
              <p className="danger">please enter the valid signupname</p>
            )}
          </div>
          <div id="divbuttonsignup">
            <button id="signupbutton" type="submit">
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
      
      
      {/*       
      <div id="signupparttwo">
        <img
          src="./public/A boy listening.png"
          alt=""
          id="signupheadphoneboy"
        />
      </div> */}
    </>
  );
};

export default SignUp;
