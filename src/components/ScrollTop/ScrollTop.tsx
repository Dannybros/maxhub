import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import './ScrollTop.css'

function ScrollTop() {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 80);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className={`btn-scroll-top ${isVisible && 'visible'} font-subheader`} onClick={scrollToTop}>
        <FaArrowUp/>
    </div>
  )
}

export default ScrollTop