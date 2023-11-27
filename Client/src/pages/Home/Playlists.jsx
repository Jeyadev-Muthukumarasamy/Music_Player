import React from 'react'
import Playlistsongs from '../../Components/Playlistsongs/Playlistsongs'
import "./Playlists.css"
import Headers from '../../Components/Headers/Headers'
import Playlist from '../../Components/Playlist/Playlist'
import Queue from '../../Components/Queue/Queue'
import Playlistinput from '../../Components/Playlistinput/Playlistinput'

const Playlists = () => {
  return (
    <div id="playlistscontainer">
      <div id="playlistscontainerheader">
        <Headers />
      </div>
      <div id="playlistscontainerplaylist">
        <Playlistinput /> 
        <div id="mode">
        <Playlist />

        </div>
          
      </div>
      <div id="playlistscontainerqueue">
        <Queue />
      </div>

   
      
    </div>
  )
}

export default Playlists
