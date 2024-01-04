import React, {useRef, useState, useEffect} from 'react'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import hero from '../../../../../assets/explore/Camera.jpg'
import panoramic_view from '../../../../../assets/camera/panoramic-1.webp'
import video from '../../../../../assets/camera/panoramic-video.mp4'
import {modes, examples} from '../initials'
import Animation from '../../../../../components/Animation/Animation'
import './Panoramic.css'
import AnimateInView from '../../../../../components/Animation/AnimateInView'

const Panoramic:React.FC=()=>{
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
          <p className="keyword font-header">Be Seen. Be Heard. Be Amazed.</p>
          <p className='title font-subheader'>360° All-in-One Conference Camera</p>
          <p className='desc'>
            Meet the all-in-one conference camera that tracks every face and follows every word in small to medium-sized spaces.
          </p>
          <a href="#" className='font-small'> Brochure {'>'}</a>
          </AnimateInView>
        </div>
      </div>
      <div className='panoramic-description container'>
        <AnimateInView>
        <p className='font-header'>
          Compact Design, Expansive Versatility
        </p>
        <p className='desc'>
          Style meets substance in a sleek metal design that combines easy portability with robust capability as well as intuitive controls and displays. From one-tap mode switching to the LED voice location indicator, the UC M40 turns even challenging spaces into productive meeting places.
        </p>
        </AnimateInView>
      </div>
      <div className='panoramic-banner'>
        <AnimateInView>
        <div className='panoramic-banner-text'>
          <p className='title font-subheader'>360° Coverage, Minimal Distortion</p>
          <p>Communication is more direct, and collaboration more natural and immersive</p>
        </div>
        </AnimateInView>
        <Animation>
          <video loop autoPlay muted>
            <source media="(min-width: 500px)" src={video}/>
          </video>
          <img src={panoramic_view} alt="Responsive Banner Image" />
        </Animation>
        <ul className='panoramic-banner-highlights'>
          <AnimateInView> <li> 360 &#176; panoramic <br/> angle view </li></AnimateInView>
          <AnimateInView delay={0.3}><li> 5MP 4-lens <br/>Camera </li></AnimateInView>
          <AnimateInView delay={0.4}><li> Voice-tracking <br/> Microphones </li></AnimateInView>
          <AnimateInView delay={0.5}><li> Simple Setup </li></AnimateInView>
        </ul>
      </div>
      <div className="panoramic-example container">
        <AnimateInView>
          <p className="font-header">
            Plug in the USB and start your meeting
          </p>
          <p className="desc">
            There’s no software to install, no complicated settings to configure. Choose your collaboration scenario with a simple tap, and the intelligent speaker-tracking technology and 360° camera will take it from there.
          </p>
        </AnimateInView>
        <AnimateInView delay={0.3}>
        <div className="example-container font-subheader">
          <img src={examples[state].img} alt="" />
          <div className='example-img-content'>
            <p>{examples[state].title}</p>
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
              <p className="title font-header">A More Precise Performance</p>
              <p className="desc">
                Have special requirements for your meeting? Activate Professional Mode and adjust a wide variety of settings, from camera angles to custom display layouts and auto-framing settings.
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
                <img src={mode.img} alt="" />
                <div className='text'>
                  <h4> {mode.title} </h4>
                  <p className='font-small'> {mode.desc} </p>
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