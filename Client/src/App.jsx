import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './Components/Headers/Headers'
// import Login from './Components/SignUp/SignUp'
import { Link,Route,Routes } from 'react-router-dom'; 
import Home from './pages/Home/Home'
import SignUp from './Components/SignUp/signUp'
import Login from './Components/Login/Login'
import Admin from './Components/Admin.jsx/Admin'
import Seeall from './pages/Home/Seeall/Seeall'






function App() {


  return (
    <>
    
    <Routes>
    <Route path ="/" element ={<Home />}/>,
      <Route path ="/signup" element ={<SignUp />}/>,
      <Route path = "/login" element = {<Login />}/>
      <Route path ="/admin" element = {<Admin />}/>
      <Route path ="/seeall/:language" element = {<Seeall />}/>
    </Routes>
   
    
    </>
  )
}

export default App
