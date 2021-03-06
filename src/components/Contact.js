import React, { useState } from 'react';

import LogoGitHub from '../../src/images/GitHub.svg';
import LogoLinkedIn from '../../src/images/LinkedIn.svg';
import LogoTwitter from '../../src/images/Twitter.svg';
import ContactFormPortal from './ContactFormPortal';

const Contact = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="contact" id="contact">
            <button className="contact-button" onClick={() => setIsOpen(true)}>Get In Touch</button>
            <p className="contact-text">(or connect with me on these platforms)</p>
            <div className="social-container">
                <a href="https://github.com/jhurst502" ><img className="social-github" src={LogoGitHub}/></a>
                <a href="https://www.linkedin.com/in/justin-s-hurst/" ><img className="social-icon" src={LogoLinkedIn}/></a>
                <a href="https://twitter.com/jhurst502" ><img className="social-icon" src={LogoTwitter}/></a>
            </div>

            <ContactFormPortal open={isOpen} onClose={() => setIsOpen(false)}></ContactFormPortal>
        </div>
    )
}

export default Contact;