import {Slider, SliderItem} from '../../components/Slider/Slider'
import Category from '../../components/Category/Category'
import { GiArchiveResearch } from "react-icons/gi";
import { MdHighQuality } from "react-icons/md";
import { GiChaingun } from "react-icons/gi";
import Partner from '../../components/Partner/Partner'
import Feature from '../../components/Feature/Feature'
import Showcase from '../../components/Showcase/Showcase';
import ClippathAnimation from '../../components/Clippath_Animate/Clippath';
import { HeroSlides } from './HeroInfo';
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <section className="hero">
        <Slider interval={90000}>
          {HeroSlides.map((slide, i)=>(
            <SliderItem img={slide.img} smallImg={slide.smallImg} overlay={true} key={i}>
              <div className={`hero-slide-text ${slide.class}`}>
                <p className="title"> {slide.title} </p>
                <p className="desc"> {slide.desc} </p>
              </div>
            </SliderItem>
          ))}
          {/* <SliderItem img='https://sgp-store-pub.ifpserver.com/customizer-platform/5e8c6f8a942e4a7e83b3d5b9d34ab429.jpg' overlay={true}>
            <div className='hero-slide-text second'>
              <div className='hero-slide-text first'>
                <p className="title">
                Transform Learning with MaxHub: Engage, Collaborate, Succeed!
                </p>
                <p className="desc">
                Unleash the power of interactive education with MaxHub's cutting-edge Interactive Panels. Foster collaboration, captivate your audience, and elevate the learning experience to new heights.
                </p>
              </div>
            </div>
          </SliderItem>
          <SliderItem img='https://sgp-cstore-pub.maxhub.com/maxhub_global_public/88cdf0f6de694293af99b5cbd201c7ad' overlay={true}>
            <div className='hero-slide-text third'>Content for Slide 3</div>
          </SliderItem>
          <SliderItem img='https://sgp-cstore-pub.maxhub.com/maxhub_global_public/5c668dd71a004b05910ec668208b6326' overlay={true}>
            <div className='hero-slide-text fourth'>Content for Slide 4</div>
          </SliderItem> */}
        </Slider>
      </section>
      <div className='main-content'>
        <Feature/>
        <Category/>
        <ClippathAnimation/>
      </div>
      <Showcase/>
      <div className='strength'>
        <div className='strength-message'>
          <div className='strength-list'>
            <GiArchiveResearch className="icon"/>
            <h5>R & D</h5>
            <p>Foundation of business and create value to customers</p>
          </div>
          <div className='strength-list'>
            <GiChaingun className="icon"/>
            <h5>Supply Chain</h5>
            <p>Distribute Everywhere, large volume, stable supply</p>
          </div>
          <div className='strength-list'>
            <MdHighQuality className="icon"/>
            <h5>Quality Control</h5>
            <p>Distribute Everywhere, large volume, stable supply</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <Partner/>
      </div>
    </div>
  )
}

export default Home