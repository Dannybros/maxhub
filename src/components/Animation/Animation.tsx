import {ReactNode, useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

interface AnimationProps{
    children: ReactNode;
}

export const Animation =({children}:AnimationProps)=>{
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.7 1"]
    });

    const progress = useTransform(scrollYProgress, [0, 0.5], ["50%", "100%"])

  return (
    <motion.div 
        ref={ref}
        style={{
            width:progress,
            margin:"auto",
            background:"white"
        }}
    >
        {children}
    </motion.div>
  )
}

export default Animation