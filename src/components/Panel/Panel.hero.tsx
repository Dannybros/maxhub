import {useRef, useState, useEffect} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

interface MousePosition {
    x: number;
    y: number;
}

function PanelHero() {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
    
        // Clean up the event listener on component unmount
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    console.log(mousePosition);
    

    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const translateYProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <motion.div ref={ref} 
            className='panel-hero'
            style={{
                // opacity:translateYProgress
            }}
        >
            <div className="blob"
                style={{
                    left:mousePosition.x,
                    top:mousePosition.y
                }}
            />
            <div className='panel-hero-text'>
                <ul>
                    <li>Classic</li>
                    <li>ViewPro</li>
                    <li>Transcend</li>
                </ul>
                <h1>
                    Interactive Flat <br/>
                    Panel V Series
                </h1>
            </div>
        </motion.div>
    )
}

export default PanelHero