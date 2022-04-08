import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Body from '../body/Body'
import Sidebar from '../siderbar/Sidebar'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AirplayIcon from '@mui/icons-material/Airplay';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

import './Main.css'
import { VolumeDown } from '@mui/icons-material';
import { Slider } from '@mui/material';
import Audiocontrol from '../audiocontrol/Audiocontrol';


const Main = ({spotify}) => {
    const[isPlaying,setisPlaying] = React.useState(true)
    const handlePlay = ()=>{
        if (isPlaying) {
            setisPlaying(false)
        }else{
            setisPlaying(true)
        }
    }
    return (
        <div className="main__container">
            <div className="main__body">
                <div className="main__menubar">
                    <Sidebar/>
                </div>
                <div className="main__songs">
                    <Body spotify={spotify}/>
                
                </div>
            </div>
            <div className="main__footer">
                <div className="footer__left">
                    <img src="https://th.bing.com/th/id/R.7387e0705afe0d5f7899079cad5efdb4?rik=jvlINdJlUb9qAA&riu=http%3a%2f%2fimg.cdn2.vietnamnet.vn%2fImages%2fenglish%2f2016%2f11%2f26%2f23%2f20161126232026-1.jpg&ehk=4DkwjAZJfOo3RBJjjiJ%2bPEVw7zlbhPbDIJY55F143Hc%3d&risl=&pid=ImgRaw&r=0" alt="playing album"/>
                    <div className="footerleft__content">
                        <h4>imagegood</h4>
                        <h5>really whatever</h5>
                    </div>
                    <div className="left__iconholder">
                        <FavoriteBorderIcon className="left__icons"/>
                        <AirplayIcon className="left__icons"/>
                    </div>
                </div>
                <div className="footer__center">
                    <ShuffleIcon className="footer__icons"/>
                    <SkipPreviousIcon className="footer__icons"/>
                    {isPlaying?<PauseCircleFilledIcon onClick={handlePlay} className="footer__icons footer__play"/>:<PlayCircleFilledIcon onClick={handlePlay} className="footer__icons footer__play"/>}
                    <SkipNextIcon className="footer__icons"/>
                    <RepeatIcon className="footer__icons"/>
                </div>
                <div className="footer__right">
                    <div className="audiocontrol__container">
                    <QueueMusicIcon className="footer__icons"/>
                    <VolumeDown className="footer__icons"/>
                    <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                    />
        </div>
                </div>

            </div>
            
        </div>
    )
}

export default Main
