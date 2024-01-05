import panel from '../../assets/explore/professional-panel.webp'
import panelMo from '../../assets/explore/prof-panel-mo.webp'
import { useTranslation } from 'react-i18next'

const {t} = useTranslation();

export const HeroSlides=[
  {
    img:'https://sgp-cstore-pub.maxhub.com/maxhub_global_public/upload/lpjlp6ix/MTR-banner-pc-v2.jpg',
    title:t("home.hero.content1.title"),
    desc:t("home.hero.content1.desc"),
    class:"first",
  },
  {
    img:'https://sgp-store-pub.ifpserver.com/customizer-platform/5e8c6f8a942e4a7e83b3d5b9d34ab429.jpg',
    title:t("home.hero.content2.title"),
    desc:t("home.hero.content2.desc"),
    class:"second",
  },
  {
    img:panel,
    smallImg:panelMo,
    title:t("home.hero.content.title"),
    desc:t("home.hero.content1.desc"),
    class:"third",
  },
  {
    img:'https://sgp-cstore-pub.maxhub.com/maxhub_global_public/5c668dd71a004b05910ec668208b6326',
    title:t("home.hero.content1.title"),
    desc:t("home.hero.content1.desc"),
    class:"fourth",
  },
]