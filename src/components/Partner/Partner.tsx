import React from 'react'
import './Partner.css'
import alibaba from '../../assets/partners/alibaba.png'
import audi from '../../assets/partners/audi.png'
import deloitte from '../../assets/partners/deloitte.png'
import disney from '../../assets/partners/disney.png'
import Hsbc from '../../assets/partners/Hsbc.png'
import lenovo from '../../assets/partners/lenovo.png'
import nippon from '../../assets/partners/nippon.png'
import plaza from '../../assets/partners/plaza.png'
import puma from '../../assets/partners/puma.png'
import pwc from '../../assets/partners/pwc.png'
import sany from '../../assets/partners/sany.png'
import vivo from '../../assets/partners/vivo.png'

const imgList:string[] = [alibaba, audi, deloitte, disney, Hsbc, lenovo, nippon, plaza, puma, pwc, sany, vivo];

const Partner: React.FC=()=> {
  return (
    <div className='partners'>
        <h1>Our Partners</h1>
        <ul className='partner-list'>
            {imgList.map((item, i) => (
                <div className='partner-box' key={i}>
                    <img src={item} key={i}/>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default Partner