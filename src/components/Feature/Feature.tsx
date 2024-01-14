import './Feature.css'
import './Card.css'
import FeaturedItem from './FeaturedItem'
import meeting from '../../assets/panel/sync.jpg'
import meeting_small from '../../assets/panel/banner.png'
import education from '../../assets/education/education_panel.jpg'
import education_small from '../../assets/education/edu-panel.png'
import led from '../../assets/explore/led.jpg'
import led_small from '../../assets/explore/led_small.png'
import camera from '../../assets/explore/Camera.jpg'
import camera_small from '../../assets/camera/360_UC.png'
import FeaturedCard from './FeatureCard'
import { useTranslation } from 'react-i18next'

function Feature() {
  const {t} = useTranslation();

  return (
    <div className="container feature-element">
      <h1 className='title font-header'>
        {t("home.feature.title")}
      </h1>
      <section className='feature-section'>
        <FeaturedItem
          keyword={t("home.feature.item2.keyword")}
          title={t("home.feature.item2.title")}
          description={t("home.feature.item2.desc")}
          imgUrl={education_small}
          path="/product/education"
        />
        <FeaturedItem
          keyword={t("home.feature.item1.keyword")}
          title={t("home.feature.item1.title")}
          description={t("home.feature.item1.desc")}
          imgUrl={meeting_small}
          path="/product/panel"
        />
        <FeaturedItem
          keyword={t("home.feature.item3.keyword")}
          title={t("home.feature.item3.title")}
          description={t("home.feature.item3.desc")}
          imgUrl={led_small}
          path="/product/led"
        />
        
        <FeaturedCard
          keyword={t("home.feature.item2.keyword")}
          title={t("home.feature.item2.title")}
          description={t("home.feature.item2.desc")}
          imgUrl={education_small}
          bgImgUrl={education}
          path="/product/education"
        />
        <FeaturedCard
          keyword={t("home.feature.item1.keyword")}
          title={t("home.feature.item1.title")}
          description={t("home.feature.item1.desc")}
          imgUrl={meeting_small}
          bgImgUrl={meeting}
          path="/product/panel"
        />
        <FeaturedCard
          keyword={t("home.feature.item3.keyword")}
          title={t("home.feature.item3.title")}
          description={t("home.feature.item3.desc")}
          imgUrl={led_small}
          bgImgUrl={led}
          path="/product/led"
        />
        <FeaturedCard
          keyword={t("home.feature.item4.keyword")}
          title={t("home.feature.item4.title")}
          description={t("home.feature.item4.desc")}
          imgUrl={camera_small}
          bgImgUrl={camera}
          path="/product/camera/panoramic"
        />
      </section>
    </div>
  )
}

export default Feature