import './Conference.css'
import React, {useState} from 'react'
import { con_features } from '../initials';
import { FaCheckSquare } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { BsBadge4K } from "react-icons/bs";
import TrademarkBG from '../../../Panel/TrademarkBG';
import hero from '../../../../../assets/camera/conference-hero.webp'
import management from '../../../../../assets/camera/con-manage.webp'
import high_1 from '../../../../../assets/camera/con-feat-1.webp'
import high_2 from '../../../../../assets/camera/con-feat-2.webp'
import spec from '../../../../../assets/camera/conference-spec.jpg'
import AnimateInView from '../../../../../components/Animation/AnimateInView';
import { useTranslation } from 'react-i18next';

const Conference:React.FC=()=>{
  const {t} = useTranslation();

  const [highlight, setHighLight] = useState<number>(1);

  return (
    <div>
      <div className='conference-hero'>
        <div className="text">
          <AnimateInView>
          <div className="title font-header">
            {t("camera.conference.hero.title")}
          </div>
          <div className="desc">
            {t("camera.conference.hero.desc")}
          </div>
          <a href="#" className='font-small'>
            {t("button.brochures")}
          </a>
          </AnimateInView>
        </div>
        <img src={hero} alt="" />
      </div>
      <div className="conference-keywords">
        <div className='conference-keywords-wrapper font-header container'>
          <AnimateInView>
          <div className='keword'>
            <FaCheckSquare/>
            <div className='desc font-small'>
              {t("camera.conference.keywords.keyword1")}
            </div>
          </div>
          </AnimateInView>

          <AnimateInView delay={0.3}>
          <div className='keword'>
            <AiFillSound/>
            <div className='desc font-small'>
              {t("camera.conference.keywords.keyword2")}
            </div>
          </div>
          </AnimateInView>

          <AnimateInView delay={0.4}>
          <div className='keword'>
            <BsBadge4K/>
            <div className='desc font-small'>
              {t("camera.conference.keywords.keyword3")}
            </div>
          </div>
          </AnimateInView>
        </div>
      </div>
      <div className="conference-highlights">
        <div className='conference-highlight-bg'>
          <TrademarkBG count={1} setCount={setHighLight} heightPercentage={50}/>
          <TrademarkBG count={2} setCount={setHighLight} heightPercentage={50}/>
        </div>
        <div className='conference-highlight-main'>
          <div className='text'>
            <p className='title font-header'>
              {t("camera.conference.highlights.title")}
            </p>
            <div className={`highlight-item border-bottom ${highlight===1 && 'active'}`}>
              <p className='highlight-title'>
                {t("camera.conference.highlights.item1.title")}
              </p>
              <div className='highlight-desc font-small'>
                <div className='highlight-desc-text'>
                  {t("camera.conference.highlights.item1.desc")}
                </div>
              </div>
            </div>
            <div className={`highlight-item ${highlight===2 && 'active'}`}>
              <p className='highlight-title'>
                {t("camera.conference.highlights.item2.title")}
              </p>
              <div className='highlight-desc font-small'>
                <div className='highlight-desc-text'>
                  {t("camera.conference.highlights.item2.desc")}         
                </div>
              </div>
            </div>
          </div>
          <div className='conference-highlight-img'>
            <img src={high_1} className={`${highlight===1 && 'active'}`} alt="" />
            <img src={high_2}  className={`${highlight===2 && 'active'}`}alt="" />
          </div>
        </div>
      </div>
      <div className="conference-features container">
        {con_features.map((feat, i)=>(
          <div className='conference-feature' key={i}>
            <img src={feat} alt="" />
            <AnimateInView>
            <div className="text">
              <p className="title font-subheader">
                {t(`camera.conference.features.item${i+1}.title`)}
              </p>
              <p className="desc">
                {t(`camera.conference.features.item${i+1}.desc`)}
              </p>
            </div>
            </AnimateInView>
          </div>
        ))}
      </div> 
      <div className='conference-manage'>
        <div className='conference-manage-box container'>
          <AnimateInView>
          <div className="conference-manage-text">
            <p className="title font-header">
              {t("camera.conference.banner.title")}
            </p>
            <p className="desc font-small">
              {t("camera.conference.banner.desc")}
            </p>
          </div>
          </AnimateInView>
          <img src={management} alt="" />
        </div>
      </div>
      <div className='conference-spec'>
        <AnimateInView>
          <h1>{t("camera.conference.specs")}</h1>
        </AnimateInView>

        <img src={spec} alt="" />
      </div>
    </div>
  )
}

export default Conference