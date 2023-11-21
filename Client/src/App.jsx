import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headers from "./Components/Headers/Headers";
// import Login from './Components/SignUp/SignUp'
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./Components/SignUp/signUp";
import Login from "./Components/Login/Login";
import Admin from "./Components/Admin.jsx/Admin";
// import Seeall from "./pages/Home/Seeall/Seeall";
import Playlist from "./Components/Playlist/Playlist";
import Playlistinput from "./Components/Playlistinput/Playlistinput";
import Playlistsongs from "./Components/Playlistsongs/Playlistsongs";
import { ThemeContext } from "./Context/ThemeContext";
import "./index.css"
// import Seeall from "./Components/Seeall/Seeall";
import Songspage from "./pages/Home/Songspage";

function App() {

  const {isDarkTheme}=useContext(ThemeContext)
  console.log(isDarkTheme,"from app.jsx")
  return (
    <>
    <div className={isDarkTheme?"dark-theme":"light-theme"}>
      <Routes>
        <Route path="/" element={<Login />} />,
        <Route path="/home" element={<Home />} />,
        <Route path="/signup" element={<SignUp />} />,
        <Route path="/playlist" element={<Playlist />} />,
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/seeall/:language" element={<Songspage />}/>
        <Route path="/playlistinput" element={<Playlistinput />} />
        <Route path="/playlistsongs" element={<Playlistsongs />} />
      </Routes>

      </div>
     
    </>
  );
}

export default App;
