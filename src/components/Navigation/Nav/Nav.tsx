import React, {useState} from 'react';
import logo4 from '../../../assets/explore/logo-4.png'
import { Link as Link, useLocation } from 'react-router-dom';
import './Nav.css';
import LangBox from './LangBox';

const Nav: React.FC=()=>{

  const location = useLocation();
  const [showLangBox, setShowLangBox] = useState<Boolean>(false);

  const isTransparent = location.pathname === '/' || location.pathname ==="/about";

  return (
    <nav className={`nav ${isTransparent && !showLangBox && 'transparent'}`}>
      <div className='navbar container'>
        <Link to='/' className="logo">
          <img src={logo4} alt="Zion Group logo" />
        </Link>
        <div className='nav-menu'>
          <ul className='nav-links'>
            <Link to='/'> 
              <li className="nav-link"> Home </li>
             </Link>   
            <li className='nav-link explore-menu'>
              <div> Explore</div>
              <ul className='explore-submenu'>
                <Link to='/explore/products'>
                  Explore All
                </Link>
                <Link to='/product/education'>
                  Education Panel
                </Link>
                <Link to='/product/panel'>
                  Professional Panel
                </Link>
                <Link to='/product/led'>
                  LED Display
                </Link>
                <Link to='/product/camera/panoramic'>
                  Camera
                </Link>
                <Link to='/product/wirelss-dongle'>
                  Dongle
                </Link>
                <Link to='/product/smart-lectern'>
                  Lectern
                </Link>
              </ul>
            </li>
            <Link to='/about'> 
              <li className="nav-link"> About us </li>
            </Link>  
            <Link to='/company/contact'> 
              <li className="nav-link"> Contact </li>
             </Link> 
          </ul>
          <LangBox setShowLangBox={setShowLangBox} showLangBox={showLangBox}/>
        </div>
      </div>
    </nav>
  )
}

export default Nav