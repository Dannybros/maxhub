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
      <Link to ='/company/contact' className='contact-icon'>
        <div className="contact-icon-text">
          {t("product.icon")}
        </div>
        <GrContact/>
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
            {t("product.contact.phone")} <span className='highlighter'>+8562098898818</span> 
          </p>
          <Link to ='/company/contact'>{t("product.contact.link")}</Link>
        </div>
      </div>
    </div>
  )
}

export default Product