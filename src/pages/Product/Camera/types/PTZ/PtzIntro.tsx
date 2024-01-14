import {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import intro from '../../../../../assets/camera/ptz-intro.png'
import { useTranslation } from 'react-i18next'

function PtzIntro() {
  const {t} = useTranslation();
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
           {t("camera.ptz.intro.title")}
          </p>
          <p className="desc">
            {t("camera.ptz.intro.desc")}
          </p>
          <ul className='keywords'>
            <li>{t("camera.ptz.intro.keyword1")}</li> <br/>
            <li>{t("camera.ptz.intro.keyword2")}</li><br/>
            <li>{t("camera.ptz.intro.keyword3")}</li><br/>
            <li>{t("camera.ptz.intro.keyword4")}</li>
          </ul>
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