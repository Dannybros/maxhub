import React, {useEffect} from 'react'
import './Product.css'
import { Outlet, Link } from 'react-router-dom'
import { GrContact } from "react-icons/gr";
import { TiArrowBack } from "react-icons/ti";

const Product:React.FC=()=> {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Link to ='/company/contact' className='contact-icon'>
        <div className="contact-icon-text">
          Contact Sale
        </div>
        <GrContact/>
        <TiArrowBack className="arrow-icon"/>
      </Link>
      <Outlet/>
      <div className='product-interest container'>
        <div className='product-contact'>
          <h2 className='font-subheader'>Interested in our product?</h2>
          <p>
            Get in touch with a member of our sales team <br/>
            by emailing <span className='highlighter'>sales@maxhub.com </span> <br/>
            by phone <span className='highlighter'>+8562098898818</span> 
          </p>
          <Link to ='/company/contact'> Go to Contact Page</Link>
        </div>
      </div>
    </div>
  )
}

export default Product