import './Pen.css'
import bg from '../../../assets/pen/bg.jpg'
import detail from '../../../assets/pen/detail.jpg'
import part_one from '../../../assets/pen/part1.jpg'
import part_two from '../../../assets/pen/part2.jpg'
import { useTranslation } from 'react-i18next'

const Pen: React.FC=() =>{
    const {t} = useTranslation();

  return (
    <div className="pen-page">
        <div className="pen-bg">
            <div className='pen-bg-text'>
                <h1>{t("pen.hero.title")}</h1>
                <p>{t("pen.hero.desc")}</p>
                <a href="/company/contact"> 
                    {t("pen.hero.btn")} 
                </a>
            </div>
            <img src={bg} alt="" />
        </div>
        <div className='pen-parts container'>
            <h1>{t("pen.title")}</h1>
            <img src={detail} alt="" />
        </div>
        <div className='pen-details container'>
            <img src={part_one} alt="" />
            <div className='first-text'>
                <h2 className='font-subheader'>
                    {t("pen.detail1.title")}
                </h2>
                <p>
                    {t("pen.detail1.desc")}
                </p>
                <div className='pen-color'>
                    <div className='pen-red'></div>
                    <div className='pen-white'></div>
                </div>
            </div>
        </div>
        <div className='pen-details container'>
            <img src={part_two} alt="" />
            <div className='second-text'>
                <h2 className='font-subheader'>
                    {t("pen.detail2.title")}
                </h2>
                <p>
                    {t("pen.detail2.desc")}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Pen