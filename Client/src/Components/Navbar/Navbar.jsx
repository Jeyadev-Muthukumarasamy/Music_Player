import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <div id="centerdiv">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#8c8c8c" }} className='searchicon' />
          <input type="text" id="search" placeholder="Search Artists, songs, and albums" />
        </div>

        <div id="rightdiv">
          
          <Link to="/signup">
            <button className="login" >Sign Up</button>
          </Link>
          <Link to = "/login">
          <button className="login" >login</button>

          </Link>
          


          <button className="logout">Logout</button>
        </div>
      
    </div>
  )
}

export default Navbar
