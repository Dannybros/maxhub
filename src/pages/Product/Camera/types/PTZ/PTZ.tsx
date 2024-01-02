import React, {useState, useEffect} from 'react'
import './Ptz.css'
import hero from '../../../../../assets/camera/ptz-hero.webp'
import banner from '../../../../../assets/camera/ptz-banner.webp'
import tilt from '../../../../../assets/camera/tilt.webp'
import pan from '../../../../../assets/camera/pan.webp'
import Hfov from '../../../../../assets/camera/Hfov.webp'
import spec from '../../../../../assets/camera/ptz-spec.webp'
import PtzIntro from './PtzIntro'

const featureImg=[pan, tilt, Hfov];

const PTZ:React.FC=()=>{

  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImg((prevTab) => (prevTab + 1) % featureImg.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeImg]);

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
      <div className="ptz-features container">
        <div className='text'>
          <p className='title'>
            Intelligent. Adaptive. Versatile.
          </p>
          <p className="desc">
            Whisper-quiet and smooth, the adaptive 4k UHD PTZ camera within the UC P25 video collaboration camera captures video quickly and precisely, for distraction-free meetings. A sensational 71° field of view keeps every team member visible, while the image flip option helps adjust your camera to match your mounting choice.
          </p>
          <p className="feature-keywords">
            Pan ±170° / Tilt ±30° / HFoV 71° <br/>
            Image flip <br/>
            0.1° preset accuracy <br/>
            255 preset positions
          </p>
        </div>
        <div className='ptz-feature-img'>
          <img src={featureImg[activeImg]} alt="" />
          <ul>
            <li className={`${activeImg===0 && 'active'}`}>Pan ±170°</li>
            <li className={`${activeImg===1 && 'active'}`}>Tilt ±30°</li>
            <li className={`${activeImg===2 && 'active'}`}>HFoV 71°</li>
          </ul>
        </div>
      </div>
      <div className="ptz-spec">
        <h1>Specifications</h1>
        <img src={spec} alt="" />
      </div>
    </div>
  )
}

export default PTZ