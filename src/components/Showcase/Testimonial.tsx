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
        <h2 className='font-subheader'>{title}</h2>
        <p className='font-default'>
          {description}
        </p>
      </div>
    </blockquote>
  )
}

export default Testimonial