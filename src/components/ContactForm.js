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
                    <button onClick={onClose} className="close-button">
                        <img src={close} alt="close window"/>
                    </button>
                    <h3 style={{ paddingTop: 20 }}>Have questions? Want a quote? Send me a message! </h3>
                    <ContactFormActual></ContactFormActual>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}

export default ContactForm;