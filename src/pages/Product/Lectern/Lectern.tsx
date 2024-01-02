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

const Lectern: React.FC=() =>{
  return (
    <div className='lectern-page'>
      <div className='lectern-hero'>
        <AnimateInView>
        <div className="lectern-hero-text">
          <h1>Defind Your Stage</h1>
          <h5>Smart Lectern</h5>
          <p>
            <span>Smart System Emebedded </span> 
            <span className='text-breaker'>  |   </span>
            <span>Wired & Wireless Screen-sharing</span>
          </p>
          <p>
            <span>Onstage Annotation<sup>2</sup></span>
            <span className='text-breaker'> | </span>
            <span>Electrically Height Adjustable</span>
          </p>
          <a href="/company/contact"> Contact Our Sales </a>
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
          <h1>Screen Sharing, Reinvented</h1>
          </AnimateInView>
          <AnimateInView>
            This smart conference lectern connects with a mobile devices or laptops, <br className='break-line'/>
            and synchronizes the screens with onstage display; You can easily switch <br className='break-line'/>
            between devices<sup>1-4</sup>.
          </AnimateInView>
          <AnimateInView delay={0.2}>
          <p className='lectern-detail-p'>
            <span>Wireless <br className='break-line'/>Screen-sharing <sup>6</sup></span>
            <span> Multiple Choices <br className='break-line'/>for Connection<sup>5</sup></span>
            <span>Up to 8 devices <br className='break-line'/>for instant switch<sup>7</sup></span>
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
          <h1>Annotation at Will</h1>
          </AnimateInView>

          <AnimateInView delay={0.2}>
          <p>
            Annotate on the smart lectern <br/>
            while facing to the audience to <br/>
            improve engagement.
          </p>
          </AnimateInView>

          <AnimateInView direction='down' delay={0.3}>
          <p>
            <span>21.5 <br/>Inches</span>
            <span> Capacitive + EMR <br/>Touch Technology</span>
            <span>Smart Annotation</span>
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
        <h1>Wireless Adaptation</h1>
        </AnimateInView>
        <AnimateInView delay={0.2}>
        <p>
        Completely mobile, you can be sure your setup is always reliable and looks professional.
        </p>
        </AnimateInView>
        <div className='lecture-adapt-box'>
          <img src={adap1} alt="" />
          <img src={adap2} alt="" />
          <img src={adap3} alt="" />
        </div>
      </div>
      <div className='lectern-specific'>
        <ol className='container'>
          <li>
            <AnimateInView>
            Supports Windows 7 and above, macOS 10.10 and above, iOS 9.0 and above, Android 5.0 and above. The “MAXHUB Share” app needs to be downloaded, installed properly and granted necessary network access.
            </AnimateInView>
          </li>
          <li>
          <AnimateInView>
            Onstage display includes: MAXHUB Integrated LED Walls, MAXHUB Interactive Flat Panels, and display systems that work with a MAXHUB Wireless Box or support HDMI input.
            </AnimateInView>
          </li>
          <li>
            <AnimateInView>
            Supports screen-sharing from personal devices to the smart lectern, screen-sharing from the lectern to the external display via HDMI or wireless connection, and relay the screen-share from personal devices to the external display with on-screen annotation features.
            </AnimateInView>
          </li>
          <li>
            <AnimateInView>
            When connected in the same WLAN with a MAXHUB Integrated LED Wall, MAXHUB Smart Lectern does not need any additional apps to achieve wireless screen-sharing. However, when connected to other display systems, additional apps may be required to install on the smart lectern to do so or through a MAXHUB Wireless Box.
            </AnimateInView>
          </li>
          <li>
            <AnimateInView>
            Our Smart Lectern supports simultaneous connection with up to 8 devices and instant switch amongst them.
            </AnimateInView>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Lectern