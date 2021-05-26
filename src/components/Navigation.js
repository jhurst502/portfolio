import React from 'react';
import '../style.css';
import * as Scroll from 'react-scroll';

const Navigation = () => {
    let Link = Scroll.Link;
    let Element = Scroll.Element;
    let Events = Scroll.Events;
    let scroll = Scroll.animateScroll;
    let scrollSpy = Scroll.scrollSpy;

    return (
        <div className="container-nav">
            <nav className="nav">
                <ul>
                    <li><Link to="home" smooth={true} spy={true}>Home</Link></li>
                    <li><Link to="about" smooth={true} spy={true}>About</Link></li>
                    <li><Link to="work" smooth={true} spy={true}>Work</Link></li>
                    <li><Link to="contact" smooth={true} spy={true}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;