import React from 'react';
import './Contact.css'; 
import Rive from '@rive-app/react-canvas';

const ContactMe = () => {
    return (
        <div id="contact" className="contact-container">
            <div className="left-div">
                <div className="contact-info">
                    <h1>Contact Me</h1>
                    <div className="social-links">
                        <a href="https://www.instagram.com/just_atharv.things/"><span className="logos"><img src="/instagram.png" id='insta' alt="Instagram" /> <h3>Instagram</h3></span></a>
                        <a href="https://www.linkedin.com/in/atharv-sanjay-jain-33b57727a/"><span className='logos'><img src="LinkedIn.png" alt="LinkedIn" /><h3>LinkedIn</h3></span></a>
                        <a href="mailto:atharv.23bcs10113@ms.sst.scaler.com"><span className='logos'><img src="mail.png" alt="Email" /><h3>E-mail</h3></span></a>
                    </div>
                </div>
                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message" rows="5" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className="right-div">
                <Rive
                    style={{ width: 400, height: 400 }}
                    src="404_cat.riv"
                    stateMachines="State Machine 1"
                />
            </div>
        </div>
    );
}

export default ContactMe;
