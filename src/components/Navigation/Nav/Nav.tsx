import React, {useState} from 'react';
import './Nav.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { productLink } from './ExploreLinks';
import LangBox from './LangBox';
import logo4 from '../../../assets/explore/logo-4.png'
import { useTranslation } from 'react-i18next';

const Nav: React.FC=()=>{
  const {t} = useTranslation();

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

            <NavLink to='/'> 
              <li className="nav-link"> 
                {t('nav.menu1')} 
              </li>
             </NavLink> 

            <li className='nav-link explore-menu'>
              <div> 
                {t('nav.menu2')} 
              </div>
              <ul className='explore-submenu'>
                <Link to='/explore/products'>
                  {t(`nav.submenu.submenu1`)}
                </Link>
                {productLink.map((menu, i)=>(
                  <Link to={menu.link} key={i}>
                    <img src={menu.icon} alt="" />
                    {t(`nav.submenu.submenu${i+2}`)}
                  </Link>
                ))}
              </ul>
            </li>

            <Link to='/about'> 
              <li className="nav-link"> 
                {t('nav.menu3')}
               </li>
            </Link>  

            <Link to='/company/contact'> 
              <li className="nav-link"> 
                {t('nav.menu4')}
              </li>
            </Link> 

          </ul>
          <LangBox setShowLangBox={setShowLangBox} showLangBox={showLangBox}/>
        </div>
      </div>
    </nav>
  )
}

export default Nav