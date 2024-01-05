import React, {useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './About.css'
import { useTranslation } from 'react-i18next';

type resourcesType = {
  title:string;
  desc:string
}

const About: React.FC=()=>{
  
  const {t} = useTranslation();
  const resources: resourcesType[] = [
    {
      title:t("about.resources.card1.title"),
      desc:t("about.resources.card1.desc")
    },
    {
      title:t("about.resources.card2.title"),
      desc:t("about.resources.card2.desc")
    },
    {
      title:t("about.resources.card3.title"),
      desc:t("about.resources.card3.desc")
    },
    {
      title:t("about.resources.card4.title"),
      desc:t("about.resources.card4.desc")
    },
    {
      title:t("about.resources.card5.title"),
      desc:t("about.resources.card5.desc")
    },
    {
      title:t("about.resources.card6.title"),
      desc:t("about.resources.card6.desc")
    }
  ]
  const location = useLocation();
  const awardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if(location.hash==="#awards" && awardRef.current){
      awardRef.current.scrollIntoView({ behavior: 'smooth' });
    }else{
      window.scrollTo(0,0);
    }
  }, [location]);

  return (
    <div>
      <div className="about-hero">
        <div className='about-hero-msg container'>
          <h1 className='font-header'>
            {t("about.hero.title")}
          </h1>
          <p className='font-subheader'>
            {t("about.hero.desc")}
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='company-story'>
          <h1 className='font-header'>
            {t('about.story.title')}
          </h1>
          <p>
            {t('about.story.desc1')}
          </p>
          <p>
            {t('about.story.desc2')}
          </p>
          <p>
            {t('about.story.desc3')}
          </p>
        </div>
        <div className='company-highlights'>
          <div className='company-highlight-tile'>
            <img src="https://www.planar.com/media/442760/global_706x530.jpg?rmode=max&width=364&height=273&quality=80&upscale=false&rnd=133062503320000000" alt="" />
            <h3>{t('about.highlight.item1.title')}</h3>
            <p>
              {t('about.highlight.item1.desc')}
            </p>
          </div>
          <div className='company-highlight-tile'>
            <img src="https://media.istockphoto.com/id/1447959482/photo/night-business-tablet-and-black-man-typing-and-reading-information-online-doing-research-and.jpg?s=1024x1024&w=is&k=20&c=XNsP_s57SMV00XLKM5dyH8Kwiq0vPLTksClGQvjt1e8=" alt="" />
            <h3>{t('about.highlight.item2.title')}</h3>
            <p>
              {t('about.highlight.item2.desc')}
            </p>
          </div>
          <div className='company-highlight-tile'>
            <img src="https://www.planar.com/media/442758/morongo-install-blue_706x530.jpg?rmode=max&width=364&height=273&quality=80&upscale=false&rnd=133062503440000000" alt="" />
            <h3>{t('about.highlight.item3.title')}</h3>
            <p>
              {t('about.highlight.item3.desc')}
            </p>
          </div>
        </div>
        <div className="company-resources">
          <h1>
            {t('about.resources.title')}
          </h1>
          <div className='resource-lists'>
            {resources.map((resources, i)=>(
              <div className='resource-card' key={i}>
                <h3>{resources.title}</h3>
                <p>{resources.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='award-section' ref={awardRef}>
        <h1>{t('about.awards.title')}</h1>
        <div className="awards-list">
          <div className="award-card">
            <img src="https://www.installation-international.com/wp-content/uploads/2023/02/BOS.0017_winner-badges_logos3_INS-353x353.png" 
            alt="" />
            <p>
              {t('about.awards.award1.p1')} <br/>
              {t('about.awards.award1.p2')}
            </p>
          </div>
          <div className="award-card">
            <img src="https://www.red-dot.org/fileadmin/_processed_/2/3/csm_BC2022_RD_4a5960e6e9.png" 
            alt="" />
            <p>
              {t('about.awards.award2.p1')} <br/>
              {t('about.awards.award2.p2')}
            </p>
          </div>
          <div className="award-card">
            <img src="https://assets.website-files.com/63b7f98ac6c8ef87fcaf6cdc/63b7f98ac6c8ef7db1af6dba_Av-News-Awards.jpg" 
            alt="" />
            <p>
              {t('about.awards.award3.p1')} <br/>
              {t('about.awards.award3.p2')}
            </p>
          </div>
          <div className="award-card">
            <img src="https://www.commercialintegrator.com/wp-content/uploads/2022/05/CI-BEST-Awards-2023-Logo_500px.jpg" 
            alt="" />
            <p>
              {t('about.awards.award4.p1')} <br/>
              {t('about.awards.award4.p2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About