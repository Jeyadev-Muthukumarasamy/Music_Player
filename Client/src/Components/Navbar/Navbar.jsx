import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { HomeContext } from "../../Context/Homecontext";
import { ThemeContext } from "../../Context/ThemeContext";

const Navbar = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  const API_URL = "http://localhosst:3005/api/musicdatasearch";
  const navigate = useNavigate();

  const { handleTheme, isDarkTheme } = useContext(ThemeContext);
  console.log(isDarkTheme);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleChange = async (event) => {
    const inputValue = event.target.value;
    setSearchInputValue(inputValue);

    try {
      if (inputValue.trim() === "") {
        setSearchList([]);
      } else {
        const response = await axios.get(API_URL, {
          params: {
            query: inputValue,
          },
        });
        setSearchList(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log(searchList);
  }, [searchList]);

  return (
    <div id="navbarcontainerwrap">
      <div id="navbarcon">
        <div className="search-container">
          <input
            type="text"
            id="searchnavbar"
            placeholder="Search Artists, songs, and albums"
            onChange={handleChange}
          />
          {searchList && (
            <div id="search-list-container">
              {searchList.map((song, index) => (
                <div key={index} id="search-list-item">
                  <img src={song.songImage} alt="" id="search-list-image" />
                  <p id="search-list-song-name">{song.songName}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div id="rightdiv" className="right-container">
          <div id="pnavbar">
          <p className="navbarwelcome">
            Welcome <span id="navbarusername">User</span>
          </p>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
