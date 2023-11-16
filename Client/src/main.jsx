import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HomeContext, HomeContextProvider } from "./Context/Homecontext.jsx";
import { AdminContextProvider } from "./Context/Admincontext.jsx";
import { AudioProvider } from "./Context/AudioContext.jsx";
import { PlaylistContextProvider } from "./Context/Playlistcontext.jsx";
import { ThemeContextProvider } from "./Context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ThemeContextProvider>

 
   <HomeContextProvider>
    <AudioProvider>
      <AdminContextProvider>
     
        <PlaylistContextProvider>
          

            <App />

        </PlaylistContextProvider>
       
        
     
      </AdminContextProvider>
    </AudioProvider>
    </HomeContextProvider>
    </ThemeContextProvider>
    
  </BrowserRouter>
);
