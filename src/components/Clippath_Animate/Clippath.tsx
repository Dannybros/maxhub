import React, { useState, useEffect, useRef } from 'react';

const ClippathAnimation: React.FC = () => {
  const [percetage, setPercetage] = useState<number>(100);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const section = sectionRef.current
    const offset = section?.getBoundingClientRect().top || 0;
    const scrollPercentage = ((offset - window.innerHeight * 0.1) / (window.innerHeight / 2)) * 100;
    const clampedScrollValue = Math.max(0, Math.min(100, scrollPercentage));

    setPercetage(clampedScrollValue);
};

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  
  return (
    <div 
        ref={sectionRef}
        className='clippath-animate' 
        style={{clipPath:`polygon(50% ${percetage}%, 0 0, 100% 0)`}}
    >
    </div>
  );
};

export default ClippathAnimation;
