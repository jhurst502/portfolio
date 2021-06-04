import React from 'react'
import { navigate } from 'gatsby-link'
import ContactForm from './ContactForm';


const ContactFormActual = ({hidden}) => {

    if (hidden === true) {
        return (
            <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field" style={{display:'none'}}
            >

                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />

                <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <label >
                        Name
                            <input type="text" name="name" className="name-input" />
                    </label>
                </div>
                <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <label >
                        Email
                            <input type="email" name="email" className="email-input"/>
                    </label>
                </div>
                <div style={{ paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'column' }}>
                    <label style={{ justifySelf: 'flex-start' }}>
                        Message
                            <textarea type="textarea" name="message" className="message-input" />
                    </label>
                </div>
                <div style={{ paddingTop: 45, paddingBottom: 20, paddingLeft: 35, paddingRight: 20 }}>
                    <input className="send-button" type="submit" value="Send" />
                </div>
            </form>
    );

    }
    return (
            <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >

                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />

                <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <label >
                        Name
                            <input type="text" name="name" className="name-input" />
                    </label>
                </div>
                <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <label >
                        Email
                            <input type="email" name="email" className="email-input"/>
                    </label>
                </div>
                <div style={{ paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'column' }}>
                    <label style={{ justifySelf: 'flex-start' }}>
                        Message
                            <textarea type="textarea" name="message" className="message-input" />
                    </label>
                </div>
                <div style={{ paddingTop: 45, paddingBottom: 20, paddingLeft: 35, paddingRight: 20 }}>
                    <input className="send-button" type="submit" value="Send" />
                </div>
            </form>
    );
}

export default ContactFormActual;