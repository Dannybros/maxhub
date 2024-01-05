import './Feature.css'
import './Card.css'
import FeaturedItem from './FeaturedItem'
import meeting from '../../assets/panel/sync.webp'
import meeting_small from '../../assets/panel/banner.png'
import education from '../../assets/education/education_panel.jpg'
import education_small from '../../assets/education/edu-panel.png'
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
          keyword={t("home.feature.item1.keyword")}
          title={t("home.feature.item1.title")}
          description={t("home.feature.item1.desc")}
          imgUrl={meeting_small}
          path="/product/panel"
        />
        <FeaturedItem
          keyword={t("home.feature.item2.keyword")}
          title={t("home.feature.item2.title")}
          description={t("home.feature.item2.desc")}
          imgUrl={education_small}
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
          keyword={t("home.feature.item2.keyword")}
          title={t("home.feature.item2.title")}
          description={t("home.feature.item2.desc")}
          imgUrl={education_small}
          bgImgUrl={education}
          path="/product/education"
        />
      </section>
    </div>
  )
}

export default Feature