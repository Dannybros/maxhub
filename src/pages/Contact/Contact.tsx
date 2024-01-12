import React, { useEffect } from 'react';
import { FaInstagram, FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandWechat } from "react-icons/tb";
import { useTranslation } from 'react-i18next';
import building from '../../assets/contact/building.jpeg';
import './Contact.css';

const Contact: React.FC=()=> {
    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div>
        <div className="contact-header">
            <div className='contact-header-msg container'>
                <h1 className="font-header">
                    {t("contact.hero.title")}
                </h1>
                <p>{t("contact.hero.desc")}</p>
            </div>
            <div className='contact-header-img'/>
        </div>
        <div className='container'>
            <div className="contact-box-wrapper">
                <div className='contact-box'>
                    <FaPhone className="icon"/>
                    <span><b>
                        {t("contact.contactList.list1.title")}
                    </b></span>
                    <span>
                        {t("contact.contactList.list1.desc")}
                    </span>
                    <a href="tel:+8562097771567">
                        <span>+856 20 97771567</span>
                    </a>
                </div>
                <div className='contact-box'>
                    <MdAttachEmail className="icon"/>
                    <span><b>
                        {t("contact.contactList.list2.title")}
                    </b></span>
                    <span>
                        {t("contact.contactList.list2.desc")}
                    </span>
                    <a href="mailto:neo-99999@gmail.com">
                        <span>neo-99999@gmail.com</span>
                    </a>
                </div>
                <div className='contact-box social'>
                    <IoPhonePortrait className="icon"/>
                    <span><b>
                        {t("contact.contactList.list3.title")}
                    </b></span>
                    <ul className='social-contacts font-subheader' data-menu-section="social medias">
                        <a href="#">
                            <li> <RiMessengerLine/> </li>
                        </a>
                        <a href="#"> 
                            <li><FaInstagram/></li>
                        </a> 
                        <a href="#">
                            <li> <FaWhatsapp/> </li>
                        </a>
                        <a href="#">
                            <li> <TbBrandWechat /> </li>
                        </a>
                        <a href="#">
                            <li> <FaXTwitter /> </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="location-box">
                <h1>{t("contact.location.title")}</h1>
                <div className="building-element">
                    <img src={building} alt="Company building" />
                    <div className="building-info">
                        <h3 className="font-subheader">
                            {t("contact.location.branch")}
                        </h3>
                        <p>
                            <strong>
                                {t("contact.location.addressTitle")}
                            </strong>
                            <br />
                            {t("contact.location.address1")}
                            <br/>
                            {t("contact.location.address2")}
                            <br/>
                            {t("contact.location.address3")}
                        </p>
                        <p>
                            <strong>{t("contact.location.phoneTitle")}</strong>
                            <br />
                            <strong>1 : &nbsp; </strong>+856 20 2829 5659
                            <br/>
                            <strong>2: &nbsp; </strong>+856 20 9889 8818
                            <br/>
                            <strong>3: &nbsp; </strong>+856 20 9889 8818
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