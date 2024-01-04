import React, {useState} from 'react'
import TrademarkBG from './TrademarkBG';
import sync from '../../../assets/panel/sync.webp'
import sound from '../../../assets/panel/sound.webp'
import color from '../../../assets/panel/color.webp'
import light from '../../../assets/panel/light.png'

const PanelTrademarks:React.FC=()=> {    
    const [count, setCount] = useState<number>(1);

  return (
    <section className='panel-trademarks'>
        <div className='trademarks-wrapper'>
             <div className='trademarks-box'>
                <div className={`trademarks-item ${count===1 && 'active'}`}>
                    <div className='title font-subheader'>
                        90% NTSC color gamut
                    </div>
                    <div className='desc'>
                        <div className='desc-expandable'>
                        Color gamut is the range of colors that can be accurately shown in a scenario. The greater, the better. With 90% NTSC, the V6 Series is suitable for high-end design, photography, film, and video.
                        </div>
                    </div>
                </div>
                <div className={`trademarks-item ${count===2 && 'active'}`}>
                    <div className='title font-subheader'>
                        △E≤2 high color accuracy display
                    </div>
                    <div className='desc'>
                        <div className='desc-expandable'>
                        Color accuracy is essential for highly visual applications like design work. The V6 Series has a color accuracy △E≤2 to deliver the original color and achieve professional-grade imagery.
                        </div>
                    </div>
                </div>
                <div className={`trademarks-item ${count===3 && 'active'}`}>
                    <div className='title font-subheader'>
                        WORKS SEAMLESSLY WITH PC AND MAC
                    </div>
                    <div className='desc'>
                        <div className='desc-expandable'>
                        The V6 ViewPro Series' front-facing Type-C interface design allows you to cast from and manage your own devices through the display. You can also use its camera, microphone, and speakers directly from your laptop. A 1.8m Type-C cable is included in the package
                        </div>
                    </div>
                </div>
                <div className={`trademarks-item ${count===4 && 'active'}`}>
                    <div className='title font-subheader'>
                    Extreme Noise Cancellation
                    </div>
                    <div className='desc'>
                        <div className='desc-expandable'>
                            <li>Echo Cancellation</li>
                            <li>AI Noise Cancellation</li>
                            <li>AI Voice Localization</li>
                            <li>De-Reverberation</li>
                            <li>AGC (automatic gain control)</li>
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