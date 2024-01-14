import React, {useState, useEffect} from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import hero from '../../../assets/camera/camera.jpg'
import collaboration from '../../../assets/camera/meeting.jpg'
import './Camera.css'
import AnimateInView from '../../../components/Animation/AnimateInView'
import { useTranslation } from 'react-i18next'

const cameras=[
  {
    title:"Panoramic Camera",
    link:'panoramic'
  },
  {
    title:"Conference Bar Camera",
    link:'conference'
  },
  {
    title:"PTZ Camera",
    link:'ptz'
  },
]

const Camera: React.FC=() =>{
  const {t} = useTranslation();

  const location = useLocation();

  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    const determineCurrentPage = () => {
      const currentPath = location.pathname;

      if (currentPath.includes('panoramic')) {
        return 0;
      } else if (currentPath.includes('conference')) {
        return 1;
      } else {
        return 2;
      }
    };

    setActiveTab(determineCurrentPage());
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className='camera-page'>
      <div className='camera-hero'>
        <img src={hero} alt="" />
        <ul className='camera-tab container'>
          {cameras.map((camera, i)=>(
            <Link to={camera.link} key={i} onClick={()=>handleTabClick(i)} className={`camera-tab-header ${activeTab===i && 'active'}`}>
              {camera.title}
            </Link>
          ))}
        </ul>
      </div>
      <div className='camera-content'>
        <Outlet/>
      </div>  
      <div className='camera-collaboraion'>
        <div className='camera-collaboration-text'>
          <AnimateInView>
          <p className='title font-header'>
            {t("camera.title")}
          </p>
          <p className="desc">
            {t("camera.desc")}
          </p>
          </AnimateInView>
        </div>
        <img src={collaboration} alt="" />
      </div>
    </div>
  )
}

export default Camera