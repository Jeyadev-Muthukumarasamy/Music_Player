import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HomeContext, HomeContextProvider } from "./Context/Homecontext.jsx";
import { AdminContextProvider } from "./Context/Admincontext.jsx";
import { AudioProvider } from "./Context/AudioContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AudioProvider>
      <AdminContextProvider>
        <HomeContextProvider>
          <App />
        </HomeContextProvider>
      </AdminContextProvider>
    </AudioProvider>
  </BrowserRouter>
);
