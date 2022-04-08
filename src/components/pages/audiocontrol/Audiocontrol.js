import { VolumeDown } from '@mui/icons-material'
import { Slider } from '@mui/material'
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

import React from 'react'
import './audiocontrol.css'
const Audiocontrol = () => {
    return (
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
    )
}

export default Audiocontrol
