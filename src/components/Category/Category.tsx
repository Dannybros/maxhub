import React, {useState} from 'react'
import './Category.css'
import { FaArrowRight } from "react-icons/fa6";
import lectern from '../../assets/category/lectern.png'
import led from '../../assets/category/LED.png'
import speakphone from '../../assets/dongle/multi-device.jpg'
import camera from '../../assets/camera/camera.webp'
import HD from '../../assets/panel/HD.webp'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Category: React.FC=()=>{
  const {t} = useTranslation();

  const data = [
    {
      title:t("home.category.item1"),
      img:HD,
      link:'/product/panel'
    },
    {
      title:t("home.category.item2"),
      img:lectern,
      link:'/product/smart-lectern'
    },
    {
      title:t("home.category.item3"),
      img:led,
      link:'/product/led'
    },
    {
      title:t("home.category.item4"),
      img:speakphone,
      link:'/product/wireless-dongle'
    },
    {
      title:t("home.category.item5"),
      img:camera,
      link:'/product/camera/panoramic'
    }
  ]

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleItemHover = (imageUrl:string | null) => {
    setHoveredItem(imageUrl);
  };

  return (
    <div className='category-element'>
      <h1 className='category-title font-header'>
        {t("home.category.title")}
      </h1>
      <div className='category-lists container'>
        {data.map((item, i)=>(
          <div 
            className={`category-item ${hoveredItem!==item.img && hoveredItem!==null? 'disabled' :''}`}
            style={{ backgroundImage: `url(${item.img})` }}
            key={i}
            onMouseEnter={() => handleItemHover(item.img)}
            onMouseLeave={() => handleItemHover(null)}
          >
            <div className='content'>
              <h2 className='font-subheader'>{item.title}</h2>
              <Link to={item.link}>
                {t("button.detail")} <FaArrowRight/>
              </Link>
            </div>
            <div className='category-overlay'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category