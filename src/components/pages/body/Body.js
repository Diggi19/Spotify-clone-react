import React from 'react'
import './body.css'
import List from '../list/List'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import { useStateValue } from '../../context/StateProvider';
const Body = ({spotify}) => {
    const[{songs,userinfo},dispatch]= useStateValue()
    const default_cover = 'https://i.pinimg.com/originals/ae/be/75/aebe753918f245612d836fba87ad6006.png'
    console.log(songs)
    console.log(userinfo?.display_name.slice(0,7))
    return (
        <div className="body__container">
            <div className="body__topbar">
                <div className="topbar__btns">
                    <KeyboardArrowLeftRoundedIcon className="topbar__btnicon"/>
                    <KeyboardArrowRightRoundedIcon className="topbar__btnicon"/>
                    <input placeholder="search" className="search__bar"/>
                </div>
                <div className="topbar__user">
                    <Avatar
                        alt={userinfo?.display_name}
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 20, height: 20 }}
                    />
                    <p>{userinfo?.display_name.slice(0,7)}</p>
                    <ArrowDropDownIcon className="topbar__btndown"/>
                </div>
            </div>
            <div className="body__header">
                <div className="header__album">
                    {songs?.images ?<img src={songs?.images[0].url} alt="playing album"/>:<img src={default_cover} alt="playing album"/>}
                    
                    
                </div>
                <div className="header__text">
                    <h5>PLAYLIST</h5>
                    <h1>{songs?.name}</h1>
                    <h5>{songs?.description}</h5>
                </div>
            </div>
            <div className="body__select">
                <div className="body__controls">
                    <PlayCircleIcon className="body__play"/>
                    <FavoriteIcon className="body__fav"/>
                    <MoreHorizIcon className="body__more"/>

                </div>
                <div className="body__list">
                    {songs?.tracks?.items.map((item,i)=><List className="list__comp" key={i} index={i} info={item?.track?.album?.name} artist={item?.track?.artists[0]?.name} cover={item?.track?.album?.images[0]?.url} />).reverse()}
                    
                    



                </div>
            </div>
            
        </div>
    )
}

export default Body
