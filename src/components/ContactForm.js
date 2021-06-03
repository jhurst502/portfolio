import React from 'react';
import ReactDom from 'react-dom';

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
                    <h3 style={{paddingTop:20}}>Have questions? Want a quote? Send me a message! </h3>
                    <form name="contact v1" method="post" data-netlify="true" onSubmit="submit">
                        
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <input type="hidden" name="form-name" value="contact v1" />
                        
                        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <label >
                                Name
                            <input type="text" name="name" className="name-input" />
                            </label>
                        </div>
                        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <label >
                                Email
                            <input type="email" name="email" className="email-input" />
                            </label>
                        </div>
                        <div style={{ paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'column' }}>
                            <label style={{ justifySelf: 'flex-start' }}>
                                Message
                            <textarea type="textarea" name="message" className="message-input" />
                            </label>
                        </div>
                        <div style={{ paddingTop: 45, paddingBottom: 20, paddingLeft: 35, paddingRight:20}}>
                        <button className="send-button" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}

export default ContactForm;