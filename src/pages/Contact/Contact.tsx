import { FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import building from '../../assets/contact/building.jpeg';
import './Contact.css';

const Contact: React.FC=()=> {
  return (
    <div>
        <div className="contact-header">
            <div className='contact-header-msg container'>
                <h1>Get in touch</h1>
                <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>
            </div>
            <div className='contact-header-img'/>
        </div>
        <div className='container'>
            <div className="contact-box-wrapper">
                <div className='contact-box'>
                    <FaPhone className="icon"/>
                    <span><b>Talk to Sales</b></span>
                    <span>Interested in Our products? Just pick up the phone to chat with a member of our sales team.</span>
                    <a href="tel:+8562098898818">
                        <span>+856 20 98898818</span>
                    </a>
                </div>
                <div className='contact-box'>
                    <MdAttachEmail className="icon"/>
                    <span><b>Send us Email</b></span>
                    <span>If calling is uncomfortable for you, you can always contact us via email. We’re always here for you.</span>
                    <a href="mailto:neo-99999@gmail.com">
                        <span>neo-99999@gmail.com</span>
                    </a>
                </div>
            </div>
            <div className="location-box">
                <h1>Connect with our office</h1>
                <div className="building-element">
                    <img src={building} alt="Company building" />
                    <div className="building-info">
                        <h3>Vientiane (Headquarter)</h3>
                        <p>
                            <strong>Address</strong>
                            <br />
                            60 Anson Road
                            <br/>
                            Mapletree Anson, #10-03
                            <br/>
                            Vientiane 079914
                        </p>
                        <p>
                            <strong>Phone</strong>
                            <br />
                            <strong>1: &nbsp; </strong>+856 020 97771567
                            <br/>
                            <strong>2: &nbsp; </strong>+856 20 98898818
                        </p>
                    </div>
                </div> 
                <div>
                    <iframe className="location-map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d948.783658138597!2d102.5789444!3d17.9724722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU4JzIwLjkiTiAxMDLCsDM0JzQ0LjIiRQ!5e0!3m2!1sen!2sla!4v1702266280334!5m2!1sen!2sla" loading="lazy" 
                    allowFullScreen></iframe>
                </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Contact