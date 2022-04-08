import React from 'react'
import './playlistsongs.css'
const PlaylistSongs = ({playlistItem}) => {
    return (
        <div className="playlistsongs__container">
            <h5>{playlistItem}</h5>
        </div>
    )
}

export default PlaylistSongs
