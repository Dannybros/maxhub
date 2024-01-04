import React, {useState} from 'react'
import './LED.css'
import { applications, hero, audio, steamline, control, intro1, intro2, intro3, intro4, integration, install, wall, stand, hanging, banner1, banner2, banner3, GH31, M27, Raptor } from './ImportList'
import LedIntroBG from './LED_Intro_BG'
import { Slider, SliderItem } from '../../../components/Slider/Slider'
import AnimateInView from '../../../components/Animation/AnimateInView'

const LED:React.FC=()=>{

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
                    LED DISPLAY WALL
                </p>
                <p className="keyword font-subheader">
                    Simple, Smart, Connected
                </p>
                <a href="#" className='font-small'> Brochures {'>'}</a>
                </AnimateInView>
            </div>
            <video loop autoPlay muted>
                <source src={hero}/>
                Your browser does not support the video tag.
            </video>
        </div>
        <div className='led-intro'>
            <div className="led-intro-container">      
                <div className='text'
                    style={{
                        color:introImg[2] && !introImg[3]? 'white' : 'black'
                    }}
                >
                    <p className='title font-header'> Sleek, Stylish, Streamlined </p>
                    <p className='desc'>
                        A standardized cabinet ratio design makes the Our LED perfect for a host of content-sharing use cases. The ultra-slim and lightweight structure takes up minimal space, without compromising on visual impact. Create a personalized display experience without wasting time, or space. Our LED Display delivers incredible results in a slim package.
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
                Stunning Visuals to MAXimize Your Impact
            </p>
            <Slider interval={4000}>
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
                        <strong>Amazing Built-In Audio</strong>
                    </p>
                    <p className="desc">
                        Integrated LED Wall solution ensures exceptional audio quality with studio-grade, professionally tuned clarity every time.
                    </p>
                </AnimateInView>
                </div>
                <div className='led-tech-vdo'>
                    <AnimateInView direction='right'>
                    <video loop autoPlay muted>
                        <source src={audio}/>
                        Your browser does not support the video tag.
                    </video>
                    </AnimateInView>
                </div>
            </div>
            <div className='led-tech-card reverse'>
                <div className='led-tech-text'>
                    <AnimateInView direction='right'>
                    <p className='title font-subheader'>
                        <strong>Super-Simple, Streamlined Technology</strong>
                    </p>
                    <p className="desc">
                        Spend less time setting up and more time collaborating.
                    </p>
                    <ul className='font-small'>
                        <li>› Integrated video processing </li>
                        <li>› Screen-split for up to 4 windows </li>
                        <li>› PIP/PBP flexible display modes </li>
                        <li>› Support 3 x HDMI 2.0 in & 1 x HDMI 2.0 out </li>
                    </ul>
                    </AnimateInView>
                </div>
                <div className='led-tech-vdo'>
                    <AnimateInView direction='left'>
                    <video loop autoPlay muted>
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
                        <strong>Easy Collaboration</strong>
                    </p>
                    <p className="desc">
                        Ensure seamless connections through the most up-to-date operating systems and built-in sharing features.
                    </p>
                    <ul className='font-small'>
                        <li>› Built-in Android 9.0</li>
                        <li>› LAN screen-sharing for up to 4 windows</li>
                        <li>› Low-latency stable mirroring support</li>
                    </ul>
                    </AnimateInView>
                </div>
                <div className='led-tech-vdo'>
                    <AnimateInView direction='right'>
                    <video loop autoPlay muted>
                        <source src={control}/>
                        Your browser does not support the video tag.
                    </video>
                    </AnimateInView>
                </div>
            </div>
        </div>
        <div className="led-integration">
            <video loop autoPlay muted>
                <source src={integration}/>
                Your browser does not support the video tag.
            </video>
            <div className='led-integration-text'>
                <AnimateInView>
                <p className="title font-header"> Seamless Integrated LED Display</p>
                <p className="desc">
                    Excellent stability with impeccable reliability and <span className='highlighter'>easy maintenance</span> with <span className='highlighter'>low power consumption </span> and <span className='highlighter'>consistent quality.</span>
                </p>
                </AnimateInView>
            </div>
        </div>
        <div className="led-installation container">
            <AnimateInView>
            <p className='title font-header'>Quick, Easy & Efficient Installation </p>
            <p className="desc">
                Simple installation to eliminate setup headaches and easy maintenance, no need for expert support. Features include:
            </p>
            </AnimateInView>
            <AnimateInView delay={0.2}>
            <ul>
                <li>Quick splicing</li>
                <li>Wall-mounted design reduces installation difficulty</li>
                <li>Fine-tuned flatness level</li>
            </ul>
            </AnimateInView>
            <video loop autoPlay muted>
                <source src={install}/>
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="led-mounting">
            <AnimateInView>
            <p className="title font-header">
                Multiple Indoor Mounting Options
            </p>
            </AnimateInView>
            <div className='led-mouting-box'>
                <AnimateInView>
                <div className='led-mounting-item'>
                    <img src={hanging} alt="" />
                    <p>Ceiling-hanging</p>
                </div>
                </AnimateInView>
                <AnimateInView>
                <div className='led-mounting-item'>
                    <img src={stand} alt="" />
                    <p>Mobile Stand-mounting</p>
                </div>
                </AnimateInView>
                <AnimateInView>
                <div className='led-mounting-item'>
                    <img src={wall} alt="" />
                    <p>Wall-mounting</p>
                </div>
                </AnimateInView>
            </div>
            <p className='led-claimer'>
                *Mobile Stand-mounting only support 120″, 138″ and 150″
            </p>
        </div>
        <div className="led-application container">
            <AnimateInView>
            <p className="title font-header"> Applications </p>
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
            <p className="title font-header">Specifications</p>
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