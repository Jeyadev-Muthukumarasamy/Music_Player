import React from 'react';
import "./Songs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faList } from '@fortawesome/free-solid-svg-icons';

const Songs = () => {
  return (
    <div id="slheadcontainer">
      <div id="slheadcontainerone">
        <div id="slheadimagecontainer">
          <img src="../public/loginpage.jpg" alt="" id="slheadimage" />
        </div>
        <div id="slheaddetails">
          <p id="slheadname">Closer</p>
          <p id="slheadsingername">Anne Marie</p>
          <button id="slheadplaypause">Play</button>
        </div>
        <div id="slheadicons">
          <ul id="slheadul">
            <li id="slheadli"><FontAwesomeIcon icon={faHeart} size="xl" /></li>
            <li id="slheadli"><FontAwesomeIcon icon={faList} size="xl" /></li>
          </ul>
        </div>
      </div>
      <div id="slheadsongcontainer"></div>
    </div>
  );
};

export default Songs;
