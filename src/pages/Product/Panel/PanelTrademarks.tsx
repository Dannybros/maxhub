import React, {useState} from 'react'
import TrademarkBG from './TrademarkBG';
import sync from '../../../assets/panel/sync.jpg'
import sound from '../../../assets/panel/sound.jpg'
import color from '../../../assets/panel/color.jpg'
import light from '../../../assets/panel/light.png'
import { useTranslation } from 'react-i18next';

const PanelTrademarks:React.FC=()=> {    
    const {t} = useTranslation();
    const [count, setCount] = useState<number>(1);

  return (
    <section className='panel-trademarks'>
        <div className='trademarks-wrapper'>
             <div className='trademarks-box'>
                <div className={`trademarks-item ${count===1 && 'active'}`}>
                    <div className='title font-subheader'>
                        {t("panel.highlights.item1.title")}
                    </div>
                    <div className='desc'>
                        <div className='desc-expandable'>
                            {t("panel.highlights.item1.desc")}
                        </div>
                    </div>
                </div>
                <div className={`trademarks-item ${count===2 && 'active'}`}>
                    <div className='title font-subheader'>
                        {t("panel.highlights.item2.title")}
                    </div>
                    <div className='desc'>
                        <div className='desc-expandable'>
                            {t("panel.highlights.item2.desc")}
                        </div>
                    </div>
                </div>
                <div className={`trademarks-item ${count===3 && 'active'}`}>
                    <div className='title font-subheader'>
                        {t("panel.highlights.item3.title")}
                    </div>
                    <div className='desc'>
                        <div className='desc-expandable'>
                            {t("panel.highlights.item3.desc")}
                        </div>
                    </div>
                </div>
                <div className={`trademarks-item ${count===4 && 'active'}`}>
                    <div className='title font-subheader'>
                        {t("panel.highlights.item4.title")}
                    </div>
                    <div className='desc'>
                        <div className='desc-expandable'>
                            <li>{t("panel.highlights.item4.key1")}</li>
                            <li>{t("panel.highlights.item4.key2")}</li>
                            <li>{t("panel.highlights.item4.key3")}</li>
                            <li>{t("panel.highlights.item4.key4")}</li>
                            <li>{t("panel.highlights.item4.key5")}</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className='trademark-img-wrapper'>
                <img src={light} alt="" className={count===1? 'active': ''}/>
                <img src={color} alt="" className={count===2? 'active': ''}/>
                <img src={sync} alt="" className={count===3? 'active': ''}/>
                <img src={sound} alt="" className={count===4? 'active': ''}/>
            </div> 
        </div>
        <div className='trademark-bg-wrapper'>
            <TrademarkBG count={1} setCount={setCount} heightPercentage={25}/>
            <TrademarkBG count={2} setCount={setCount} heightPercentage={25}/>
            <TrademarkBG count={3} setCount={setCount} heightPercentage={25}/>
            <TrademarkBG count={4} setCount={setCount} heightPercentage={25}/>
        </div>
    </section>
  )
}

export default PanelTrademarks