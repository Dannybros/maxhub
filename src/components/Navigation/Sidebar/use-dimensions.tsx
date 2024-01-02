import { useState, useLayoutEffect, MutableRefObject } from 'react';

interface Dimensions {
  width: number | null;
  height: number | null;
}

export const useDimensions = (ref: MutableRefObject<HTMLElement | null>): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: null, height: null });

  const updateDimensions = () => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  };

  useLayoutEffect(() => {
    updateDimensions(); // Initial measurement

    const handleResize = () => {
      updateDimensions(); // Update on resize
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return dimensions;
};