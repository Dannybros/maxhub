import {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import intro from '../../../../../assets/camera/ptz-intro.webp'

function PtzIntro() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1.7, 1])
  const xProgress = useTransform(scrollYProgress, [0, 0.5, 0.75], ["-30%", "-30%", '0%'])
  const textXProgress = useTransform(scrollYProgress, [0, 0.5, 0.75], ["50%", "50%", '0%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 0.75], [0, 0, 1])


  return (
    <div className='ptz-intro' ref={ref}>
      <div className='ptz-intro-wrapper container'>
        <motion.div 
          className='text'
          style={{
            x:textXProgress,
            opacity:textOpacity
          }}
        >
          <p className="title font-header">
            Premium Visuals
          </p>
          <p className="desc">
            Unrivaled UHD imaging technology delivers vibrant videos for every video collaboration. The UC P25 8MP camera highlights every member of your meeting in crisp detail, and the192x zoom means everyone looks clear no matter how many people join the collaboration.
          </p>
          <p className='keywords'>
            <strong>Sony 1/2.5" CMOS sensor</strong> <br/>
            <strong>8MP camera</strong><br/>
            <strong>12X optical zoom</strong><br/>
            <strong>16X digital zoom</strong>
          </p>
        </motion.div>
        <motion.img 
          src={intro} alt=""
          style={{
            scale:scaleProgress,
            x:xProgress
          }}
         />
      </div>
    </div>
  )
}

export default PtzIntro