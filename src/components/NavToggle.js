import React, { useEffect, useState } from 'react';
import toggleIcon from '../images/NavToggleButton.json';
import lottie from 'lottie-web';

const NavToggle = ({opened, setOpened}) => {

    let toggle = React.createRef();

    

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
        <button ref={toggle} className="toggle-button" onClick={handleClick}></button>
    )
}

export default NavToggle;