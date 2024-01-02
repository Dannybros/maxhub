import React from 'react'
import './Testimonial.css'

type TestimonialProps = {
  img:string;
  title:string;
  description:string
}

const Testimonial: React.FC<TestimonialProps>=({img, title, description})=> {
  return (
    <blockquote className='testimonial'>
        <img src={img} alt="" />
        <div className='content'>
        <h2>{title}</h2>
        <p>
            {description}
        </p>
        </div>
    </blockquote>
  )
}

export default Testimonial