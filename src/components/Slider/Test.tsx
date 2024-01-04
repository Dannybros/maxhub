import React, { useState, useEffect, ReactNode } from 'react';
import './Test.css'

interface SliderProps {
    children: ReactNode;
    interval?:number;
}

interface SliderItemProps {
    img: string;
    smallImg?: string;
    overlay?:boolean;
    children?: ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}

const SliderTest: React.FC<SliderProps>= ({ children, interval=8000 }) => {
    const length = React.Children.count(children);

    const [currentImage, setCurrentImage] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [interval]);

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + length) % length);
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) %  length);
    };

    const handleClickSwiper=(index:number)=>{
        setCurrentImage(index);
    }

    return (
        <div>
            <div className='img-swiper'>
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child as React.ReactElement<SliderItemProps>, {
                    isActive: index === currentImage,
                    onClick: () => handleClickSwiper(index),
                    })
                )}
            </div>
            <div className="swiper-pagination">
                {React.Children.map(children, (_, index) => (
                <div
                    className={`swiper-circle ${index === currentImage ? 'active' : ''}`}
                    key={index}
                    onClick={() => handleClickSwiper(index)}
                ></div>
                ))}
            </div>
        </div>
    );
};


const SliderItemTest: React.FC<SliderItemProps> = ({ img, smallImg, children, isActive, onClick }) => {
    return (
      <div
        className={`test-img ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        <picture>
          <source media="(max-width: 500px)" srcSet={ smallImg? smallImg : img} />
          <source media="(min-width: 500px)" srcSet={img} />
          <img src={img} alt="Responsive Banner Image" />
        </picture>

        {children}
      </div>
    );
};

export {SliderTest, SliderItemTest};
