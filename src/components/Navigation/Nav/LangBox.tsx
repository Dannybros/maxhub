import React from 'react'
import {useAppContext} from '../../../context/AppContext';

const LangBox: React.FC=()=> {
    
  const { language, changeLang } = useAppContext();

  return (
  <div className='lang-sideline'>
    <div 
      className={`lang-list ${language==='en' && 'active'}`} 
      onClick={()=>changeLang('en')}
      style={{fontFamily:"Nexa"}}
    > 
      En
    </div>
    <div 
      className={`lang-list ${language==='la' && 'active'}`} 
      onClick={()=>changeLang('la')}
      style={{fontFamily:"NotoSanLao"}}
    > 
      ລາວ
    </div>
  </div>
  )
}

export default LangBox