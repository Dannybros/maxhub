import React, {useRef, useEffect} from 'react'
import { TfiWorld } from "react-icons/tfi";
import {useAppContext} from '../../../context/AppContext';

type LangBoxProps = {
    setShowLangBox: React.Dispatch<React.SetStateAction<Boolean>>;
    showLangBox: Boolean
}

const LangBox: React.FC<LangBoxProps>=({showLangBox, setShowLangBox})=> {
    
  const { language, changeLang } = useAppContext();
  const langListRef = useRef<HTMLUListElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const toggleLangBox = () =>{
    setShowLangBox((prev)=>!prev)
  }

  function handleClickOutsideLangBox(event: MouseEvent) {
    if (langListRef.current && !langListRef.current.contains(event.target as HTMLElement) && langRef.current &&
    !langRef.current.contains(event.target as HTMLElement)) {
        setShowLangBox(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideLangBox);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideLangBox);
    };
  }, [langListRef])

  return (
    <div className='lang-dropdown' ref={langRef} onClick={toggleLangBox}>
      <TfiWorld/>
      <div className='lang-selected'>
        {language ==='en'?
          "En":"ລາວ"
        }
      </div>
      <ul ref={langListRef} className={`lang-selector ${showLangBox && 'show'}`}>
        <li onClick={()=>changeLang('en')} style={{fontFamily:"Nexa"}}>English</li>
        <li onClick={()=>changeLang('la')} style={{fontFamily:"NotoSanLao"}}>ລາວ</li>
      </ul>
    </div>
  )
}

export default LangBox