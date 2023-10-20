import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='loginContainer'>
        <p className='intrologin'>SignIn </p>
        <div className="loginupTwo">
            <img src="./public/loginpage.jpg" alt="" id="boylistening" className="loginimage"/>
        </div>
        <div className="loginupOne">
            <input type="text" id="loginusername" placeholder='Enter Your Username'/>
            <input type="text" id="loginpassword" placeholder='Enter Your Password'/>
            <button id="loginbutton">Login</button>
        </div>
        
    </div>
  )
}

export default Login
