import {React, useState} from 'react';
import './Contact.scss';

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className='contact' id="contact">
            <div className="left">
                <h1>Contact me</h1>
                <p>Fill up the form and I will get back to you within 24 hours.</p>
                <ul>
                    <li><i class="fas fa-phone-alt"></i>+91-6205323208</li>
                    <li><i class="fab fa-whatsapp"></i>+91-7892914721</li>
                    <li><i class="fas fa-envelope"></i>abhishekkeshri@live.com</li>
                </ul>

                <div className="social">
                    <div className="social-item">
                        <a href="https://twitter.com/Keshriabhi001" target='_blank' rel='noreferrer'><i className="fab fa-twitter"></i>Twitter</a>
                    </div>
                    <div className="social-item">
                        <a href="https://www.linkedin.com/in/keshriabhishek/" target='_blank' rel='noreferrer'><i className="fab fa-linkedin-in"></i>Linkedin</a>
                    </div>
                    <div className="social-item">
                        <a href="https://dribbble.com/keshriabhi/" target='_blank' rel='noreferrer'><i className="fab fa-dribbble"></i>Dribbble</a>
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}
