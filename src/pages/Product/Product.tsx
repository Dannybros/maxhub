import React, {useEffect} from 'react'
import './Product.css'
import { Outlet, Link } from 'react-router-dom'
import { GrContact } from "react-icons/gr";
import { TiArrowBack } from "react-icons/ti";
import { useTranslation } from 'react-i18next';

const Product:React.FC=()=> {
  const {t} = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Link to ='/company/contact' className='btn-to-contact'>
        <div className="contact-icon-text">
          {t("product.icon")}
        </div>
        <div className='contact-icon'>
          <GrContact/>
        </div>
        <TiArrowBack className="arrow-icon"/>
      </Link>
      <Outlet/>
      <div className='product-interest container'>
        <div className='product-contact'>
          <h2 className='font-subheader'>
            {t("product.contact.title")}
          </h2>
          <p>
            {t("product.contact.desc")} <br/>
            {t("product.contact.email")}<span className='highlighter'>sales@maxhub.com </span> <br/>
            {t("product.contact.phone")} <span className='highlighter'>+8562097771567</span> 
          </p>
          <Link to ='/company/contact'>{t("product.contact.link")}</Link>
        </div>
      </div>
    </div>
  )
}

export default Product