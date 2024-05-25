import '../styles/Contact.css'
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
    return ( 
        <><div className="contact-wrapper">
            <div className='contact'>
                <h1> Get in Touch<br/><FaPhoneAlt /></h1>
                <p>Want to get in touch?<br/> We'd love to hear from you. Here's how you can reach us.</p>
                <a href=''style={{textDecoration:"none"}}>Toll free number: +11 111 1111 111</a>
            </div>
            
        </div>
        </>
     );
}

export default Contact;