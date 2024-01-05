import React, {useState, useEffect} from 'react'
import './Tabs.css'
import meeting from '../../assets/screen-box/meeting.jpg'
import briefing from '../../assets/screen-box/briefing.jpg'
import lecture from '../../assets/screen-box/lecture.jpg'
import { useTranslation } from 'react-i18next'


const Tabs: React.FC=()=>{
    const {t} = useTranslation();
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
          setActiveTab((prevTab) => (prevTab + 1) % 3);
        }, 5000); 
        
        return () => clearInterval(intervalId);
    }, [activeTab]);

    return (
        <div className='swiper-tab'>
            <ul className='tab-header'>
                <li onClick={()=>handleTabClick(0)} className={`font-subheader tab-header-item ${activeTab===0 && 'active'}`}>
                    {t("box.application.item1.title")}
                </li>
                <li onClick={()=>handleTabClick(1)} className={`font-subheader tab-header-item ${activeTab===1 && 'active'}`}>
                    {t("box.application.item2.title")}
                </li>
                <li onClick={()=>handleTabClick(2)} className={`font-subheader tab-header-item ${activeTab===2 && 'active'}`}>
                    {t("box.application.item3.title")}
                </li>
            </ul>
            <div className='tab-content-box' >
                <div className='tab-content' style={{transform:`translateX(${activeTab * -100}%)`}}>
                    <p>
                        {t("box.application.item1.desc")}
                    </p>
                    <img src={meeting} alt="" />
                </div>
                <div className='tab-content' style={{transform:`translateX(${activeTab * -100}%)`}}>
                    <p>
                        {t("box.application.item2.desc")}
                    </p>
                    <img src={lecture} alt="" />
                </div>
                <div className='tab-content' style={{transform:`translateX(${activeTab * -100}%)`}}>
                    <p>
                        {t("box.application.item3.desc")}
                    </p>
                    <img src={briefing} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Tabs