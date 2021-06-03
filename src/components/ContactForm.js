import React from 'react';
import ReactDom from 'react-dom';
import ContactFormActual from './Form';

const ContactForm = ({ open, onClose }) => {

    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay">
                <div className="contact-form">
                    <button onClick={onClose} className="close-button">
                        <svg viewPort="0 0 12 12" version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <line x1="1" y1="15"
                                x2="15" y2="1"
                                stroke="black"
                                stroke-width="2" />
                            <line x1="1" y1="1"
                                x2="15" y2="15"
                                stroke="black"
                                stroke-width="2" />
                        </svg>
                    </button>
                    <ContactFormActual></ContactFormActual>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}

export default ContactForm;