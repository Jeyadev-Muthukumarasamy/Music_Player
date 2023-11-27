import React from 'react'
import Headers from '../../Components/Headers/Headers'
import Playlist from '../../Components/Playlist/Playlist'
import Queue from '../../Components/Queue/Queue'
import "./Playlistsongs.css"
import Playlistsongs from '../../Components/Playlistsongs/Playlistsongs'


const Playlistsongslink = () => {
  return (
    <div id="playlistsongsscontainer">
        <div id="playlistsongscontainerheader">
            <Headers />

        </div>
        <div id="playlistsongscontainersongs">
            {/* <h1>verify</h1> */}
            <Playlistsongs />

        </div>
        <div id="playlistsongscontainerqueue">
            <Queue />

        </div>
      
    </div>
  )
}

export default Playlistsongslink
