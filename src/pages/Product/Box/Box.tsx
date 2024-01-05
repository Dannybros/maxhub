import React from 'react'
import './Box.css'
import before from '../../../assets/screen-box/before.png';
import now from '../../../assets/screen-box/now.png';
import security from '../../../assets/screen-box/security.png';
import AnimateInView from '../../../components/Animation/AnimateInView';
import Tabs from '../../../components/BoxSwiper/Tabs';
import { useTranslation } from 'react-i18next';

const Box: React.FC=() =>{
    const {t} = useTranslation();

  return (
    <div className='box-page'>
        <div className='box-hero'>
            <div className='box-hero-text'>
                <AnimateInView>
                <h1 className='font-header'>{t("box.hero.title")}</h1>
                <p className='font-subheader'>
                    {t("box.hero.desc")}
                </p>
                </AnimateInView>
            </div>
        </div>
        <div className='box-compare'>
            <AnimateInView direction='down'>
            <h1>
                {t("box.compare.title")}
            </h1>
            </AnimateInView>
            <div className='box-compare-container'>
                <div className='before'>
                    <img src={before} alt="" />
                    <div className='box-compare-text'>
                        <AnimateInView direction='down'>
                            {t("box.compare.item1")}
                        </AnimateInView>
                    </div>
                </div>
                <div className='now'>
                    <img src={now} alt="" />
                    <div className='box-compare-text'>
                        <AnimateInView direction='down' delay={0.2}>
                        {t("box.compare.item2")}
                        </AnimateInView>
                    </div>
                </div>
            </div>
        </div>
        <div className='box-banner'>
            <div className='box-banner-text'>
                <AnimateInView direction='down'>
                <h1>
                    {t("box.banner.title")}
                </h1>
                </AnimateInView>
                <AnimateInView direction='right' delay={0.2}>
                    {t("box.banner.desc")}
                </AnimateInView>
                <ul>
                    <AnimateInView delay={0.4}>
                    <li>
                        {t("box.banner.keyword1.title1")} <br/>
                        <span className='font-small'>{t("box.banner.keyword1.title2")}</span>
                    </li>
                    </AnimateInView>
                    <AnimateInView delay={0.5}>
                    <li>
                        {t("box.banner.keyword2.title1")} <br/>
                        <span className='font-small'>{t("box.banner.keyword2.title2")}</span>
                    </li>
                    </AnimateInView>
                    <AnimateInView delay={0.6}>
                    <li>
                        {t("box.banner.keyword3.title1")} <br/>
                        <span className='font-small'>{t("box.banner.keyword3.title2")}</span>
                    </li>
                    </AnimateInView>
                </ul>
            </div>
        </div>
        <div className='box-compatibiliy'>
            <div className="box-compatibility-text">
                <AnimateInView>
                <h1 className='font-subheader'>
                    {t("box.compatible.title")} 
                </h1>
                <p>
                    {t("box.compatible.desc")} 
                </p>
                </AnimateInView>
            </div>
        </div>
        <div className='box-security'>
            <div className='box-security-text container'>
                <AnimateInView>
                <h1>{t("box.security.title")} </h1>
                </AnimateInView>
                <AnimateInView delay={0.2}>
                    {t("box.security.desc")}
                </AnimateInView>
                <ul className='box-security-ul'>
                    <AnimateInView direction='right' delay={0.4}>
                    <li>
                        <strong><span>{t("box.security.keyword1.title1")}</span></strong> <br/>
                        <span>{t("box.security.keyword1.title2")}</span>
                    </li>
                    </AnimateInView>
                    <AnimateInView direction='left' delay={0.4}>
                    <li>
                        <strong><span>{t("box.security.keyword2.title1")}</span></strong> <br/>
                        <span>{t("box.security.keyword2.title2")}</span>
                    </li>
                    </AnimateInView>
                </ul>
            </div>
            <div className='img-box'>
                <img src={security} alt="" />
            </div>
        </div>  
        <Tabs/>
        <div className='box-specific'>
            <AnimateInView direction='left'>
            <h5 className='container font-small'>
                {t("box.specs.item1")} <br/>
                {t("box.specs.item2")} <br/>
                {t("box.specs.item3")} <br/>
                {t("box.specs.item4")} <br/>
                {t("box.specs.item5")} <br/>
                {t("box.specs.item6")} <br/>
                {t("box.specs.item7")} <br/>
                {t("box.specs.item8")}
            </h5>
            </AnimateInView>
      </div>
    </div>
  )
}

export default Box