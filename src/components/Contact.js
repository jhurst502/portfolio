import React from 'react';
import SVG from '../../src/images/ContactTop.svg';

import LogoGitHub from '../../src/images/GitHub.svg';
import LogoLinkedIn from '../../src/images/LinkedIn.svg';
import LogoTwitter from '../../src/images/Twitter.svg';

const Contact = () => {

    return (
        <div className="contact" id="contact">
            <div>
                <img className="contact-top" src={SVG}></img>
            </div>
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-text">or connect with me on these platforms</p>
            <div className="social-container">
                <a href="https://github.com/jhurst502" ><img className="social-github" src={LogoGitHub}/></a>
                <a href="https://www.linkedin.com/in/justin-s-hurst/" ><img className="social-icon" src={LogoLinkedIn}/></a>
                <a href="https://twitter.com/jhurst502" ><img className="social-icon" src={LogoTwitter}/></a>
            </div>
        </div>
    )
}

export default Contact;