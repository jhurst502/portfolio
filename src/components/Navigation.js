import React, { useState } from 'react';
import '../style.css';
import * as Scroll from 'react-scroll';
import NavToggle from './NavToggle';


const Navigation = () => {

    const [opened, setOpened] = useState(true);

    let Link = Scroll.Link;

    return (
        <div className="container-nav">
            <NavToggle opened={opened} setOpened={setOpened}></NavToggle>
            {opened &&
                <nav className="nav">
                <ul>
                    <li><Link to="home" smooth={true} spy={true}>Home</Link></li>
                    <li><Link to="about" smooth={true} spy={true}>About</Link></li>
                    <li><Link to="work" smooth={true} spy={true} offset={95}>Work</Link></li>
                    <li><Link to="contact" smooth={true} spy={true}>Contact</Link></li>
                </ul>
            </nav>
            }
            
        </div>
    )
}

export default Navigation;