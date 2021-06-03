import React from 'react'
import { navigate } from 'gatsby-link'
import ContactForm from './ContactForm';

// function encode(data) {
//     return Object.keys(data)
//         .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//         .join('&')
// }

// export default function ContactFormActual() {
//     const [state, setState] = React.useState({})

//     const handleChange = (e) => {
//         setState({ ...state, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const form = e.target
//         fetch('/', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//             body: encode({
//                 'form-name': form.getAttribute('name'),
//                 ...state,
//             }),
//         })
//             .then(() => navigate(form.getAttribute('action')))
//             .catch((error) => alert(error))
//     }
const ContactFormActual = () => {


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