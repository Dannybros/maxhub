import {Slider, SliderItem} from '../../components/Slider/Slider'
import Category from '../../components/Category/Category'
import { GiArchiveResearch } from "react-icons/gi";
import { MdHighQuality } from "react-icons/md";
import { GiChaingun } from "react-icons/gi";
import Partner from '../../components/Partner/Partner'
import Feature from '../../components/Feature/Feature'
import Showcase from '../../components/Showcase/Showcase';
import ClippathAnimation from '../../components/Clippath_Animate/Clippath';
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <section className="hero">
        <Slider>
          <SliderItem img='https://sgp-cstore-pub.maxhub.com/maxhub_global_public/upload/lpjlp6ix/MTR-banner-pc-v2.jpg' overlay={true}>
            <div className='hero_slide-1'>Content for Slide 1</div>
          </SliderItem>
          <SliderItem img='https://sgp-cstore-pub.maxhub.com/maxhub_global_public/31103bc6443140f6a1bf84563e4b1df8' overlay={true}>
            <div>Content for Slide 2</div>
          </SliderItem>
          <SliderItem img='https://sgp-cstore-pub.maxhub.com/maxhub_global_public/5c668dd71a004b05910ec668208b6326' overlay={true}>
            <div>Content for Slide 3</div>
          </SliderItem>
          <SliderItem img='https://sgp-cstore-pub.maxhub.com/maxhub_global_public/88cdf0f6de694293af99b5cbd201c7ad' overlay={true}>
            <div>Content for Slide 4</div>
          </SliderItem>
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