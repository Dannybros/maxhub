import React, {ReactNode} from 'react'
import './Explore.css'
import { Link } from 'react-router-dom'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Eduation from '../../assets/explore/Education.png'
import AllSolution from '../../assets/explore/all-solution.png'
import Professional from '../../assets/explore/professional.jpg'
import dongle from '../../assets/explore/dongle.jpg'
import Camera from '../../assets/explore/Camera.webp'
import Pen from '../../assets/explore/accessories.jpg'
import ScreenBox from '../../assets/explore/ScreenBox.jpg'
import Lecture2 from '../../assets/explore/lecture-two.jpg'
import AnimateInView from '../../components/Animation/AnimateInView'
import { useTranslation } from 'react-i18next'

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
  const {t} = useTranslation();

  return (
    <div className='products-explore'>
      <div className='scroll-snap'>
        <Header fullScreen={true}/>
      </div>

      <div className='scroll-snap product-section full-h'>
        <div className='all-solution-banner'>
          <div className='all-solution-bg-cyan'/>
          <div className='all-solution-bg-purple'/>
          <div className='all-solution-bg-blue'/>
          <div className='all-content-box'>
            <AnimateInView direction='left'>
              <h1 className='font-header'> 
                {t("explore.all.title")}
              </h1>
              <p>{t("explore.all.desc1")} <br/> {t("explore.all.desc2")}</p>
              <a href='/' className='font-small'>
                {t("button.brochures")}
              </a>
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
          <p> {t("explore.education.title1")}</p>
          </AnimateInView>

          <AnimateInView>
          <h1>{t("explore.education.title2")}</h1>
          </AnimateInView>

          <AnimateInView>
          <p>
            {t("explore.education.desc")}
          </p>
          </AnimateInView>

          <AnimateInView>
          <Link to='/product/education' className='font-small'>   
            {t("button.detail")}
          </Link>
          </AnimateInView>
        </div>
      </Banner>

      <Banner
        imageSrcPC={Professional}
        imageSrcMO={Professional}
        type='professional'
      >
        <div className="professional-content-box">
          <div className='main-title'>
            <AnimateInView direction='left'>
            <h3 className='font-subheader'>
              {t("explore.panel.title1")}
            </h3>
            <h1 className='font-subheader'>
              {t("explore.panel.title2")}
            </h1>
            </AnimateInView>
          </div>
          <div className="content-description">
            <p className='font-default'>
              {t("explore.panel.desc")} 
            </p>
            <Link to="/product/panel" className='font-small'> 
              {t("button.detail")}
            </Link>
          </div>
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
              {t("explore.led.desc1")} 
            </AnimateInView>
          </div>

          <div className="led-content-text">
          <AnimateInView>
            <h3 className='font-subheader'>
              {t("explore.led.title")} 
            </h3>
            <p>
              {t("explore.led.desc2")} 
            </p>
            <Link to='/product/led'>
              {t("button.detail")}
            </Link>
          </AnimateInView>
          </div>
        </div>
      </Banner>

      <div className='scroll-snap accessory-section'>
        <div className='accessory-title'>
          <AnimateInView direction='down' delay={0.2}>
          <h1 className='font-header'>
            {t("explore.accessories.title")}
          </h1>
          <p>{t("explore.accessories.desc")}</p>
          </AnimateInView>
        </div>
        
        <div className='accessory-banner'>
          <div className='pen group-cover'>
            <img src={Pen} alt="" />
            <div className='pen group-content'>
              <AnimateInView direction='left' delay={0.4}>
                <h1 className="font-subheader">
                  {t("explore.pen.title")}
                </h1>
                <p>{t("explore.pen.desc")}</p>
                <Link to='/product/pen'> 
                  {t("button.detail")} {'>'}
                </Link>
              </AnimateInView>
            </div>
          </div>

          <div className='camera group-cover'>
            <img src={Camera} alt="" />
            <div className='camera group-content'>
              <AnimateInView direction='left' delay={0.4}>
                <h1 className="font-subheader">
                  {t("explore.camera.title")}
                </h1>
                <p>
                  {t("explore.camera.title")}
                </p>
                <Link to='/product/camera/panoramic'> 
                  {t("button.detail")}  {'>'}
                </Link>
              </AnimateInView>
            </div>
          </div>

          <div className='dongle group-cover'>
            <img src={dongle} alt="" />
            <div className='dongle group-content'>
              <AnimateInView direction='left'>
                <h1 className="font-subheader">
                  {t("explore.dongle.title")} 
                </h1>
                <p>{t("explore.dongle.desc1")} </p>
                <p>{t("explore.dongle.desc2")} </p>
                <Link to='/product/wireless-dongle'> 
                  {t("button.detail")} {'>'}
                </Link>
              </AnimateInView>
            </div>
          </div>

          <div className='screen-box group-cover'>
            <img src={ScreenBox} alt="" />
            <div className='screen-box group-content'>
              <AnimateInView>
                <h1 className="font-subheader">
                  {t("explore.box.title")} 
                </h1>
                <p> {t("explore.box.desc")} </p>
                <Link to='/product/sharescreen-box'> 
                  {t("button.detail")} {'>'}
                </Link>
              </AnimateInView>
            </div>
          </div>

          <div className='lectern group-cover'>
            <img src={Lecture2} alt="" />
            <div className='lectern group-content'>
              <AnimateInView>
                <h1 className="font-subheader">
                  {t("explore.lectern.title")} 
                </h1>
                <p> 
                  {t("explore.lectern.desc")} 
                </p>
                <Link to='/product/smart-lectern'> 
                  {t("button.detail")} {'>'}
                </Link>
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