import React from 'react'
import NavOptions from '../navs/NavOptions'
import './siderbar.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlaylistSongs from '../playlistsongs/PlaylistSongs';
import { useStateValue } from '../../context/StateProvider';
const Sidebar = () => {
    const[{playlist},dispatch]= useStateValue()
    console.log(playlist,"😁")
    return (
        <div className="sidebar__container">
            <div className="sidebar__logo">
                <img src="https://earlklugh.com/july29/wp-content/uploads/2019/08/logo-spotify.jpg" alt="side logo"/>
            </div>
            <div className="sidebar__navs">
                <NavOptions title="Home" Icons={HomeIcon}/>
                <NavOptions title="Search" Icons={SearchIcon}/>
                <NavOptions title="Your Library" Icons={LibraryMusicIcon} />

            </div>
            <div className="sidebar__playlist">
                <h4>PLAYLISTS</h4>
                <div className="underline"></div>
                <div className="sidebar__singles">
                    {playlist?.items?.map((singlelist)=><h5>{singlelist?.name}</h5>)}
                </div>                


            </div>


            
        </div>
    )
}

export default Sidebar
