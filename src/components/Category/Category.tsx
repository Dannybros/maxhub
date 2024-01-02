import React, {useState} from 'react'
import './Category.css'
import { FaArrowRight } from "react-icons/fa6";
import lectern from '../../assets/category/lectern.png'
import led from '../../assets/category/LED.png'
import speakphone from '../../assets/dongle/multi-device.jpg'
import camera from '../../assets/camera/camera.webp'
import HD from '../../assets/panel/HD.webp'
import { Link } from 'react-router-dom';

const data = [
  {
    title:"Interactive Flat Panel",
    img:HD,
    link:'/product/panel'
  },
  {
    title:"Smart Lectern",
    img:lectern,
    link:'/product/smart-lectern'
  },
  {
    title:"Smart LED",
    img:led,
    link:'/product/led'
  },
  {
    title:"Wireless Dongle",
    img:speakphone,
    link:'/product/wireless-dongle'
  },
  {
    title:"Smart Camera",
    img:camera,
    link:'/product/camera/panoramic'
  }
]

const Category: React.FC=()=>{

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleItemHover = (imageUrl:string | null) => {
    setHoveredItem(imageUrl);
  };

  return (
    <div className='category-element'>
      <h1 className='category-title'>Categories</h1>
      <div className='category-lists'>
        {data.map((item, i)=>(
          <div 
            className={`category-item ${hoveredItem!==item.img && hoveredItem!==null? 'disabled' :''}`}
            style={{ backgroundImage: `url(${item.img})` }}
            key={i}
            onMouseEnter={() => handleItemHover(item.img)}
            onMouseLeave={() => handleItemHover(null)}
          >
            <div className='content'>
              <h2>{item.title}</h2>
              <Link to={item.link}>Learn More <FaArrowRight/></Link>
            </div>
            <div className='category-overlay'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category