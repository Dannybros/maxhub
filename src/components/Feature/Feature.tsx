import './Feature.css'
import './Card.css'
import FeaturedItem from './FeaturedItem'
import meeting from '../../assets/panel/sync.webp'
import meeting_small from '../../assets/panel/banner.png'
import education from '../../assets/education/education_panel.jpg'
import education_small from '../../assets/education/edu-panel.png'
import FeaturedCard from './FeatureCard'

function Feature() {
  return (
    <div className="container feature-element">
      <h1 className='title'>Features</h1>
      <section className='feature-section'>
        <FeaturedItem
          keyword='Certified for Zooom Rooms'
          title='Ultra HD Interactive Flat Panel'
          description='Advanced, Intuitive Auto-Framing Video Conferencing'
          imgUrl={meeting_small}
          path="/product/panel"
        />
        <FeaturedItem
          keyword='For Education Purposes'
          title='Smart Education Whiteboard'
          description='Crytal-Clear Video Imagery for Every Meeting Room'
          imgUrl={education_small}
          path="/product/education"
        />
        <FeaturedCard
          keyword='Certified for Zoom Meetings'
          title='Ultra HD Interactive LED'
          description='Advanced, Intuitive Auto-Framing Video Conferencing'
          imgUrl={meeting_small}
          bgImgUrl={meeting}
          path="/product/panel"
        />
        <FeaturedCard
          keyword='For Education Purposes'
          title='Smart Education Whiteboard'
          description='Purpose-Built Education for better immersive learning experience.'
          imgUrl={education_small}
          bgImgUrl={education}
          path="/product/education"
        />
      </section>
    </div>
  )
}

export default Feature