import React from 'react';
import Testimonial from './Testimonial';
import flat from '../../assets/panel/Flat Panel.png'
import led from '../../assets/education/edu.png'
import camera from '../../assets/camera/360_UC.png'
import box from '../../assets/screen-box/security.png'

const Showcase: React.FC = () => {
  return (
    <div className='showcase'>
      <Testimonial
        img={flat}
        title='Refine Meeting Efficiency'
        description="Interactive Flat Panel designed for Zoom meetings offers a collaborative and engaging solution for virtual communication and education. Featuring a high-resolution display, touch-screen technology, and built-in camera and microphone, it provides a seamless platform for video conferencing and interactive collaboration. With intuitive tools such as annotation and screen sharing, users can enhance their Zoom meetings with real-time interactions. The integrated speakers ensure clear audio output, contributing to a comprehensive communication experience. "
      />
      <Testimonial
        img={led}
        title='Purpose-Built Education Whiteboard'
        description="Designed specifically for educational settings, offering interactive features to enhance teaching and learning experiences. These whiteboards often include touch-screen capabilities, interactive pens, and collaboration tools that allow educators and students to engage with digital content in a classroom or training environment. The intention is to create an interactive and dynamic learning environment, fostering collaboration and active participation."
      />
      <Testimonial
        img={camera}
        title='360° All-in-One Conference Camera'
        description="360-degree camera is a cutting-edge device designed to revolutionize video conferencing and collaboration. With its panoramic view capabilities, the camera captures a complete 360-degree field of vision, eliminating blind spots and ensuring a comprehensive visual experience. Equipped with advanced features such as intelligent tracking, it automatically follows and focuses on speakers, enhancing the overall dynamics of virtual meetings. The camera's high-resolution imaging and wide-angle lens contribute to crystal-clear video quality, facilitating effective communication."
      />
      <Testimonial
        img={box}
        title='Wireless Screen-Share Box'
        description="Maxhub's Wireless Screen Box revolutionizes presentations, offering seamless content sharing and display connectivity. With plug-and-play simplicity, it transforms collaboration, ensuring impactful and efficient meetings."
      />
    </div>
  );
};

export default Showcase;
