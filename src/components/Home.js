import React from 'react';
import Navigation from './Navigation';
import '../style.css';
import Avatar from '../../src/images/AvatarBW.png';
import MountainSVG from '../../src/images/Test1.svg';

const Home = () => {

    return (
        <div className="home" id="home">
            <div className="container-text">
                <h3 className="subtext">Hi, my name is </h3>
                <h1 className="justin">Justin Hurst</h1>
            </div>
            <div className="container-avatar">
                <img src={Avatar} className="avatar-image" alt=""></img>
            </div>
            <img src={MountainSVG} className="mountains" alt=""></img>
        </div>

    )
}

export default Home;