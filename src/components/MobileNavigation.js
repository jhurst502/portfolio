import React, { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import toggleIcon from '../images/NavToggleButton.json';
import lottie from 'lottie-web';

const MobileNavigation = () => {

    const [opened, setOpened] = useState(false);

    let toggle = React.createRef();
    let Link = Scroll.Link;

    useEffect(() => {
        const toggleButton = lottie.loadAnimation({
            loop: false,
            autoplay: false,
            container: toggle.current,
            animationData: toggleIcon
        });
        return () => toggleButton.destroy();
    }, [])

    function handleClick() {
        lottie.play();
        if (!opened) {
            lottie.setDirection(1);
            setOpened(true);
        }
        else {
            lottie.setDirection(-1);
            setOpened(false);
        }
    }


    return (
        <div className="navigation-mobile">
            <div className="mobile-container">
                <button ref={toggle} className="toggle-button" onClick={handleClick}></button>

                {opened && <nav className="nav-mobile">
                    <ul>
                        <li><Link to="home" smooth={true} spy={true} onClick={handleClick}>Home</Link></li>
                        <li><Link to="about" smooth={true} spy={true} onClick={handleClick}>About</Link></li>
                        <li><Link to="work" smooth={true} spy={true} offset={95} onClick={handleClick}>Work</Link></li>
                        <li><Link to="contact" smooth={true} spy={true} onClick={handleClick}>Contact</Link></li>
                    </ul>
                </nav>}
            </div>
        </div>
    )
}

export default MobileNavigation;