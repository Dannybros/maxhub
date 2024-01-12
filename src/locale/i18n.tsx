import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEnglish from './tranlation/en-lang.json'
import translationLao from './tranlation/la-lang.json'

const tempLang = localStorage.getItem('lang')

let lang = 'en'

if(tempLang){
    lang = tempLang
}

i18n.use(initReactI18next)
.init({
    lng:lang,
    interpolation:{
        escapeValue:false,
    },
    resources:{
        en:{
            translation:translationEnglish
        },
        la:{
            translation:translationLao
        },
    },
});

export default i18n;