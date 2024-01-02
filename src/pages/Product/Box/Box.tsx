import React from 'react'
import './Box.css'
import before from '../../../assets/screen-box/before.png';
import now from '../../../assets/screen-box/now.png';
import security from '../../../assets/screen-box/security.png';
import AnimateInView from '../../../components/Animation/AnimateInView';
import Tabs from '../../../components/BoxSwiper/Tabs';

const Box: React.FC=() =>{
  return (
    <div className='box-page'>
        <div className='box-hero'>
            <div className='box-hero-text'>
                <AnimateInView>
                <h1>Screen Sharing Box WB05</h1>
                <p>
                    One-click easy for 4K Ultra HD output. <br/>
                    Convenient screen sharing for maximized meeting experiences.
                </p>
                </AnimateInView>
            </div>
        </div>
        <div className='box-compare'>
            <AnimateInView direction='down'>
            <h1>
                Effortless Sharing, Efficient Conferencing
            </h1>
            </AnimateInView>
            <div className='box-compare-container'>
                <div className='before'>
                    <img src={before} alt="" />
                    <div className='box-compare-text'>
                        <AnimateInView direction='down'>
                        Messy cables, complex external devices, incompatible interfaces and unnecessary preparation time.
                        </AnimateInView>
                    </div>
                </div>
                <div className='now'>
                    <img src={now} alt="" />
                    <div className='box-compare-text'>
                        <AnimateInView direction='down' delay={0.2}>
                        With a screen sharing box, you can cast content directly from your computer,
                        phone, or table. All without the wires and cables. Freed from the need
                        for complex cables, you can now focus your time and energy on what
                        matters most.
                        </AnimateInView>
                    </div>
                </div>
            </div>
        </div>
        <div className='box-banner'>
            <div className='box-banner-text'>
                <AnimateInView direction='down'>
                <h1>
                    4K Ultra HD Output,
                    Athentic Details, Smooth Visuals
                </h1>
                </AnimateInView>
                <AnimateInView direction='right' delay={0.2}>
                    With a 4K output resolution and 60Hz high frame rate display, you can enjoy videos in hyper-realistic and vibrant color. H.264 decod-ing technology offers smooth visuals from one scene to the next, without impacting network speed.
                </AnimateInView>
                <ul>
                    <AnimateInView delay={0.4}>
                    <li>
                        4K <br/>
                        <span>Ultra HD Resolution</span>
                    </li>
                    </AnimateInView>
                    <AnimateInView delay={0.5}>
                    <li>
                        60Hz <br/>
                        <span>High Frame Rate Display</span>
                    </li>
                    </AnimateInView>
                    <AnimateInView delay={0.6}>
                    <li>
                        H.264 <br/>
                        <span>Video Decoding</span>
                    </li>
                    </AnimateInView>
                </ul>
            </div>
        </div>
        <div className='box-compatibiliy'>
            <div className="box-compatibility-text">
                <AnimateInView>
                <h1>
                    All-in-one Compatibilty,
                    Professional Meetings at Your Fingertips 
                </h1>
                <p>
                    Compatibility with various Mainstream Conference Display Devices* such as TVs, projectors,
                    LED screens and videos walls makes it ideal for a variety of office meeting scenarios
                </p>
                </AnimateInView>
            </div>
        </div>
        <div className='box-security'>
            <div className='box-security-text'>
                <AnimateInView>
                <h1>Enhanced Security Privacy, Protection under Control</h1>
                </AnimateInView>
                <AnimateInView delay={0.2}>
                    A dual-frequency Wi-Fi module integrated with a 2T2R high-gain antenna configuration provides twice
                    the data output compared to singular antenna designs. Enjoy ultra-low latency, improved clarity,
                    and simultaneous internet access when screen mirroring via the device.
                </AnimateInView>
                <ul className='box-security-ul'>
                    <AnimateInView direction='right' delay={0.4}>
                    <li>
                        <strong><span>Extend Screen Mode</span></strong> <br/>
                        <span>9-way split screen display</span>
                    </li>
                    </AnimateInView>
                    <AnimateInView direction='left' delay={0.4}>
                    <li>
                        <strong><span>Application Windows Sharing</span></strong><br/>
                        <span>Focused Content and Experience</span>
                    </li>
                    </AnimateInView>
                </ul>
            </div>
            <div className='img-box'>
                <img src={security} alt="" />
            </div>
        </div>  
        <Tabs/>
        <div className='box-specific'>
            <AnimateInView direction='left'>
            <h5 className='container'>
            *PC Compatibility: Supports Windows 7 and above, macOS 10.10 and above. Mobile and Tablet Screen sharing Compatibility: Supports Android 5.0 and above, iOS 9.0 and above.<br/>
            Wireless Screen sharing requires MAXHUB Wireless Screen sharing Device or installation of MAXHUB Share App. MAXHUB Share supports Android 5.veMAXHUB interactive flat panel upon first use.
            For computers, mobile devices, and tablets, screen sharing can be achieved by downloading the MAXHUB Share.
            *Multi-screen Display: Supports simultaneous screen shaing of up to 9 screens/devices.<br/>
            *One-click Easy Screen Sharing: For MAXHUB Wireless Screen sharing, the wireless screen sharing device needs to be paired with theMAXHUB interactive flat panel upon first use.
            For computers, mobile devices, and tablets, screen sharing can be achieved by downloading the MAXHUB Share.
            *0.15s Fast Screen Sharing: Results obtained from testing wireless screen sharing from an 11-inch MacBook Air to MAXHUB Screen Mirror Box in a MAXHUB lab environment, with no other interference.<br/>
            *Traditional TV Connectivity: Requires HDMI interface for connecting TVs or projectors to the MAXHUB Screen Sharing Box. Simply connect via a cable.<br/>
            *Wireless Screen Sharing Device: While not included, this can be purchased separately. Needs to be paired for first-time use.<br/>
            *Extended Screen Mode: After installing the driver on the sender's device, select Extended Mode for wireless screen sharing to use the large screen as a secondary display.<br/>
            *Mainstream Conference Display Devices: Devices need to be equipped with an HDMI interface.
           
            </h5>
            </AnimateInView>
      </div>
    </div>
  )
}

export default Box