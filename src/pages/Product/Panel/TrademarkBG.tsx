import React, {useRef, useEffect} from 'react'
import { useInView } from 'framer-motion';

interface TrademarkBGProps{
    count:number;
    setCount : React.Dispatch<React.SetStateAction<number>>;
    heightPercentage:number;
}

const TrademarkBG:React.FC<TrademarkBGProps>=({count, setCount, heightPercentage})=> {

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once:false,
        amount: 0.5
    });

    useEffect(() => {
        if (!ref.current) return;

        if(isInView){
            setCount(count)
        }
    }, [isInView])

  return (
    <div style={{height:`${heightPercentage}%`, zIndex:'-1'}} ref={ref}>
    </div>
  )
}

export default TrademarkBG