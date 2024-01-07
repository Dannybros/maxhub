import './Panoramic.css'
import React, {useRef, useState, useEffect} from 'react'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import hero from '../../../../../assets/explore/Camera.webp'
import panoramic_view from '../../../../../assets/camera/panoramic-1.webp'
import video from '../../../../../assets/camera/panoramic-video.mp4'
import {modes, examples} from '../initials'
import Animation from '../../../../../components/Animation/Animation'
import AnimateInView from '../../../../../components/Animation/AnimateInView'
import { useTranslation } from 'react-i18next'

const Panoramic:React.FC=()=>{
  const {t} = useTranslation();

  const modeRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setState(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setState((prevTab) => (prevTab + 1) % 5);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [state]);


  const { scrollYProgress } = useScroll({
      target: modeRef,
  });

  const xSpring =  useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });

  const translateXProgress = useTransform(xSpring, [0.2, 0.8], ['0px', "-1150px"])

  return (
    <div>
      <div className='panoramic-hero'>
        <img src={hero} alt="" />
        <div className='panoramic-hero-text'>
          <AnimateInView>
          <p className="keyword font-header">
            {t(`camera.panoramic.hero.title`)}
          </p>
          <p className='title font-subheader'>
            {t(`camera.panoramic.hero.keyword`)}
          </p>
          <p className='desc'>
            {t(`camera.panoramic.hero.desc`)}
          </p>
          <a href="#" className='font-small'> {t(`button.brochures`)} {'>'}</a>
          </AnimateInView>
        </div>
      </div>
      <div className='panoramic-description container'>
        <AnimateInView>
        <p className='font-header'>
          {t("camera.panoramic.description.title")}
        </p>
        <p className='desc'>
          {t("camera.panoramic.description.desc")}
        </p>
        </AnimateInView>
      </div>
      <div className='panoramic-banner'>
        <AnimateInView delay={0.3}>
        <div className='panoramic-banner-text'>
          <p className='title font-subheader'>
            {t("camera.panoramic.banner.title")}
          </p>
          <p>
            {t("camera.panoramic.banner.desc")}
          </p>
        </div>
        </AnimateInView>
        <Animation>
          <video loop autoPlay muted playsInline>
            <source media="(min-width: 500px)" src={video}/>
          </video>
          <img src={panoramic_view} alt="Responsive Banner Image" />
        </Animation>
        <ul className='panoramic-banner-highlights'>
          <AnimateInView> 
            <li> 
              <strong dangerouslySetInnerHTML={
                {__html: t('camera.panoramic.banner.keyword1.title1', {interpolation: {escapeValue: false}})}
              } />
              <span>
              {t("camera.panoramic.banner.keyword1.title2")}
              </span>
            </li>
          </AnimateInView>

          <AnimateInView delay={0.3}>
            <li> 
            {t("camera.panoramic.banner.keyword2.title1")} <br/>
            {t("camera.panoramic.banner.keyword2.title2")}
            </li>
          </AnimateInView>

          <AnimateInView delay={0.4}>
            <li> 
            {t("camera.panoramic.banner.keyword3.title1")} <br/>
            {t("camera.panoramic.banner.keyword3.title2")}
            </li>
          </AnimateInView>

          <AnimateInView delay={0.5}>
            <li> 
            {t("camera.panoramic.banner.keyword4.title1")}
            </li>
          </AnimateInView>
        </ul>
      </div>
      <div className="panoramic-example container">
        <AnimateInView>
          <p className="font-header">
            {t("camera.panoramic.example.title")}
          </p>
          <p className="desc">
            {t("camera.panoramic.example.desc")}
          </p>
        </AnimateInView>
        <AnimateInView delay={0.3}>
        <div className="example-container font-subheader">
          <img src={examples[state].img} alt="" />
          <div className='example-img-content'>
            <p>
            {t(`camera.panoramic.example.key${state+1}`)}
            </p>
            <img src={examples[state].icon} alt="" />
          </div>
        </div>
        </AnimateInView>
        <AnimateInView direction='left'>
        <div className='panoramic-example-pagination'>
          <div onClick={()=>handleTabClick(0)} className={`pagination-list quad ${state===0 && 'active'}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div onClick={()=>handleTabClick(1)} className={`pagination-list portrait ${state===1 && 'active'}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div onClick={()=>handleTabClick(2)} className={`pagination-list compose ${state===2 && 'active'}`}>
            <span className='first'></span>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div onClick={()=>handleTabClick(3)} className={`pagination-list split ${state===3 && 'active'}`}>
            <span></span>
            <span></span>
          </div>
          <div onClick={()=>handleTabClick(4)} className={`pagination-list panoramic ${state===4 && 'active'}`}>
            <span></span>
          </div>
        </div>
        </AnimateInView>
      </div>
      <div className="panoramic-modes" ref={modeRef}>
        <div className="panoramic-mode-container">
          <AnimateInView>
            <div className="panoramic-mode-text">
              <p className="title font-header">
                {t(`camera.panoramic.mode.title`)}
              </p>
              <p className="desc">
                {t(`camera.panoramic.mode.desc`)}
              </p>
            </div>
          </AnimateInView>
          <motion.div 
            className="panoramic-box-wrapper"
            style={{
              translateX:translateXProgress
            }}
          >
            {modes.map((mode, i)=>(
              <div className='panoramic-mode-item' key={i}>
                <img src={mode} alt="" />
                <div className='text'>
                  <h4> {t(`camera.panoramic.mode.card${i+1}.title`)} </h4>
                  <p className='font-small'> {t(`camera.panoramic.mode.card${i+1}.desc`)} </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Panoramic