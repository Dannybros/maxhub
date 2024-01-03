import React, {useState} from 'react';
import logo4 from '../../../assets/explore/logo-4.png'
import { Link as Link, useLocation } from 'react-router-dom';
import LangBox from './LangBox';
import { productLink } from './ExploreLinks';
import './Nav.css';

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
                {productLink.map((menu, i)=>(
                  <Link to={menu.link} key={i}>
                    <img src={menu.icon} alt="" />
                    {menu.title}
                  </Link>
                ))}
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