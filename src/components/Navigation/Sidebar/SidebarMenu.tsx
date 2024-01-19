import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { IoTvSharp } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MenuVariants = {
  open: {
    x:0,
    transition: { staggerChildren: 0.07, delayChildren: 0.5 }
  },
  closed: {
    x:-500,
    transition: { 
      delay:0.4,
      staggerChildren: 0.05, 
      staggerDirection: -1 
    }
  }
};

const ItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const DropdownVariants={
  open:{
    height:"100%",
    opacity:1,
    display:"block",
  },
  close:{
    height:"0",
    opacity:0,
    transitionEnd: {
      display: "none",
    },
  }
}

const menuList = [
  {
    title:"Home",
    link:"/",
    icon:<FaHome/>
  },
  {
    title:"Explore",
    links:[
      {
        title:"Explore All",
        link:"/explore/products"
      },
      {
        title:"Educational Panel",
        link:"/product/education"
      },
      {
        title:"Professional Panel",
        link:"/product/panel"
      },
      {
        title:"LED Display",
        link:"/product/led"
      },
      {
        title:"Camera",
        link:"/product/camera/panoramic"
      },
      {
        title:"Dongle",
        link:"/product/wireless-dongle"
      },
      {
        title:"lectern",
        link:"/product/smart-lectern"
      }
    ],
    link:"/explore/products",
    icon:<IoTvSharp/>
  },
  {
    title:"About Us",
    link:"/about",
    icon:<FaUserTie/>
  },
  {
    title:"Contact",
    link:"/company/contact",
    icon:<FaPhoneSquareAlt/>
  }
]

export const SidebarMenu = () => {

  const {t} = useTranslation();

  const {toggleSidebar, changeLang, language} = useAppContext();

  const [exploreDdOpen, setExploreDdOpen] = useState<boolean>(false);
  
  const toggleExploreDropdown= ()=>{
    setExploreDdOpen(state => !state);
  }

  const handleLangSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    changeLang(newValue);
  };

  return (
    <motion.ul variants={MenuVariants} className="sidebar-menu">
      {menuList.map((menu, i) => (
        <motion.li
          key={i}
          variants={ItemVariants}
          className="sidebar-menu-list"
        >
        {menu.links?
          <div style={{paddingBottom:"30px"}}>
            <div className="mobile-sidebarmenu" onClick={toggleExploreDropdown}>
              <div className="icon-placeholder">
                {menu.icon}
              </div>
              <div className="text-placeholder">
                {t(`nav.menu2`)}
              </div>
              <FaChevronDown/>
            </div>
            <motion.ul 
              className="explore-mobile-dropdown"
              animate={exploreDdOpen ? "open" : "close"}
              variants={DropdownVariants}
            >
              {menu.links.map((url,i)=>(
                <li key={i}>
                <Link to={url.link} onClick={toggleSidebar}>
                  {t(`nav.submenu.submenu${i+1}`)}
                </Link>
                </li>
              ))}
            </motion.ul>
          </div>
          :
          <Link to={menu.link} onClick={toggleSidebar} className="mobile-sidebarmenu bottom-30">
            <div className="icon-placeholder">
              {menu.icon}
            </div>
            <div className="text-placeholder">
              {t(`nav.menu${i+1}`)}
            </div>
          </Link>
        }
        </motion.li>
      ))}
      <motion.li 
        variants={ItemVariants}
        className="sidebar-menu-list"
      >
        <div className="mobile-sidebarmenu">
          <div className="icon-placeholder">
            <TfiWorld/>
          </div>
          <select value={language} onChange={handleLangSelectChange}>
            <option value="en">English</option>
            <option value="la">ລາວ</option>
          </select>
        </div>
      </motion.li>
    </motion.ul>
  )
};


