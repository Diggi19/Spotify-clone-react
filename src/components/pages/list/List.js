import React from 'react'
import './list.css'
const List = ({index,info,artist,cover}) => {
    console.log(info)
    return (
        <div className="list__container">
            {/* <h3>{index=index + 1 }</h3> */}
            <img src={cover} alt="song_poster"/>
            <h3>{info?info:"some song"} <small>({artist})</small> </h3>
        </div>
    )
}

export default List
