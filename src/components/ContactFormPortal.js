import React from 'react';
import ReactDom from 'react-dom';
import ContactForm from './Form';
import close from '../images/close.svg';

const ContactFormPortal = ({ open, onClose }) => {

    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay">
                <div className="contact-form">
                    <div style={{paddingLeft:'100%'}}>
                    <button onClick={onClose} className="close-button">
                        <img src={close} className="close-button-img" alt="close window"/>
                    </button>
                    </div>
                    
                    <h3 style={{ paddingTop: 20 }}>Have questions? Want a quote? Send me a message! </h3>
                    <ContactForm />
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}

export default ContactFormPortal;