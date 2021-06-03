import React from 'react';
import ReactDom from 'react-dom';

const ContactForm = ({ open, onClose }) => {

    if (!open) return null;

    return ReactDom.createPortal(
        <>
        <div className="contact-form">
        <button onClick={onClose}>close</button>
            Contact FORM test
        </div>
        </>,
        document.getElementById('portal')
    );
}

export default ContactForm;