import React, {useState, useEffect} from 'react'
import './Ptz.css'
import hero from '../../../../../assets/camera/ptz-hero.webp'
import banner from '../../../../../assets/camera/ptz-banner.webp'
import tilt from '../../../../../assets/camera/tilt.webp'
import pan from '../../../../../assets/camera/pan.webp'
import Hfov from '../../../../../assets/camera/Hfov.webp'
import spec from '../../../../../assets/camera/ptz-spec.webp'
import PtzIntro from './PtzIntro'
import AnimateInView from '../../../../../components/Animation/AnimateInView'
import { useTranslation } from 'react-i18next'

const featureImg=[pan, tilt, Hfov];

const PTZ:React.FC=()=>{

  const {t} = useTranslation();

  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImg((prevTab) => (prevTab + 1) % featureImg.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeImg]);

  return (
    <div className='ptz-section'>
      <div className='ptz-hero'>
        <div className="text">
          <AnimateInView>
          <p className="title font-header">
            {t("camera.ptz.hero.title")}
          </p>
          <p className="desc">
            {t("camera.ptz.hero.desc1")}
          </p>
          <p className="desc">
            {t("camera.ptz.hero.desc2")}
          </p>
          <a href="https://sgp-cstore-pub.maxhub.com/maxhub_global_public/cdf7982136af4bd5860dcadbc39a57bf" target='_blank' className='font-small'>
            {t("button.brochures")}
          </a>
          </AnimateInView>
        </div>
        <img src={hero} alt="" />
      </div>
      <PtzIntro/>
      <div className="ptz-banner">
        <div className="text">
          <AnimateInView>
            <p className="title font-header">
              {t("camera.ptz.banner.title")}
            </p>
            <p className="desc">
              {t("camera.ptz.banner.desc")}
            </p>
            <ul>
              <li>{t("camera.ptz.banner.keyword1")}</li> 
              <li>{t("camera.ptz.banner.keyword2")}</li>
              <li>{t("camera.ptz.banner.keyword3")}</li> 
            </ul>
          </AnimateInView>
        </div>
        <img src={banner} alt="" />
      </div>
      <div className="ptz-features container">
        <div className='text'>
          <AnimateInView direction='left' delay={0.3}>
          <p className='title font-header'>
            {t("camera.ptz.feature.title")}
          </p>
          <p className="desc">
            {t("camera.ptz.feature.desc")}
          </p>
          <p className="feature-keywords">
            Pan ±170° / Tilt ±30° / HFoV 71° <br/>
            {t("camera.ptz.feature.keyword1")}<br/>
            {t("camera.ptz.feature.keyword2")}<br/>
            {t("camera.ptz.feature.keyword3")}
          </p>
          </AnimateInView>
        </div>
        <div className='ptz-feature-img'>
          <AnimateInView direction='right' delay={0.3}>
            <img src={featureImg[activeImg]} alt="" />
            <ul>
              <li className={`${activeImg===0 && 'active'}`}>Pan ±170°</li>
              <li className={`${activeImg===1 && 'active'}`}>Tilt ±30°</li>
              <li className={`${activeImg===2 && 'active'}`}>HFoV 71°</li>
            </ul>
          </AnimateInView>
        </div>
      </div>
      <div className="ptz-spec">
        <h1>{t("camera.conference.specs")}</h1>
        <img src={spec} alt="" />
      </div>
    </div>
  )
}

export default PTZ