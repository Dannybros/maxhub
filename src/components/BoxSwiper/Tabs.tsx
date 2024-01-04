import React, {useState, useEffect} from 'react'
import './Tabs.css'
import meeting from '../../assets/screen-box/meeting.jpg'
import briefing from '../../assets/screen-box/briefing.jpg'
import lecture from '../../assets/screen-box/lecture.jpg'


const Tabs: React.FC=()=>{
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
                    Medium Rooms
                </li>
                <li onClick={()=>handleTabClick(1)} className={`font-subheader tab-header-item ${activeTab===1 && 'active'}`}>
                    Lecture Halls
                </li>
                <li onClick={()=>handleTabClick(2)} className={`font-subheader tab-header-item ${activeTab===2 && 'active'}`}>
                    Briefing Rooms
                </li>
            </ul>
            <div className='tab-content-box' >
                <div className='tab-content' style={{transform:`translateX(${activeTab * -100}%)`}}>
                    <p>
                    Say goodbye to back-end control. Mirror files and content straight from your mobile phone or tablet, without the need for copying to a dedicated computer device.
                    </p>
                    <img src={meeting} alt="" />
                </div>
                <div className='tab-content' style={{transform:`translateX(${activeTab * -100}%)`}}>
                    <p>
                        Enjoy intuitive learning experiences empowered by wireless screen sharing that supports multi-screen display.
                    </p>
                    <img src={lecture} alt="" />
                </div>
                <div className='tab-content' style={{transform:`translateX(${activeTab * -100}%)`}}>
                    <p>
                        A projection/large-size TV and the Screen Mirroring Box are all you need for a professional meeting experience,
                        while having total control over multiple meeting rooms with centralized management.
                    </p>
                    <img src={briefing} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Tabs