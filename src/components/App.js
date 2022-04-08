import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromUrl } from '../spotify'
import '../style.css'
import { useStateValue } from './context/StateProvider'
import Login from './pages/loginpage/Login'
import Main from './pages/mainpage/Main'
const App = () => {
    const[{userinfo,token},dispatch] = useStateValue()
    const spotify = new SpotifyWebApi()
    
    React.useEffect(()=>{
       const hash =  getTokenFromUrl()
       window.location.hash=""
       const token = hash?.access_token

       if (token) {
           dispatch({
               type:"SET_TOKEN",
               token:token
           })
           spotify.setAccessToken(token)
           
           spotify.getMe().then((person)=>dispatch({
               type:"SET_USER",
               user:person
           }))
           spotify.getUserPlaylists()
            .then((playlist)=>dispatch({
                type:"SET_PLAYLIST",
                userPlaylist:playlist
            }))
            
            spotify.getPlaylist('5sRj62Jy3vD5WZ4yWRhzU0')
                .then((result)=>dispatch({
                    type:"SET_SONGS",
                    songs:result
                }))
            
       }
       
       
    },[])
    console.log("inside data layer",userinfo,"token iside data layer",token)
    return (
        <div className="app">
            {token? <Main spotify={spotify} />:<Login />}
            
            {/* spotify logo
            login button */}
        </div>
    )
}

export default App
