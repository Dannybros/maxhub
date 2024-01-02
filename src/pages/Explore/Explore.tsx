import React, {ReactNode} from 'react'
import './Explore.css'
import { Link } from 'react-router-dom'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Eduation from '../../assets/explore/Education.png'
import AllSolution from '../../assets/explore/all-solution.png'
import Professional from '../../assets/explore/professional.jpg'
import dongle from '../../assets/explore/dongle.jpg'
import Camera from '../../assets/explore/Camera.jpg'
import Pen from '../../assets/explore/accessories.jpg'
import ScreenBox from '../../assets/explore/ScreenBox.jpg'
import Lecture2 from '../../assets/explore/lecture-two.jpg'
import AnimateInView from '../../components/Animation/AnimateInView'

interface BannerProps {
  children: ReactNode;
  imageSrcPC: string;
  type: string;
  imageSrcMO?: string;
}

const Banner: React.FC<BannerProps> = ({children, type, imageSrcPC, imageSrcMO}) => {
  return (
    <div className='scroll-snap product-section full-h'>
      <div className={`banner ${type}`}>
        <picture>
          <source media="(max-width: 500px)" srcSet={imageSrcMO} />
          <source media="(min-width: 500px)" srcSet={imageSrcPC} />
          <img src={imageSrcPC} alt="Responsive Banner Image" />
        </picture>
      </div>
      {children}
    </div> 
  );
};

const Explore: React.FC=()=> {
  return (
    <div className='products-explore'>
      <div className='scroll-snap'>
        <Header fullScreen={true}/>
      </div>

      <div className='scroll-snap product-section full-h'>
        <div className='all-solution-banner'>
          <div className='all-content-box'>
            <AnimateInView direction='left'>
            <h1> All Solution </h1>
            <p>Super Set for Large Meeting <br/> Includes 14 Essential Futuristic Equipements</p>
            <p>From $7000</p>
            <a href='/'> Download Brochures </a>
            </AnimateInView>
          </div>
          <div className='all-img-box'>
            <img src={AllSolution} alt="Responsive Banner Image" />
          </div>
        </div>
      </div> 

      <Banner
        imageSrcMO=''
        imageSrcPC={Eduation}
        type='education'
      >
        <div className="education-content-box">
          <AnimateInView>
          <p> Bring Your Classroom to Life With</p>
          </AnimateInView>
          <AnimateInView>
          <h1>Interarive Education Whiteboard</h1>
          </AnimateInView>
          <AnimateInView>
          <p>
            Students concentrate on content, not the display, thanks to the design’s narrow bezel and thin body, 
            which give it a screen-to-body ratio of up to around 89%.
          </p>
          </AnimateInView>
          <AnimateInView>
          <Link to='/product/education'> Learn more </Link>
          </AnimateInView>
        </div>
      </Banner>

      <Banner
        imageSrcPC={Professional}
        imageSrcMO={Professional}
        type='professional'
      >
        <div className="professional-content-box">
        <AnimateInView direction='left'>
          <div className='main-title'>
            <h3>Profesional Panel For Meeting</h3>
            <h1>VIRTUALLY AUTO FACE-TO-FACE AIMING</h1>
          </div>
          <div className="content-description">
            <p>
              Elevate meetings with seamless collaboration, vibrant visuals, and intuitive touch controls for interactive presentations and real-time content sharing.  
            </p>
            <Link to="/product/panel"> Learn More</Link>
          </div>
        </AnimateInView>
        </div>
      </Banner>

      <Banner
        imageSrcPC="https://images.samsung.com/kdp/cms_contents/303358/6c14fb77-1f92-479b-b0f1-f2d4b7047a92.jpg"
        imageSrcMO='https://images.samsung.com/kdp/cms_contents/303358/52ac17d6-521a-4aa7-80f2-4d465ee14e3c.jpg'
        type='led'
      >
        <div className="led-content-box">
          <div className="led-content-title">
            <AnimateInView direction='down'>
              Stunning Visuals to maximize Your Impact
            </AnimateInView>
          </div>

          <div className="led-content-text">
          <AnimateInView>
            <h3>MAXHUB LED wall</h3>
            <p>
              Versatile and Innovative 4K visuals, all-in-one functionality in an ultra-lightweight,
              ultra-thin LED.
            </p>
            <Link to='/product/led'> Learn more </Link>
          </AnimateInView>
          </div>
        </div>
      </Banner>

      <div className='scroll-snap accessory-section'>
        <div className='accessory-title'>
          <AnimateInView direction='down' delay={0.2}>
          <h1>Accessories</h1>
          <p>Explore cases, covers, keyboards, Apple Pencil, AirPods, and more.</p>
          </AnimateInView>
        </div>
        
        <div className='accessory-banner'>
          <div className='pen group-cover'>
            <img src={Pen} alt="" />
            <div className='pen group-content'>
              <AnimateInView direction='left' delay={0.4}>
              <h1>Stylus Pen</h1>
              <p>Dual Color with Smooth Writing </p>
              <Link to='/product/pen'> Learn more {'>'}</Link>
              </AnimateInView>
            </div>
          </div>

          <div className='camera group-cover'>
            <img src={Camera} alt="" />
            <div className='camera group-content'>
              <AnimateInView direction='left' delay={0.4}>
              <h1>UC 350 Camera</h1>
              <p> 360° All-in-One Conference Camera </p>
              <Link to='/product/camera/panoramic'> Learn more {'>'}</Link>
              </AnimateInView>
            </div>
          </div>

          <div className='dongle group-cover'>
            <img src={dongle} alt="" />
            <div className='dongle group-content'>
              <AnimateInView direction='left'>
              <h1>Wireless Screen Sharing Dongle</h1>
              <p> No Installation or Driver Required</p>
              <p>Plug and Play with Drive-free Sharing</p>
              <Link to='/product/wireless-dongle'> Learn more {'>'}</Link>
              </AnimateInView>
            </div>
          </div>

          <div className='screen-box group-cover'>
            <img src={ScreenBox} alt="" />
            <div className='screen-box group-content'>
              <AnimateInView>
              <h1>Wireless Screen Sharing Box</h1>
              <p> Convenient screen sharing for maximized meeting experiences.</p>
              <Link to='/product/sharescreen-box'> Learn more {'>'}</Link>
              </AnimateInView>
            </div>
          </div>

          <div className='lectern group-cover'>
            <img src={Lecture2} alt="" />
            <div className='lectern group-content'>
              <AnimateInView>
              <h1>Smart Lectern</h1>
              <p> 
                Functionality of a PC, microphone, and touchscreen into one conference lectern.
              </p>
              <Link to='/product/smart-lectern'> Learn more {'>'}</Link>
              </AnimateInView>
            </div>
          </div>
        </div>
      </div> 

      <div className='scroll-snap'>
        <Footer fullScreen={true}/>
      </div>
    </div>
  )
}

export default Explore