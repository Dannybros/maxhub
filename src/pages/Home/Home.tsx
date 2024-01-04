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
        <Slider seperate={true} interval={90000}>
          {HeroSlides.map((slide, i)=>(
            <SliderItem img={slide.img} smallImg={slide.smallImg} overlay={true} key={i}>
              <div className={`hero-slide-text ${slide.class}`}>
                <p className="title font-subheader"> {slide.title} </p>
                <p className="desc font-default"> {slide.desc} </p>
              </div>
            </SliderItem>
          ))}
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
            <GiArchiveResearch className="icon font-header"/>
            <h5 className='font-subheader'>R & D</h5>
            <p>Foundation of business and create value to customers</p>
          </div>
          <div className='strength-list'>
            <GiChaingun className="icon font-header"/>
            <h5 className='font-subheader'>Supply Chain</h5>
            <p>Distribute Everywhere, large volume, stable supply</p>
          </div>
          <div className='strength-list'>
            <MdHighQuality className="icon font-header"/>
            <h5 className='font-subheader'>Quality Control</h5>
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