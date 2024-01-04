import { useRef } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { SidebarMenu } from "./SidebarMenu";
import { useAppContext } from "../../../context/AppContext";
import { useDimensions } from "./use-dimensions";
import { Link } from "react-router-dom";
import logo from '../../../assets/explore/logo-4.png'
import './Sidebar.css'

const sidebarBG = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(20px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const sidebar = {
  open:{
    height:'100vh'
  },
  closed:{
    height:'60px',
    transition: {
      delay: 1,
    }
  }
}

const logoVariant={
  open:{ 
    opacity:1 ,
    transition:{
      delay:0.4
    }
  },
  closed:{ 
    opacity: 0
  }
}

export const Sidebar = () => {

  const {toggleSidebar, isSidebarActive } = useAppContext();
  const containerRef = useRef<HTMLElement>(null);
  const { height } = useDimensions(containerRef); 

  return (
    <motion.div 
      className="sidebar"
      variants={sidebar}
      initial="open"
      animate = {isSidebarActive ? "open" : "closed"}
    >
      <motion.nav
        initial={false}
        animate={isSidebarActive ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebarBG} />
        <MenuToggle />
        <motion.div 
          className="logo-box" 
          variants={logoVariant}
          animate={isSidebarActive ? "open" : "closed"}
          onClick={toggleSidebar}
        >
          <Link to='/'>
            <img src={logo} alt="Zion logo" />
          </Link>
        </motion.div>
        <SidebarMenu />
      </motion.nav>
    </motion.div>
  );
};
