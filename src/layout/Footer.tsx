import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
import { IoMdMail } from "react-icons/io";
import { FullScreenProps } from "./Header";
import { useTranslation } from "react-i18next";
import './Footer.css'


function Footer({fullScreen = false}:FullScreenProps) {
  const {t} = useTranslation();
  
  const footerLink=[
    {
      title:t("footer.links.link1.title"),
      links:[
        {
          title:t("footer.links.link1.sublink1"),
          url:"/about"
        },
        {
          title:t("footer.links.link1.sublink2"),
          url:"/company/contact"
        },
      ]
    },
    {
      title:t("footer.links.link2.title"),
      links:[
        {
          title:t("footer.links.link2.sublink1"),
          url:"/product/education"
        },
        {
          title:t("footer.links.link2.sublink2"),
          url:"/product/led"
        },
        {
          title:t("footer.links.link2.sublink3"),
          url:"/product/panel"
        }
      ]
    },
    {
      title:t("footer.links.link3.title"),
      links:[
        {
          title:t("footer.links.link3.sublink1"),
          url:"/product/camera"
        },
        {
          title:t("footer.links.link3.sublink2"),
          url:"/product/wireless-dongle"
        },
        {
          title:t("footer.links.link3.sublink3"),
          url:"/product/smart-lectern"
        }
      ]
    },
  ]
  
  const location = useLocation();
  if(!fullScreen && location.pathname === '/explore/products') return;

  return (
    <div className="footer">
      <div className="container">
        <div className='footer-intro'>
          <h1 className="font-header">
            {t("footer.title")}
          </h1>
          <p>
            {t("footer.desc")}
          </p>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-menu">
          {footerLink.map((item, i)=>(
            <div className='footer-menu-item' key={i}>
              <h3 className='item-title'>
                {item.title}
              </h3>
              <ul className='item font-small' data-menu-section="About Company">
                {item.links.map((link, i)=>(
                  <li key={i*100}> 
                    <Link to={link.url}>{link.title} </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className='footer-menu-item'>
            <h3 className='item-title'>
              {t("footer.links.link4")}
            </h3>
            <ul className='media-lists font-subheader' data-menu-section="social medias">
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
        &copy; {t("footer.copyright")}
      </div>
    </div>
  )
}

export default Footer