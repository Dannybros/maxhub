import { useRef } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { SidebarMenu } from "./SidebarMenu";
import { useAppContext } from "../../../context/AppContext";
import { useDimensions } from "./use-dimensions";
import { Link } from "react-router-dom";
import reactLogo from '../../../assets/react.svg'
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

export const Sidebar = () => {

  const { isSidebarActive } = useAppContext();
  const containerRef = useRef<HTMLElement>(null);
  const { height } = useDimensions(containerRef); 

  return (
    <motion.div 
      className="sidebar"
      variants={sidebar}
      initial="open"
      animate = {isSidebarActive ? "open" : "closed"}
    >
      <Link to='/' className="logo">
        <img src={reactLogo} alt="React logo" />
      </Link>

      <motion.nav
        initial={false}
        animate={isSidebarActive ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebarBG} />
        <SidebarMenu />
        <MenuToggle />
      </motion.nav>
    </motion.div>
  );
};
