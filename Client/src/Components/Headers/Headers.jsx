import React, { useState } from 'react';
import './Headers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMusic, faPodcast, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Headers = () => {
  const [expanded, setExpanded] = useState(true);
  const [login, setLogin] = useState(false);

  const toggleSidebar = () => {
    const mobileWidthThreshold = 800;
    const width = window.innerWidth

    // Check if the window width is less than the threshold
    if (window.innerWidth <= mobileWidthThreshold) {
      // Code to toggle the sidebar for mobile
      console.log('Mobile sidebar toggled');
    
      
      setExpanded(!expanded);
    } else {
      // Code to toggle the sidebar for larger screens
      console.log('Larger screens sidebar toggled');
      console.log(width)
    }


    
  };

  const setLoginOpen = (prev) => {
    setLogin((prev) => prev);
  };

  return (
    <div>
      <div className="container">
        <div id="leftdiv">
          {/* Sidebar with logo */}
          <div
            id="logosidebar"
            className={`sidebar ${expanded ? 'expanded' : ''}`}
            onClick={toggleSidebar}
          >

            <img
              src="./public/sidebaricon.png"
              alt="Logo"
              className="logo-img"
              onClick={toggleSidebar}
            />

            {/* Menu items */}
            {expanded && (
              <div>
                <ul id="menu">
                  <li id="sidebarlist"><FontAwesomeIcon icon={faPodcast} className='logofont' /> Login/Logout</li>
                  <li id="sidebarlist"><FontAwesomeIcon icon={faHouse} className='logofont' />Home</li>
                  <li id="sidebarlist"><FontAwesomeIcon icon={faMusic} className='logofont' />Music</li>
                  <li id="sidebarlist"><FontAwesomeIcon icon={faPodcast} className='logofont' /> Podcasts</li>
                </ul>
                <ul id="menu1">
                  <li id="sidebarlist"><FontAwesomeIcon icon={faPodcast} className='logofont' />Indian Music</li>
                  <li id="sidebarlist"><FontAwesomeIcon icon={faHouse} className='logofont' />English Songs</li>
                  <li id="sidebarlist"><FontAwesomeIcon icon={faMusic} className='logofont' />Malayalam Songs</li>
                  <li id="sidebarlist"><FontAwesomeIcon icon={faPodcast} className='logofont' /> Podcasts</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Headers;
