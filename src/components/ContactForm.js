import React from 'react';
import ReactDom from 'react-dom';
import ContactFormActual from './Form';
import close from '../images/close.svg';

const ContactForm = ({ open, onClose }) => {

    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay">
                <div className="contact-form">
                    <div style={{paddingLeft:'100%'}}>
                    <button onClick={onClose} className="close-button">
                        <img src={close} className="close-button" alt="close window"/>
                    </button>
                    </div>
                    
                    <h3 style={{ paddingTop: 20 }}>Have questions? Want a quote? Send me a message! </h3>
                    <ContactFormActual></ContactFormActual>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}

export default ContactForm;