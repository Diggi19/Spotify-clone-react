import React from 'react'
import './navoptions.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
const NavOptions = ({title,Icons}) => {
    return (
        <div className="navoptions__container">
            <div className="navoptions__content">
                <Icons className="navoptions__icons"/>
                <h3>{title}</h3>

            </div>
        </div>
    )
}

export default NavOptions
