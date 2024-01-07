import React, {useState} from 'react'
import './LED.css'
import { applications, hero, audio, steamline, control, intro1, intro2, intro3, intro4, integration, install, wall, stand, hanging, banner1, banner2, banner3, GH31, M27, Raptor } from './ImportList'
import LedIntroBG from './LED_Intro_BG'
import { Slider, SliderItem } from '../../../components/Slider/Slider'
import AnimateInView from '../../../components/Animation/AnimateInView'
import { useTranslation } from 'react-i18next'

const LED:React.FC=()=>{
    const {t} = useTranslation();

    const [introImg, setIntroImg] = useState<boolean[]>([false, false, false, false]);
    const [specTab, setSpecTab] = useState<string>("raptor");

    const handleTabClick = (type: string) => {
        setSpecTab(type);
    };

    const updateIntroImgState = (index: number, newValue: boolean) => {
        setIntroImg(prevState => {
          const newArray = [...prevState];
          newArray[index] = newValue;
          return newArray;
        });
    };

  return (
    <div className='led-page'>
        <div className='led-hero'>
            <div className='led-hero-text'>
                <AnimateInView>
                <p className='title font-header'>
                   {t("led.hero.title")}
                </p>
                <p className="keyword font-subheader">
                    {t("led.hero.desc")}
                </p>
                <a href="#" className='font-small'> {t("button.brochures")} {'>'}</a>
                </AnimateInView>
            </div>
            <video loop autoPlay muted playsInline  webkit-playsinline="">
                <source src={hero}/>
                {t("video")}
            </video>
        </div>
        <div className='led-intro'>
            <div className="led-intro-container">      
                <div className='text'
                    style={{
                        color:introImg[2] && !introImg[3]? 'white' : 'black'
                    }}
                >
                    <p className='title font-header'> 
                        {t("led.intro.title")}
                    </p>
                    <p className='desc'>
                        {t("led.intro.desc")}
                    </p>
                </div>
                <div className='led-intro-img'>
                    <img src={intro1} alt="" className={`intro_img ${introImg[0] && 'active'}`} 
                        style={{
                            transform:introImg[1]? "scale(1.1)" : "",
                            transitionDuration:"1s"
                        }}
                    />
                    <img src={intro2} alt="" className={`intro_img ${introImg[1] && 'active'}`} />
                    <img src={intro3} alt="" className={`intro_img ${introImg[2] && 'active'}`} />
                    <img src={intro4} alt="" className={`intro_img ${introImg[3] && 'active'}`} />
                </div>
            </div>
            <div className='led-intro-section'>
                {Array.from({ length: 4 }).map((_, i)=>(
                    <LedIntroBG updateValue={updateIntroImgState} index={i} key={i}/>
                ))}
            </div>
        </div>
        <div className='led-banner'>
            <p className="title font-header">
                {t("led.banner")}
            </p>
            <Slider interval={8000}>
                <SliderItem overlay={true} img={banner1}/>
                <SliderItem overlay={true} img={banner2}/>
                <SliderItem overlay={true} img={banner3}/>
            </Slider>
        </div>
        <div className="led-tech">
            <div className='led-tech-card'>
                <div className='led-tech-text'>
                <AnimateInView direction='left'>
                    <p className='title font-subheader'>
                        <strong>
                            {t("led.features.item1.title")}
                        </strong>
                    </p>
                    <p className="desc">
                        {t("led.features.item1.desc")}
                    </p>
                </AnimateInView>
                </div>
                <div className='led-tech-vdo'>
                    <AnimateInView direction='right'>
                    <video loop autoPlay muted playsInline webkit-playsinline="">
                        <source src={audio}/>
                        {t("video")}
                    </video>
                    </AnimateInView>
                </div>
            </div>
            <div className='led-tech-card reverse'>
                <div className='led-tech-text'>
                    <AnimateInView direction='right'>
                    <p className='title font-subheader'>
                        <strong>{t("led.features.item2.title")}</strong>
                    </p>
                    <p className="desc">
                        {t("led.features.item2.desc")}
                    </p>
                    <ul className='font-small'>
                        <li>{t("led.features.item2.key1")}</li>
                        <li>{t("led.features.item2.key2")}</li>
                        <li>{t("led.features.item2.key3")}</li>
                        <li>{t("led.features.item2.key4")}</li>
                    </ul>
                    </AnimateInView>
                </div>
                <div className='led-tech-vdo'>
                    <AnimateInView direction='left'>
                    <video loop autoPlay muted playsInline  webkit-playsinline="">
                        <source src={steamline}/>
                        Your browser does not support the video tag.
                    </video>
                    </AnimateInView>
                </div>
            </div>
            <div className='led-tech-card'>
                <div className='led-tech-text'>
                    <AnimateInView direction='left'>
                    <p className='title font-subheader'>
                        <strong>{t("led.features.item3.title")}</strong>
                    </p>
                    <p className="desc">
                        {t("led.features.item3.desc")}
                    </p>
                    <ul className='font-small'>
                        <li>{t("led.features.item3.key1")}</li>
                        <li>{t("led.features.item3.key2")}</li>
                        <li>{t("led.features.item3.key3")}</li>
                    </ul>
                    </AnimateInView>
                </div>
                <div className='led-tech-vdo'>
                    <AnimateInView direction='right'>
                    <video loop autoPlay muted playsInline webkit-playsinline="">
                        <source src={control}/>
                        Your browser does not support the video tag.
                    </video>
                    </AnimateInView>
                </div>
            </div>
        </div>
        <div className="led-integration">
            <video loop autoPlay muted playsInline webkit-playsinline="">
                <source src={integration}/>
                {t("video")}
            </video>
            <div className='led-integration-text'>
                <AnimateInView>
                <p className="title font-header">
                    {t("led.integrate.title")}
                </p>
                <p className='desc' dangerouslySetInnerHTML={
                    {__html: t('led.integrate.desc', {interpolation: {escapeValue: false}})}
                } />
                </AnimateInView>
            </div>
        </div>
        <div className="led-installation container">
            <AnimateInView>
            <p className='title font-header'>
                {t("led.install.title")}
            </p>
            <p className="desc">
                {t("led.install.desc")}
            </p>
            </AnimateInView>
            <AnimateInView delay={0.2}>
            <ul>
                <li>{t("led.install.keyword1")}</li>
                <li>{t("led.install.keyword2")}</li>
                <li>{t("led.install.keyword3")}</li>
            </ul>
            </AnimateInView>
            <video loop autoPlay muted playsInline  webkit-playsinline="">
                <source src={install}/>
                {t("video")}
            </video>
        </div>
        <div className="led-mounting">
            <AnimateInView>
            <p className="title font-header">
                {t("led.mounting.title")}
            </p>
            </AnimateInView>
            <div className='led-mouting-box'>
                <AnimateInView>
                <div className='led-mounting-item'>
                    <img src={hanging} alt="" />
                    <p>{t("led.mounting.keyword1")}</p>
                </div>
                </AnimateInView>
                <AnimateInView>
                <div className='led-mounting-item'>
                    <img src={stand} alt="" />
                    <p>{t("led.mounting.keyword2")}</p>
                </div>
                </AnimateInView>
                <AnimateInView>
                <div className='led-mounting-item'>
                    <img src={wall} alt="" />
                    <p>{t("led.mounting.keyword3")}</p>
                </div>
                </AnimateInView>
            </div>
            <p className='led-claimer'>
                {t("led.mounting.alert")}
            </p>
        </div>
        <div className="led-application container">
            <AnimateInView>
            <p className="title font-header"> {t("led.application")} </p>
            </AnimateInView>
            <div className="led-application-box">
                {applications.map((item, i)=>(
                    <div className="led-application-item" key={i}>
                        <AnimateInView delay={0.1*i}>
                        <img src={item.img} alt="" />
                        <p> {item.title}</p>
                        </AnimateInView>
                    </div>
                ))}
            </div>
        </div>
        <div className="led-specs">
            <p className="title font-header">{t("led.specs")}</p>
            <ul>
                <li className={`${specTab==="raptor" && 'active'}`} onClick={()=>handleTabClick('raptor')}> Raptor Series</li>
                <li className={`${specTab==="m27" && 'active'}`} onClick={()=>handleTabClick('m27')}> M27 Series</li>
                <li className={`${specTab==="gh31" && 'active'}`} onClick={()=>handleTabClick('gh31')}> GH31 Series</li>
            </ul>
            <div className='led-spec-content'>
                <img src={specTab==="raptor"? Raptor : specTab === "m27" ? M27 : GH31} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LED