import React from 'react'
import './Dongle.css'
import dongle from '../../../assets/dongle/dongle.jpg'
import dongleMO from '../../../assets/dongle/dongleMo.jpg'
import dongle_single from '../../../assets/dongle/wireless-dongle.jpg'
import { FaWifi } from "react-icons/fa";
import { LuCable } from "react-icons/lu";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LuSmartphoneNfc } from "react-icons/lu";
import { ImStopwatch } from "react-icons/im";
import { MdDevicesOther } from "react-icons/md";
import AnimateInView from '../../../components/Animation/AnimateInView'
import { useTranslation } from 'react-i18next'

const Dongle: React.FC=() =>{

  const {t} = useTranslation();
  
  return (
    <div className='dongle-page'>
      <div className='dongle-hero'>
        <AnimateInView>
          <div className='dongle-hero-content'>
            <h1 className='font-header'>
              {t("dongle.hero.title")}
            </h1>
            <p>
              {t("dongle.hero.desc")}
            </p>
            <p className='content-specific'>
              <span> {t("dongle.hero.keyword1")}</span>
              <span> {t("dongle.hero.keyword2")} </span>
              <span>{t("dongle.hero.keyword3")}</span>
            </p>
          </div>
        </AnimateInView>
        <picture>
          <source media="(max-width: 500px)" srcSet={dongleMO} />
          <source media="(min-width: 500px)" srcSet={dongle} />
          <img src={dongle} alt="Responsive Banner Image" />
        </picture>
      </div>
      <div className='dongle-icons container'>
        <AnimateInView delay={0.2}>
          <div className='icon-box slash'>
            <FaWifi/>
          </div>
          <h4 className='font-small'> {t("dongle.keyword.icon1")} </h4>
        </AnimateInView>
        <AnimateInView delay={0.3}>
          <div className='icon-box slash'>
            <LuCable/>
          </div>
          <h4 className='font-small'> {t("dongle.keyword.icon2")}</h4>
        </AnimateInView>
        <AnimateInView delay={0.4}>
          <div className='icon-box'>
            <PiTelevisionSimpleBold/>
          </div>
          <h4 className='font-small'>{t("dongle.keyword.icon3")} </h4>
        </AnimateInView>
        <AnimateInView delay={0.5}>
          <div className='icon-box'>
            <LuSmartphoneNfc/>
          </div>
          <h4 className='font-small'> {t("dongle.keyword.icon4")} </h4>
        </AnimateInView>
        <AnimateInView delay={0.6}>
          <div className='icon-box'>
            <ImStopwatch/>
          </div>
          <h4 className='font-small'> {t("dongle.keyword.icon5")} </h4>
        </AnimateInView>
        <AnimateInView delay={0.65}>
          <div className='icon-box'>
            <MdDevicesOther/>
          </div>
          <h4 className='font-small'> {t("dongle.keyword.icon6")}</h4>
        </AnimateInView>
      </div>
      <div className='dongle-single-showcase container'>
        <img src={dongle_single} alt=''/>
        <div className='dongle-showcase-content' >
          <AnimateInView>
            <h1>{t("dongle.showcase.title")}</h1>
            <p>{t("dongle.showcase.keyword1")}</p>
            <p>{t("dongle.showcase.keyword2")}</p>
            <p>{t("dongle.showcase.keyword3")}</p>
          </AnimateInView>
        </div>
      </div>
      <div className='dongle-banner'>
          <AnimateInView>
        <div className='dongle-banner-text container'>
            <h1> {t("dongle.banner.title1")} </h1>
            <h2> {t("dongle.banner.title2")} </h2>
            <p>
            {t("dongle.banner.desc")}
            </p>
            <h3>
              {t("dongle.banner.keyword1")} <br/>
              {t("dongle.banner.keyword2")}
            </h3>
        </div>
          </AnimateInView>
      </div>
      <div className='dongle-promotion'>
        <AnimateInView>
        <div className='container dongle-promotion-text'>
          <h1 className='font-subheader'>
            {t("dongle.speed.title1")} <br/>
            {t("dongle.speed.title2")}
          </h1>
          <p>
            {t("dongle.speed.desc")}
          </p>
        </div>
        </AnimateInView>
        <div className='dongle-promotion-img'></div>
      </div>
      <div className='dongle-show'>
        <AnimateInView>
        <div className='dongle-hero-content dongle-last-hero'>
          <h1>
            {t("dongle.hero2.title")}
          </h1>
          <p className='dongle-show-description'>
            {t("dongle.hero2.desc")}
          </p>
          <p className='content-specific'>
            <span className='font-small'>{t("dongle.hero2.keyword1")} </span>
            <span className='font-small'> {t("dongle.hero2.keyword2")} </span>
            <span className='font-small'> {t("dongle.hero2.keyword3")} </span>
          </p>
        </div>
        </AnimateInView>
      </div>
      <div className='dongle-specific'>
        <AnimateInView direction='left'>
        <h5 className='container font-small'>
          {t("dongle.specs.item1")}<br/>
          {t("dongle.specs.item2")}<br/>
          {t("dongle.specs.item3")}<br/>
          {t("dongle.specs.item4")}<br/>
          {t("dongle.specs.item5")}<br/>
          {t("dongle.specs.item6")}<br/>
          {t("dongle.specs.item7")}<br/>
          {t("dongle.specs.item8")}
          
        </h5>
        </AnimateInView>
      </div>
    </div>
  )
}

export default Dongle