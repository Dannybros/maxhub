import React from 'react'
import './Ptz.css'
import hero from '../../../../../assets/camera/ptz-hero.webp'
import banner from '../../../../../assets/camera/ptz-banner.webp'
import PtzIntro from './PtzIntro'

const PTZ:React.FC=()=>{
  return (
    <div>
      <div className='ptz-hero'>
        <div className="text">
          <p className="title"> MAXHUB UC P25 </p>
          <p className="desc">
            Phenomenal 4K UHD PTZ camera quality meets state-of-the-art remote control capabilities in the UC P25, for a natural, seamless, and organic experience of a video collaboration camera.
          </p>
          <p className="desc">
            This is the top-performing Pan-Tilt-Zoom (PTZ) video collaboration camera from MAXHU
          </p>
          <a href="#"> Brochures</a>
        </div>
        <img src={hero} alt="" />
      </div>
      <PtzIntro/>
      <div className="ptz-banner">
        <div className="text">
          <p className="title"> Plug-and-Play Simplicity </p>
          <p className="desc">
            The best webcam for video conferencing shouldn’t be complicated. The UC P25 provides an array connectivity options that work with various video applications. This plug-and-play simplicity enables you to set up the video collaboration camera instantly.
          </p>
          <ul>
            <li>USB plug-and-play</li> 
            <li>HDMI, USB and LAN ports</li>
            <li>High compatibility: MJPG/H264/H265</li> 
          </ul>
        </div>
        <img src={banner} alt="" />
      </div>
      <div className="ptz-features"></div>
      <div className="ptz-spec"></div>
    </div>
  )
}

export default PTZ