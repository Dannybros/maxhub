import { useRef } from 'react'
import {motion, useTransform, useScroll, useSpring} from 'framer-motion'
import Tabs from '../../../components/BoxSwiper/Tabs'
import banner from '../../../assets/panel/banner.png'
import overview from '../../../assets/panel/overview.webp'
import lighting from '../../../assets/panel/light.mp4'
import auto from '../../../assets/panel/auto-frame.mp4'
import tracker from '../../../assets/panel/speaker-track.mp4'
import camera from '../../../assets/panel/camera.mp4'
import signal from '../../../assets/panel/signal.jpg'
import germ from '../../../assets/panel/anti-bacteria.webp'
import sustain from '../../../assets/panel/sustain.webp'
import screenShare from '../../../assets/panel/screen-share.webp'
import brainstorming from '../../../assets/panel/brainstorming.webp'
import managment from '../../../assets/panel/managment.webp'
import HD from '../../../assets/panel/HD.webp'
import size from '../../../assets/panel/size.jpg'
import sizeMO from '../../../assets/panel/sizeMO.jpg'
import spec from '../../../assets/panel/specs.jpg'
import PanelTrademarks from './PanelTrademarks'
import './Panel.css'
import { useTranslation } from 'react-i18next'

function Panel() {

    const {t} = useTranslation();

    const healthyRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: healthyRef,
        offset: ["0.3 0.7", "0.7 1"]
    });

    const xSpring =  useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
    const translateXProgress = useTransform(xSpring, [0, 1], ['0%', "-40%"])

    const benefits=[managment, brainstorming, screenShare, HD]

  return (
    <div className='panel-page'>
        <section className='panel-hero'>
            <div className='panel-hero-text'>
                <p className=' title'>
                    {t("panel.hero.keyword1")} <br/>
                    {t("panel.hero.keyword2")}
                </p>
                <p className='desc font-header'>
                    {t("panel.hero.title")}
                </p>
                <a href='https://sgp-store-pub.ifpserver.com/customizer-platform/f33b73f488ae49ad9bf370d0d7ee0c58.pdf' target='_blank' className='font-small'>
                    {t("button.brochures")}
                </a>
            </div>
        </section>
        <section className='panel-banner'>
            <div className='banner-text-wrapper'>
                <p className='panel-title font-header'>
                    {t("panel.banner.title")}
                </p>
                <p className='panel-desc'>
                    {t("panel.banner.desc")}
                </p>
            </div>
            <img src={banner} alt="" />
        </section>
        <section className='panel-overview'>
            <img src={overview} alt="" className='container' />
        </section>
        <section className='panel-features container'>
            <h1 className='font-header'>{t("panel.features.title")}</h1>
            <div className='feature-lighting'>
                <p className='feature-lighting-text'>
                    {t("panel.features.desc")}
                </p>
                <p className='feature-lighting-keywords'>
                    <span>{t("panel.features.item1.key1")}</span>
                    <span>{t("panel.features.item1.key2")}</span>
                    <span>{t("panel.features.item1.key3")}</span>
                </p>
                <div className='lighting-vdo'>
                    <div className='vdo-description'>
                        <span>{t("panel.features.item1.compare2")} WDR</span>
                        <span>{t("panel.features.item1.compare1")} WDR</span>
                    </div>
                    <video loop autoPlay muted playsInline  webkit-playsinline="">
                        <source src={lighting}/>
                        {t("video")}
                    </video>
                </div>
            </div>
            <div className='feature-content'>
                <div className='panel-feature-text'>
                    <p className='title font-subheader'>
                        {t("panel.features.item2.title")}
                    </p>
                    <p className='desc'>
                        {t("panel.features.item2.desc")}
                    </p>
                </div>
                <video loop autoPlay muted playsInline  webkit-playsinline="">
                    <source src={auto}/>
                    {t("video")}
                </video>
            </div>
            <div className='feature-content reverse'>
                <div className='panel-feature-text'>
                    <p className='title font-subheader'>
                        {t("panel.features.item3.title")}
                    </p>
                    <p className='desc'>
                        {t("panel.features.item3.desc")}
                    </p>
                </div>
                <video loop autoPlay muted playsInline  webkit-playsinline="">
                    <source src={tracker}/>
                    {t("video")}
                </video>
            </div>
            <div className='feature-content'>
                <div className='panel-feature-text'>
                    <p className='title font-subheader'>
                        {t("panel.features.item4.title")}
                    </p>
                    <p className='desc'>
                        {t("panel.features.item4.desc")}
                    </p>
                </div>
                <video loop autoPlay muted playsInline  webkit-playsinline="">
                    <source src={camera}/>
                    {t("video")}
                </video>
            </div>
        </section>
        <PanelTrademarks/>
        <section className='panel-signals'>
            <p className='title font-header'>{t("panel.port.title")}</p>
            <p className='desc font-small'>
                {t("panel.port.desc")}
            </p>
            <p className='keyword'>{t("panel.port.key")}</p>
            <img src={signal} alt="" />
        </section>
        <section className="panel-health" ref={healthyRef}>
            <div className="panel-health-container">
                <motion.div 
                    className="wrapper"
                    style={{
                        translateX:translateXProgress
                    }}
                >
                    <div className='panel-germ'>
                        <div className='panel-health-text'>
                            <p className='title font-subheader'>
                                {t("panel.health.title")}
                            </p>
                            <p className='desc'>
                                {t("panel.health.desc")}
                            </p>
                        </div>
                        <img src={germ} alt="" />
                    </div>
                    <div className='panel-sustain'>
                        <div className='panel-health-text'>
                            <p className='title font-subheader'>
                                {t("panel.sustain.title")}
                            </p>
                            <p className='desc'>
                                {t("panel.sustain.desc")}
                            </p>
                        </div>
                        <img src={sustain} alt="" />
                    </div>
                </motion.div>
            </div>
        </section>
        <section className='panel-benefits'>
            {benefits.map((benefit, i)=>(
                <div className='item' key={i}>
                    <img src={benefit} alt="" />
                    <p className='title font-subheader'>
                        {t(`panel.benefits.item${i+1}.title`)}
                    </p>
                    <p className='desc'>
                        {t(`panel.benefits.item${i+1}.desc`)}
                    </p>
                </div>
            ))}
        </section>
        <section className='panel-size'>
            <picture>
                <source media="(max-width: 768px)" srcSet={sizeMO} />
                <source media="(min-width: 768px)" srcSet={size} />
                <img src={size} alt="Responsive Banner Image" />
            </picture>
            <div className='panel-size-text'>
                <h2 className='font-subheader'>
                    {t("panel.banner2.title1")}<br className='break-line'/> {t("panel.banner2.title2")}
                </h2>
                <ul>
                    <li>55 inch</li>
                    <li>65 inch</li>
                    <li>75 inch</li>
                    <li>86 inch</li>
                </ul>
            </div>
        </section>
        <section className='panel-scenarios'>
            <Tabs/>
        </section>
        <section className='panel-specs'>
            <p className='title font-header'>
                {t("panel.specs")}
            </p>
            <img src={spec} alt="" />
        </section>
    </div>
  )
}

export default Panel