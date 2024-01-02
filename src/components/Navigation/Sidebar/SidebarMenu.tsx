import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { IoTvSharp } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";

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

export const SidebarMenu = () => {

  const {toggleSidebar} = useAppContext();
  return (
    <motion.ul variants={MenuVariants} className="sidebar-menu">
      {menuList.map((menu, i) => (
        <motion.li
          key={i}
          variants={ItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="sidebar-menu-list"
        >
          <Link to={menu.link} onClick={toggleSidebar}>
            <div className="icon-placeholder">
              {menu.icon}
            </div>

            <div className="text-placeholder">
              {menu.title}
            </div>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
};

const menuList = [
  {
    title:"Home",
    link:"/",
    icon:<FaHome/>
  },
  {
    title:"Explore",
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

