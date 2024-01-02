import React, {useRef, useEffect} from 'react'
import { useInView } from 'framer-motion';

interface LedIntroBGProps{
    index:number;
    updateValue : (index: number, newValue: boolean) => void;
}

const LedIntroBG:React.FC<LedIntroBGProps>=({index, updateValue})=> {

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once:false,
        amount: 0.1
    });

    useEffect(() => {
        if (!ref.current) return;

        if(isInView){
            updateValue(index, true);
        }
        else{
            const { bottom } = ref.current.getBoundingClientRect()
            const isBelowScreenBottom = bottom > window.innerHeight
            if (isBelowScreenBottom) {
                updateValue(index, false);
            }
        }
    }, [isInView])

  return (
    <div className='led-intro-bg' ref={ref}>
    </div>
  )
}

export default LedIntroBG