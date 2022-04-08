import React from 'react'
import { loginurl } from '../../../spotify'
import './Login.css'
const Login = () => {
    return (
        <div className="login__container">
            <div className="login__logo">
                <img src="https://th.bing.com/th/id/R.33229ce52debfa7f044769306541e1ee?rik=5eVCSP9G8MgLPA&riu=http%3a%2f%2fmedia.idownloadblog.com%2fwp-content%2fuploads%2f2016%2f06%2fSpotify_logo_horizontal_black.jpg&ehk=z9ClqCYg7MldmX8d1MAegCslS%2bAN0VU4sUH51qVgbjM%3d&risl=&pid=ImgRaw&r=0" alt="spotify-logo"/>
            </div>
            <div className="login__button">
                
                <button className="login__btn" ><img src="https://th.bing.com/th/id/R.da6733251d6ed7d58358446c0c5ae037?rik=982VbYW4HE09lQ&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f08%2fSpotify-Logo.png&ehk=Gcl8lyv0FdI4gDVyKLmVCVfNf8yc1xDmAvEDyPzt8Bk%3d&risl=&pid=ImgRaw&r=0" alt="button logo"/><a href={loginurl}>Login with spotify</a></button>
            </div>
        </div>
    )
}

export default Login
