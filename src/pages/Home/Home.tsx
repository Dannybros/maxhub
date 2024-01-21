import {Slider, SliderItem} from '../../components/Slider/Slider'
import Category from '../../components/Category/Category'
import panel from '../../assets/explore/professional-panel.jpg'
import { GiArchiveResearch } from "react-icons/gi";
import { MdHighQuality } from "react-icons/md";
import { GiChaingun } from "react-icons/gi";
import Partner from '../../components/Partner/Partner'
import Feature from '../../components/Feature/Feature'
import Showcase from '../../components/Showcase/Showcase';
import ClippathAnimation from '../../components/Clippath_Animate/Clippath';
import { useTranslation } from 'react-i18next';
import './Home.css'
import { useState, useEffect } from 'react';
import ScrollTop from '../../components/ScrollTop/ScrollTop';

const HeroSlides=[
  {
    img:'https://sgp-cstore-pub.maxhub.com/maxhub_global_public/upload/lpjlp6ix/MTR-banner-pc-v2.jpg',
    class:"first"
  },
  {
    img:'https://sgp-store-pub.ifpserver.com/customizer-platform/5e8c6f8a942e4a7e83b3d5b9d34ab429.jpg',
    class:"second"
  },
  {
    img:panel,
    class:"third"
  },
  {
    img:'https://sgp-cstore-pub.maxhub.com/maxhub_global_public/5c668dd71a004b05910ec668208b6326',
    class:"fourth"
  },
]

function Home() {

  const {t} = useTranslation();

  return (
    <div className='home'>
      <ScrollTop/>
      <section className="hero">
        <Slider seperate={true} interval={90000}>
          {HeroSlides.map((slide, i)=>(
            <SliderItem img={slide.img} overlay={true} key={i}>
              <div className={`hero-slide-text ${slide.class}`}>
                <p className="title font-subheader">
                  {t(`home.hero.content${i+1}.title1`)} <br/>
                  {t(`home.hero.content${i+1}.title2`)}
                </p>
                <p className="desc font-default"> 
                  {t(`home.hero.content${i+1}.desc`)}
                </p>
              </div>
            </SliderItem>
          ))}
        </Slider>
      </section>
      <div className='main-content'>
        <Feature/>
        <Category/>
        <ClippathAnimation/>
      </div>
      <Showcase/>
      <div className='strength'>
        <div className='strength-message'>
          <div className='strength-list'>
            <GiArchiveResearch className="icon font-header"/>
            <h5 className='font-subheader'>
              {t("home.strength.item1.title")}
            </h5>
            <p>{t("home.strength.item1.desc")}</p>
          </div>
          <div className='strength-list'>
            <GiChaingun className="icon font-header"/>
            <h5 className='font-subheader'>
              {t("home.strength.item2.title")}
            </h5>
            <p>{t("home.strength.item2.desc")}</p>
          </div>
          <div className='strength-list'>
            <MdHighQuality className="icon font-header"/>
            <h5 className='font-subheader'>
              {t("home.strength.item3.title")}
            </h5>
            <p>{t("home.strength.item3.desc")}</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <Partner/>
      </div>
    </div>
  )
}

export default Home