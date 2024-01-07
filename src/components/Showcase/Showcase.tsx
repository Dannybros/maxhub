import React from 'react';
import Testimonial from './Testimonial';
import flat from '../../assets/panel/Flat Panel.png'
import led from '../../assets/education/edu.png'
import camera from '../../assets/camera/360_UC.webp'
import box from '../../assets/screen-box/security.png'
import { useTranslation } from 'react-i18next';

const Showcase: React.FC = () => {
  const {t} = useTranslation();

  return (
    <div className='showcase'>
      <Testimonial
        img={flat}
        title={t("home.showcase.item1.title")}
        description={t("home.showcase.item1.desc")}
      />
      <Testimonial
        img={led}
        title={t("home.showcase.item2.title")}
        description={t("home.showcase.item2.desc")}
      />
      <Testimonial
        img={camera}
        title={t("home.showcase.item3.title")}
        description={t("home.showcase.item3.desc")}
      />
      <Testimonial
        img={box}
        title={t("home.showcase.item4.title")}
        description={t("home.showcase.item4.desc")}
      />
    </div>
  );
};

export default Showcase;
