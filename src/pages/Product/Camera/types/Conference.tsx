import './Conference.css'
import React, {useState} from 'react'
import { con_features } from './initials';
import { FaCheckSquare } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { BsBadge4K } from "react-icons/bs";
import TrademarkBG from '../../Panel/TrademarkBG';
import hero from '../../../../assets/camera/conference-hero.webp'
import management from '../../../../assets/camera/con-manage.webp'
import high_1 from '../../../../assets/camera/con-feat-1.webp'
import high_2 from '../../../../assets/camera/con-feat-2.webp'
import spec from '../../../../assets/camera/conference-spec.jpg'

const Conference:React.FC=()=>{
  const [highlight, setHighLight] = useState<number>(1);

  return (
    <div>
      <div className='conference-hero'>
        <div className="text">
          <div className="title">MAXHUB UC SO7</div>
          <div className="desc">
            All-in-one Ultra-HD USB Videobar with 8-meter Voice Pick-up Range for Small and Medium-sized Rooms
          </div>
          <a href="#">Brochure</a>
        </div>
        <img src={hero} alt="" />
      </div>
      <div className="conference-keywords">
        <div className='conference-keywords-wrapper container'>
          <div className='keword'>
            <FaCheckSquare/>
            <div className='desc'>Intelligent plug and play with all-in-one USB BYOD</div>
          </div>
          <div className='keword'>
            <AiFillSound/>
            <div className='desc'>Hear and be heard everywhere with microphones featuring 8m voice pickup</div>
          </div>
          <div className='keword'>
            <BsBadge4K/>
            <div className='desc'>Always see and be seen with UHD 4K video and built-in AI functions</div>
          </div>
        </div>
      </div>
      <div className="conference-highlights">
      <div className='conference-highlight-bg'>
          <TrademarkBG count={1} setCount={setHighLight} heightPercentage={50}/>
          <TrademarkBG count={2} setCount={setHighLight} heightPercentage={50}/>
        </div>
        <div className='conference-highlight-main'>
          <div className='text'>
            <p className='title'>Intelligent Plug and Play</p>
            <div className={`highlight-item border-bottom ${highlight===1 && 'active'}`}>
              <p className='highlight-title'> All-in-one</p>
              <div className='highlight-desc'>
                <div className='highlight-desc-text'>
                  Perfect for a BYOD (Bring Your Own Device) environment, this plug and play camera bar features an integrated camera, microphone, and speaker.
                </div>
              </div>
            </div>
            <div className={`highlight-item ${highlight===2 && 'active'}`}>
              <p className='highlight-title'> Easy set up</p>
              <div className='highlight-desc'>
                <div className='highlight-desc-text'>
                  All you need is two cables—one for the power supply (PoE) and a Type-C USB cable. Thanks to the PIR sensor and hands-free function, the device automatically turns on when movement is detected within a 3m range. It enters standby mode when no movement is detected in a 30-minute timeframe, reducing energy consumption.                
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
            <img src={feat.img} alt="" />
            <div className="text">
              <p className="title">{feat.title} </p>
              <p className="desc"> {feat.desc} </p>
            </div>
          </div>
        ))}
      </div> 
      <div className='conference-manage'>
        <div className='conference-manage-box container'>
          <div className="conference-manage-text">
            <p className="title">Device Management at Your Fingertips</p>
            <p className="desc">
              Use MAXHUB ALIGN to update and optimize the status of your video meeting devices, and fine-tune camera performance to look your best on video calls. Device can be managed remotely for your hybrid meeting needs through the MAXHUB Pivot.
            </p>
          </div>
          <img src={management} alt="" />
        </div>
      </div>
      <div className='conference-spec'>
        <h1>Specifications</h1>
        <img src={spec} alt="" />
      </div>
    </div>
  )
}

export default Conference