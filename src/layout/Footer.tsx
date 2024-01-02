import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
import { IoMdMail } from "react-icons/io";
import { FullScreenProps } from "./Header";
import './Footer.css'

function Footer({fullScreen = false}:FullScreenProps) {
  const location = useLocation();
  if(!fullScreen && location.pathname === '/explore/products') return;

  return (
    <div className="footer">
      <div className="container">
        <div className='footer-intro'>
          <h1>About Zion Company</h1>
          <p>
            Maxhub's interactive panels redefine collaboration in both professional and educational spheres. We showcase not just devices but
            gateways to seamless communication and dynamic engagement. Our mission is to unlock collaborative possibilities, enabling teams and
            classrooms to connect effortlessly, whether across the room or across the globe.
          </p>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-menu">
          <div className='footer-menu-item'>
            <h3 className='item-title'>
              Company
            </h3>
            <ul className='item' data-menu-section="About Company">
              <li>New Features</li>
              <li>About Us</li>
              <li>Teams</li>
            </ul>
          </div>
          <div className='footer-menu-item'>
            <h3 className='item-title'>
              Quick Links
            </h3>
            <ul className='item' data-menu-section="About Company">
              <li>New Features</li>
              <li>About Us</li>
              <li>Teams</li>
            </ul>
          </div>
          <div className='footer-menu-item'>
            <h3 className='item-title'>
              News & Stories
            </h3>
            <ul className='item' data-menu-section="News & Stories">
              <li>Stories</li>
              <li>
                <NavLink to="/about#awards">Awards & Recognitions</NavLink>
              </li>
            </ul>
          </div>
          <div className='footer-menu-item'>
            <h3 className='item-title'>
              Get connected with Us
            </h3>
            <ul className='media-lists' data-menu-section="social medias">
              <li> <FaFacebookF/> </li>
              <li> <FaYoutube/> </li>
              <li> <FaInstagram/> </li>
              <li> <FaTiktok/> </li>
              <li> <IoMdMail/> </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        &copy; 2023 Zion Ltd. All rights reserved.
      </div>
    </div>
  )
}

export default Footer