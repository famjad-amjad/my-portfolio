import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { contact } from '../portfolio'
import '../styles/Contact.css'


const Contact = () => {
    if (!contact)
        return null

    return (
        <section className="contact" id="contact">
            <p className="section-title">Contact</p>
            <p className="contact-header">{contact.intro}</p>
            <div className="social-icons">
                <a href={`mailto:${contact.email}`} className="icon">
                    <MdEmail />
                </a>

                <a href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon">
                    <FaLinkedin />
                </a>
            </div>


        </section>
    )
}

export default Contact