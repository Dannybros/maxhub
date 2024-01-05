import React from 'react'
import './Lectern.css'
import hero from '../../../assets/Lectern/hero.png'
import heroMO from '../../../assets/Lectern/heroMO.png'
import banner from '../../../assets/Lectern/banner.png'
import bannerMO from '../../../assets/Lectern/bannerMO.png'
import detail from '../../../assets/Lectern/detail.png'
import detailMO from '../../../assets/Lectern/detailMO.png'
import adap1 from '../../../assets/Lectern/adap1.png'
import adap2 from '../../../assets/Lectern/adap2.png'
import adap3 from '../../../assets/Lectern/adap3.png'
import AnimateInView from '../../../components/Animation/AnimateInView'
import { useTranslation } from 'react-i18next'

const Lectern: React.FC=() =>{
  const {t} = useTranslation();

  return (
    <div className='lectern-page'>
      <div className='lectern-hero'>
        <AnimateInView>
        <div className="lectern-hero-text">
          <h1 className="font-header">
            {t("lectern.hero.title1")}
          </h1>
          <h5 className='font-subheader'>
            {t("lectern.hero.title2")}
          </h5>
          <p>
            <span>{t("lectern.hero.keyword1")} </span> 
            <span className='text-breaker'>  |   </span>
            <span>{t("lectern.hero.keyword2")}</span>
          </p>
          <p>
            <span>{t("lectern.hero.keyword3")}<sup>2</sup></span>
            <span className='text-breaker'> | </span>
            <span>{t("lectern.hero.keyword4")}</span>
          </p>
          <a href="/company/contact"> {t("lectern.hero.btn")} </a>
        </div>
        </AnimateInView>
        <picture>
          <source media="(max-width: 768px)" srcSet={heroMO} />
          <source media="(min-width: 768px)" srcSet={hero} />
          <img src={hero} alt="Responsive Banner Image" />
        </picture>
      </div>
      <div className='lectern-detail'>
        <div className="lectern-detail-text">
          <AnimateInView>
            <h1 className="font-header">
              {t("lectern.detail.title")}
            </h1>
          </AnimateInView>
          <AnimateInView>
            <div dangerouslySetInnerHTML={
              {__html: t('lectern.detail.desc', {interpolation: {escapeValue: false}})}
            } />
          </AnimateInView>
          <AnimateInView delay={0.2}>
          <p className='lectern-detail-p font-subheader'>
            <strong dangerouslySetInnerHTML={
              {__html: t('lectern.detail.keyword1', {interpolation: {escapeValue: false}})}
            }/>
            <strong dangerouslySetInnerHTML={
              {__html: t('lectern.detail.keyword2', {interpolation: {escapeValue: false}})}
            }/>
            <strong dangerouslySetInnerHTML={
              {__html: t('lectern.detail.keyword3', {interpolation: {escapeValue: false}})}
            }/>
          </p>
          </AnimateInView>
        </div>
        <picture>
          <source media="(max-width: 768px)" srcSet={detailMO} />
          <source media="(min-width: 768px)" srcSet={detail} />
          <img src={detail} alt="Responsive Banner Image" />
        </picture>
      </div>
      <div className='lectern-banner'>
        <div className="lectern-banner-text">
          <AnimateInView>
          <h1 className="font-header">
            {t("lectern.banner.title")}
          </h1>
          </AnimateInView>

          <AnimateInView delay={0.2}>
          <p className='desc'>
            {t("lectern.banner.desc")}
          </p>
          </AnimateInView>

          <AnimateInView delay={0.3}>
          <p className='keywords font-small'>
            <span>{t("lectern.banner.keyword1")}</span>
            <span> {t("lectern.banner.keyword2")}</span>
            <span>{t("lectern.banner.keyword3")}</span>
          </p>
          </AnimateInView>
        </div>
        <picture>
          <source media="(max-width: 768px)" srcSet={bannerMO} />
          <source media="(min-width: 768px)" srcSet={banner} />
          <img src={banner} alt="Responsive Banner Image" />
        </picture>
      </div>
      <div className="lecture-adapt">
        <AnimateInView>
          <h1>{t("lectern.adapt.title")}</h1>
        </AnimateInView>
        <AnimateInView delay={0.2}>
        <p>
          {t("lectern.adapt.desc")}
        </p>
        </AnimateInView>
        <div className='lecture-adapt-box'>
          <img src={adap1} alt="" />
          <img src={adap2} alt="" />
          <img src={adap3} alt="" />
        </div>
      </div>
      <div className='lectern-specific'>
        <ol className='container font-small'>
          <li>
            <AnimateInView>
            {t("lectern.specs.item1")}
            </AnimateInView>
          </li>
          <li>
          <AnimateInView>
          {t("lectern.specs.item2")}
            </AnimateInView>
          </li>
          <li>
            <AnimateInView>
            {t("lectern.specs.item3")}
            </AnimateInView>
          </li>
          <li>
            <AnimateInView>
            {t("lectern.specs.item4")}
            </AnimateInView>
          </li>
          <li>
            <AnimateInView>
            {t("lectern.specs.item5")}
            </AnimateInView>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Lectern