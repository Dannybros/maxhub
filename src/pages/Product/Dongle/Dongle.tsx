import React from 'react'
import './Dongle.css'
import dongle from '../../../assets/dongle/dongle.jpg'
import dongleMO from '../../../assets/dongle/dongleMo.jpg'
import dongle_single from '../../../assets/dongle/wireless-dongle.jpg'
import { FaWifi } from "react-icons/fa";
import { LuCable } from "react-icons/lu";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LuSmartphoneNfc } from "react-icons/lu";
import { ImStopwatch } from "react-icons/im";
import { MdDevicesOther } from "react-icons/md";
import AnimateInView from '../../../components/Animation/AnimateInView'

const Dongle: React.FC=() =>{
  
  return (
    <div className='dongle-page'>
      <div className='dongle-hero'>
        <AnimateInView>
          <div className='dongle-hero-content'>
            <h1>
              5s Rapid Pair. Let the Meeting Begin, Instantly
            </h1>
            <p>
              Forget complicated installations. With 5s Rapid Pair, you simply have to plug in to the terminal and tap to begin mirroring*.
              A built-in power supply module ensures meetings won’t have to end when you need to switch plugs. Bridge connections when
              switching plugs between laptops or MAXHUB Displays for multi-screen sharing ease and convenience.
            </p>
            <p className='content-specific'>
              <span> 5s Rapid Pairing* </span>
              <span> Uninterrupted Connection </span>
              <span>Flexible Sharing</span>
            </p>
          </div>
        </AnimateInView>
        <picture>
          <source media="(max-width: 500px)" srcSet={dongleMO} />
          <source media="(min-width: 500px)" srcSet={dongle} />
          <img src={dongle} alt="Responsive Banner Image" />
        </picture>
      </div>
      <div className='dongle-icons container'>
        <AnimateInView delay={0.2}>
          <div className='icon-box slash'>
            <FaWifi/>
          </div>
          <h4> No Network Required</h4>
        </AnimateInView>
        <AnimateInView delay={0.3}>
          <div className='icon-box slash'>
            <LuCable/>
          </div>
          <h4> No Cable Required</h4>
        </AnimateInView>
        <AnimateInView delay={0.4}>
          <div className='icon-box'>
            <PiTelevisionSimpleBold/>
          </div>
          <h4> Multi-screen Sharing </h4>
        </AnimateInView>
        <AnimateInView delay={0.5}>
          <div className='icon-box'>
            <LuSmartphoneNfc/>
          </div>
          <h4> NFC </h4>
        </AnimateInView>
        <AnimateInView delay={0.6}>
          <div className='icon-box'>
            <ImStopwatch/>
          </div>
          <h4> 5s Rapid Pairing </h4>
        </AnimateInView>
        <AnimateInView delay={0.65}>
          <div className='icon-box'>
            <MdDevicesOther/>
          </div>
          <h4> Mult-device Connectivity</h4>
        </AnimateInView>
      </div>
      <div className='dongle-single-showcase container'>
        <img src={dongle_single} alt=''/>
        <div className='dongle-showcase-content' >
          <AnimateInView>
            <h1>Wireless Screen Sharing Dongle WT13</h1>
            <p>No Installation or Driver Required</p>
            <p>Type C Interface and Type A Adapter</p>
            <p>5s Rapid Pair</p>
          </AnimateInView>
        </div>
      </div>
      <div className='dongle-banner'>
          <AnimateInView>
        <div className='dongle-banner-text container'>
            <h1>
              NFC One-touch Sharing 
            </h1>
            <h2>
              Convenient Screen Sharing Straight from Your Mobile
            </h2>
            <p>
              With a built-in NFC tag, no meeting time has to be wasted. Simply tap your mobile device on the designated NFC area to connect to
              MAXHUB and start Sharing your screen wirelessly. You won’t even need to leave your seat.
            </p>
            <h3>
              Plug and Play Simplicity,
              Initiate Your Own Meeting with Ease
            </h3>
        </div>
          </AnimateInView>
      </div>
      <div className='dongle-promotion'>
        <AnimateInView>
        <div className='container dongle-promotion-text'>
          <h1>
            Wi-Fi 6 High-speed Wireless Transmission, <br/>
            Ready for Smoother Audio and Video Streaming
          </h1>
          <p>
            Wi-Fi 6 Wireless Network technology supports higher bitrates, enabling smoother and clearer playback for video reviews and document
            presentations. With Channel Spatial Multiplexing Technology, connectivity is kept free of interference. This means complex network
            environments are handled with ease, delivering stable and uninterrupted screen mirroring even for long periods.
          </p>
        </div>
        </AnimateInView>
        <div className='dongle-promotion-img'></div>
      </div>
      <div className='dongle-show'>
        <AnimateInView>
        <div className='dongle-hero-content'>
          <h1>
            Multi-device Connection. For Sharing without Limits
          </h1>
          <p className='dongle-show-description'>
            Experience simultaneous connections with up to 8 wireless screen mirroring devices, spanning various projection modes including mirror display, extended
            display, and application screen mirroring. Every presenter will enjoy greater flexibility and control over mirrored content, along with features such as Touch
            Back control and pen annotation. This provides easier control over the pace of ongoing conversations, all while enhancing interaction.
          </p>
          <p className='content-specific'>
            <span> 8 Devices Connectivity </span>
            <span> Multiple Modes of Projection </span>
            <span> Touch Back Control </span>
          </p>
        </div>
        </AnimateInView>
      </div>
      <div className='dongle-specific'>
        <AnimateInView direction='left'>
        <h5 className='container'>
          *USB Type-A compatible: Requires a USB Type-A adapter. <br/>
          *Tap to Mirror: The screen mirroring device needs to support Type-C DP video outputs and be paired with the conference tablet for the initial use. <br/>
          *5s Rapid Connect: Based on data from MAXHUB laboratories. <br/>
          *Computer requires USB 2.0 or above and supports both USB Type-A and Type-C interfaces. <br/>
          *Theoretically supports all computers, smartphones, and tablets with Type-C DP interface, allowing simultaneous screen mirroring and split-screen display of 2-4 devices. <br/>
          *Supports connection of up to 8 devices with simultaneous display of 4 devices. <br/>
          *Automatically searches for clear frequency bands before screen mirroring to ensure a more stable signal. <br/>
          *Images are for reference only. Please refer to the actual product. All data is collected from MAXHUB laboratories.
        </h5>
        </AnimateInView>
      </div>
    </div>
  )
}

export default Dongle