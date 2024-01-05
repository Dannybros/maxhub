import React from 'react'
import './Education.css'
import hero from '../../../assets/education/education_bg.png'
import illustration from '../../../assets/education/illustration.png'
import tool from '../../../assets/education/tool.png'
import shape from '../../../assets/education/shape.png'
import sticker from '../../../assets/education/sticker.png'
import table from '../../../assets/education/table.png'
import canva from '../../../assets/education/canva.png'
import handwriting from '../../../assets/education/handwriting.png'
import drag from '../../../assets/education/drag.png'
import recording from '../../../assets/education/recording.png'
import lock from '../../../assets/education/lock-screen.png'
import responsive from '../../../assets/education/responsive.png'
import edu from '../../../assets/education/edu.png'
import globe from '../../../assets/education/globe.png'
import system from '../../../assets/education/system.mp4'
import { Slider, SliderItem } from '../../../components/Slider/Slider'
import video_lesson from '../../../assets/education/video-link.png'
import science from '../../../assets/education/science.png'
import save_time from '../../../assets/education/save-time.png'
import multi_task from '../../../assets/education/multi-task.png'
import AnimateInView from '../../../components/Animation/AnimateInView'
import { useTranslation } from 'react-i18next'

const Education:React.FC=()=> {
  const {t} = useTranslation();

  const features = [ illustration, tool, shape, sticker,table, canva, handwriting, drag, recording, lock]
  
  const highlights=[ science, video_lesson, save_time, multi_task ]

  return (
    <div className='education-page'>
      <section className='education-hero'>
        <img src={hero} alt="" />
        <div className='education-hero-text'>
          <AnimateInView>
            <p className='font-subheader'>
              {t("education.hero.desc")}
            </p>
          </AnimateInView>
          <AnimateInView>
            <h1 className='font-header'> 
              {t("education.hero.title")}
            </h1>
          </AnimateInView>
          <AnimateInView>
            <ul>
              <li> {t("education.hero.keyword1.title1")} <br/> <span className='font-small'>{t("education.hero.keyword1.title2")}</span> </li>

              <li> {t("education.hero.keyword2.title1")} <br/> <span className='font-small'>{t("education.hero.keyword1.title2")}</span> </li>

              <li> {t("education.hero.keyword3.title1")} <br/> <span className='font-small'>{t("education.hero.keyword1.title2")}</span> </li>

              <li> {t("education.hero.keyword4.title1")} <br/> <span className='font-small'>{t("education.hero.keyword1.title2")}</span> </li>
            </ul>
          </AnimateInView>
        </div>
      </section>
      <section className='education-banner'>
        <div className='education-banner-text'>
          <AnimateInView>
          <p className='title font-subheader'>
            {t("education.banner1.title")}
          </p>
          <p className='desc'>
            {t("education.banner1.desc")}
          </p>
        </AnimateInView>
        </div>
        <img src={responsive} alt="" />
      </section>
      <section className='education-features'>
        <AnimateInView>
        <p className='font-subheader'>
          {t("education.features.title")}
        </p>
        <p className='desc'>
          {t("education.features.desc")}
        </p>
        </AnimateInView>
        <div className='education-feature-box snap-inline'>
          {features.map((feature, i)=>(
            <div className='education-feature-card' key={i}>
              <img src={feature} alt="" />
              <div className='text'>
                <h4> {t(`education.features.card${i+1}.title`)} </h4>
                <p>{t(`education.features.card${i+1}.desc`)} </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='education-highlights'>
        <Slider>
          {highlights.map((highlight, i)=>(
            <SliderItem img={highlight} key={i}>
              <div className='education-highlight-text'>
                <AnimateInView>
                <h1 className='title font-subheader'>
                  {t(`education.highlights.item${i+1}.title`)}
                </h1>
                <p className='desc'>
                  {t(`education.highlights.item${i+1}.desc`)}
                </p>
                </AnimateInView>
              </div>
            </SliderItem>
          ))}
        </Slider>
      </section>
      <section className='education-software-hero'>
        <AnimateInView>
        <p className='title font-subheader'>
          {t("education.banner2.title")}
        </p>
        </AnimateInView>
        <AnimateInView>
        <p className='desc'> 
          {t("education.banner2.desc")}
        </p>
        </AnimateInView>
        <img src={edu} alt="" />
      </section>
      <section className='education-software-system'>
        <AnimateInView direction='left' delay={0.3}>
        <p className='title font-subheader'>
          {t("education.banner3.title")}
        </p>
        </AnimateInView>
        <AnimateInView direction='right' delay={0.3}>
        <p className='desc'>
          {t("education.banner3.desc1")}  <br className='breaking-line'/>
          {t("education.banner3.desc2")}
        </p>
        </AnimateInView>
        <video loop autoPlay muted playsInline webkit-playsinline>
          <source src={system}/>
          {t("video")}
        </video>
      </section>
      <section className='education-security'>
        <div className="education-security-container">
          <div className='educaiton-globe'>
            <AnimateInView delay={0.3}>
            <img src={globe} alt="" />
            </AnimateInView>
          </div>
          <div className='education-security-text'>
            <AnimateInView direction='left' delay={0.3}>
            <p className='title font-subheader'>
              {t("education.banner4.title")}
            </p>
            <p className='desc'>
              {t("education.banner4.desc")}
            </p>
            </AnimateInView>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education