import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedinIn} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FullScreenProps } from "./Header";
import { useTranslation } from "react-i18next";
import './Footer.css'

const footerLink=[
  {
    links:[
      { url:"/about"},
      { url:"/company/contact"},
    ]
  },
  {
    links:[
      { url:"/product/education"},
      { url:"/product/led"},
      { url:"/product/panel"}
    ]
  },
  {
    links:[
      { url:"/product/camera"},
      { url:"/product/wireless-dongle"},
      { url:"/product/smart-lectern"}
    ]
  },
]

function Footer({fullScreen = false}:FullScreenProps) {
  const {t} = useTranslation();

  
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
                {t(`footer.links.link${i+1}.title`)}
              </h3>
              <ul className='item font-small' data-menu-section="About Company">
                {item.links.map((link, j)=>(
                  <li key={j}> 
                    <Link to={link.url}>
                      {t(`footer.links.link${i+1}.sublink${j+1}`)} 
                    </Link>
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
              <Link to="https://web.facebook.com/people/Zion-Electronic/61554638221056/" target="_blank" rel="noopener noreferrer">
                <li> <FaFacebookF/> </li>
              </Link>
              <Link to="https://www.youtube.com/@MAXHUB" target="_blank" rel="noopener noreferrer">
                <li> <FaYoutube/> </li>
              </Link>
              <Link to="https://www.linkedin.com/company/maxhub-overseas/" target="_blank" rel="noopener noreferrer">
                <li> <FaLinkedinIn/> </li>
              </Link>
              <Link to="https://twitter.com/MAXHUB_Global" target="_blank" rel="noopener noreferrer">
                <li> <FaXTwitter/> </li>
              </Link>
              <Link to="mailto:sales@aqsiqexpert@163.com">
                <li> <IoMdMail/> </li>
              </Link>
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