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

function Panel() {

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

  return (
    <div className='panel-page'>
        <section className='panel-hero'>
            <div className='panel-hero-text'>
                <p className=' title'>
                    Maxhub Interactive Panel <br/>
                    Certified For Zoom Rooms
                </p>
                <p className='desc font-header'>
                    Premium All-in-One 
                    Collaboration Display
                </p>
                <a href='#' className='font-small'> See All Brochures</a>
            </div>
        </section>
        <section className='panel-banner'>
            <div className='banner-text-wrapper'>
                <p className='panel-title font-header'>
                    Functional Integration
                </p>
                <p className='panel-desc'>
                    Interactive Panel delivers a sense of luxury with its modern workspace aesthetic and 95% screen-to-body ratio. The all-in-one display integrates camera, microphone, speaker, and touch panel. You can start the meeting right after plugging in the power supply.
                </p>
            </div>
            <img src={banner} alt="" />
        </section>
         <section className='panel-overview'>
            <img src={overview} alt="" className='container' />
        </section>
        <section className='panel-features container'>
            <h1 className='font-header'>See Vividly</h1>
            <div className='feature-lighting'>
                <p className='feature-lighting-text'>
                The newly upgraded 48MP camera ensures crisp detail during multi-participant video conferencing, while its 92° HFOV ultra-wide-angle lens expands the field of view to achieve a panoramic perspective. WDR Dynamic Anti-Backlight technology maintains ideal lighting contrast, preserving image clarity even under extreme lighting conditions.
                </p>
                <p className='feature-lighting-keywords'>
                    <span>Sony ½-inch Sensor </span>
                    <span>92° HFOV</span>
                    <span>WDR Dynamic Anti-Backlight</span>
                </p>
                <div className='lighting-vdo'>
                    <div className='vdo-description'>
                        <span>Without WDR</span>
                        <span>With WDR</span>
                    </div>
                    <video loop autoPlay muted>
                        <source src={lighting}/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className='feature-content'>
                <div className='panel-feature-text'>
                    <p className='title font-subheader'>Auto-Framing</p>
                    <p className='desc'>
                    The display automatically adjusts to achieve the best angle based on the number of participants and their location – you'll feel like you're communicating in person.
                    </p>
                </div>
                <video loop autoPlay muted>
                    <source src={auto}/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='feature-content reverse'>
                <div className='panel-feature-text'>
                    <p className='title font-subheader'>Speaker Tracking</p>
                    <p className='desc'>
                    8 microphones and speaker tracking technology locates the sound source in real time, ensuring the speaker is always the centre of attention.
                    </p>
                </div>
                <video loop autoPlay muted>
                    <source src={tracker}/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='feature-content'>
                <div className='panel-feature-text'>
                    <p className='title font-subheader'>Flip Camera</p>
                    <p className='desc'>
                    Auto flip when camera is on, and auto-hide when camera is off. You are fully protected to have safe meetings.
                    </p>
                </div>
                <video loop autoPlay muted>
                    <source src={camera}/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
        <PanelTrademarks/>
         <section className='panel-signals'>
            <p className='title font-header'>Bridging the Divide</p>
            <p className='desc font-small'>
                The MAXHUB V5 Classic Series includes 2 USB Type-C ports. By connecting to a laptop, it projects the laptop’s screen onto and plays sound from the MAXHUB V5 with reverse touch control. Now you can enjoy a wide-angle camera and 8 meters of voice pickup features on your laptop.
            </p>
            <p className='keyword'>Carrying Video, Audio & Touch Signals | Accessing the Wide-angle Camera and Powerful Mic Array | Type C Extension Mode</p>
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
                            <p className='title font-subheader'>Prioritizing Healthcare</p>
                            <p className='desc'>
                                Antibacterial glass, antibacterial passive styluses, and an antibacterial power button keeps you safe.
                            </p>
                        </div>
                        <img src={germ} alt="" />
                    </div>
                    <div className='panel-sustain'>
                        <div className='panel-health-text'>
                            <p className='title font-subheader'>Sustainability in Design</p>
                            <p className='desc'>
                                ENERGY STAR-certified, the MAXHUB V6 Transcend Series, as well as the V6 ViewPro Series, helps you protect the environment and save on costs.
                            </p>
                        </div>
                        <img src={sustain} alt="" />
                    </div>
                </motion.div>
            </div>
        </section>
        <section className='panel-benefits'>
            <div className='item'>
                <img src={managment} alt="" />
                <p className='title font-subheader'>Instant Device Access & Management</p>
                <p className='desc'>
                    IT teams can easily access and manage all MAXHUB devices instantly through the cloud.
                    Remotely update device firmware, turn the screen on/off, install apps, deliver a message to all panels, and more using the pre-installed MAXHUB device-management app.
                </p>
            </div>
            <div className='item'>
                <img src={brainstorming} alt="" />
                <p className='title font-subheader'>EFFICIENT BRAINSTORMING</p>
                <p className='desc'>
                Nurture unrestrained, creative brainstorming while efficiently capturing your team's ideas using the whiteboard, which starts up with just one click. Equipped with 20 touch points, the device supports two people writing simultaneously and comes with a variety of pre-installed graphic templates. Smart Optical Character Recognition (OCR) technology allows you to easily convert handwritten text to print.
                </p>
            </div>
            <div className='item'>
                <img src={screenShare} alt="" />
                <p className='title font-subheader'>Easy, Wireless Screen-Sharing</p>
                <p className='desc'>
                    Supports wireless screen sharing from up to 4 devices simultaneously with up to 4K resolution and low latency. The V6 ViewPro Series allows for greater flexibility during presentations, so you can turn pages and annotate directly on the touchscreen or manage the panel from your own device while seated.
                </p>
            </div>
            <div className='item'>
                <img src={HD} alt="" />
                <p className='title font-subheader'>See Every Detail in Ultra-HD</p>
                <p className="desc">
                Experience 1.07 billion colors in brilliant detail with high-color gamut and ultra-HD, 4K display, promising a professional-grade image quality. Zero-bonding technology effectively reduces air refraction and parallax for enhanced visual clarity.
                </p>
                
            </div>
        </section>
        <section className='panel-size'>
            <picture>
                <source media="(max-width: 768px)" srcSet={sizeMO} />
                <source media="(min-width: 768px)" srcSet={size} />
                <img src={size} alt="Responsive Banner Image" />
            </picture>
            <div className='panel-size-text'>
                <h2 className='font-subheader'>
                    Embark on a journey of innovation with our <br className='break-line'/> 4 meticulously crafted panel sizes
                </h2>
                <ul>
                    <li>
                        <p>55 inch</p>
                        <a href="" className='font-small'> Brochures</a>
                    </li>
                    <li>
                        <p>65 inch</p>
                        <a href="" className='font-small'> Brochures</a>
                    </li>
                    <li>
                        <p>75 inch</p>
                        <a href="" className='font-small'> Brochures </a>
                    </li>
                    <li>
                        <p>86 inch</p>
                        <a href="" className='font-small'> Brochures </a>
                    </li>
                </ul>
            </div>
        </section>
        <section className='panel-scenarios'>
            <Tabs/>
        </section>
        <section className='panel-specs'>
            <p className='title font-header'>
                Product Specifications
            </p>
            <img src={spec} alt="" />
        </section>
    </div>
  )
}

export default Panel