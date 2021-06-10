import React from 'react';

const Footer = () => {
    const today = new Date();
    let year = today.getFullYear();
    return (
        <footer className="footer">
            <p>© Justin Hurst {year}</p>
        </footer>
    );
}

export default Footer;