import React from 'react'
import './Education.css'
import hero from '../../../assets/education/education_bg.png'
import illustration from '../../../assets/education/illustration.png'
import tool from '../../../assets/education/tool.png'
import shape from '../../../assets/education/shape.png'
import sticker from '../../../assets/education/sticker.png'
import table from '../../../assets/education/table.png'
import canva from '../../../assets/education/canva.png'
import handwriting from '../../../assets/education/handwriting.png'
import drag from '../../../assets/education/drag.png'
import recording from '../../../assets/education/recording.png'
import lock from '../../../assets/education/lock-screen.png'
import responsive from '../../../assets/education/responsive.png'
import edu from '../../../assets/education/edu.png'
import globe from '../../../assets/education/globe.png'
import system from '../../../assets/education/system.mp4'
import { Slider, SliderItem } from '../../../components/Slider/Slider'
import video_lesson from '../../../assets/education/video-link.png'
import science from '../../../assets/education/science.png'
import save_time from '../../../assets/education/save-time.png'
import multi_task from '../../../assets/education/multi-task.png'
import { MdTouchApp } from "react-icons/md";
import { LuHdmiPort } from "react-icons/lu";
import { BsFillUsbMicroFill } from "react-icons/bs";
import { IoLogoAndroid } from "react-icons/io";
import { GrCloudComputer } from "react-icons/gr";
import { VscWindow } from "react-icons/vsc";
import AnimateInView from '../../../components/Animation/AnimateInView'

const features = [
  {
    img:illustration,
    title:"Smart Illustration",
    desc:"A re-invented whiteboard that recognises the hand drawing and offers a wide range of illustration options"
  },
  {
    img:tool,
    title:"Handy Tools",
    desc:"A ruler, set square or protractor at a single tip"
  },
  {
    img:shape,
    title:"Shapes Recognition",
    desc:"Automatically straightens up the hand-drawn shapes"
  },
  {
    img:sticker,
    title:"Instant Stickers",
    desc:"Add reminders to the whiteboard, and put them in a corner"
  },
  {
    img:table,
    title:"Smart Table",
    desc:"Auto-adaptive height and width in each cell"
  },
  {
    img:canva,
    title:"Boundless Canvas",
    desc:"Extends the canvas n all directions"
  },
  {
    img:handwriting,
    title:"Handwriting Recognition",
    desc:"Convert handwriting to text to improve your board writing"
  },
  {
    img:drag,
    title:"Search & Drag",
    desc:"Search with whiteboard writing and drag the picture visual aids from the browser to the whiteboard."
  },
  {
    img:recording,
    title:"Screen Recording",
    desc:"Capture and share what you write"
  },
  {
    img:lock,
    title:"Lock Screen",
    desc:"Prevent unauthorized login"
  }
]

const keywords=[
  {
    icon:<MdTouchApp/>,
    text1:"20 Points Touch",
    text2:"10 Points Writing"
  },
  {
    icon:<LuHdmiPort/>,
    text1:"HDMI Out"
  },
  {
    icon:<VscWindow/>,
    text1:"Anti-glare Glass",
    text2:"Mohs Level 7 Hardness"
  },
  {
    icon:<IoLogoAndroid/>,
    text1:"Android 8.0",
    text2:"System"
  },
  {
    icon:<GrCloudComputer/>,
    text1:"Optional PC",
    text2:"Module"
  },
  {
    icon:<BsFillUsbMicroFill/>,
    text1:"Shared USB",
    text2:"Ports"
  },
]

const highlights=[
  {
    img:science,
    title:"Focus on Student-Centered Learning",
    desc:"Educational platform that provides schools, teachers and students with an engaging, active learning experience. It mixes perfectly with MAXHUB IFP, which moves education from teacher-centric to student-centric learning."
  },
  {
    img:video_lesson,
    title:"Video-linked Lessons",
    desc:"More and more teachers are using videos to boost student engagement in the classroom. We provides video-linked lessons and easy access to YouTube."
  },
  {
    img:save_time,
    title:"Save Time on Planning Lessons",
    desc:"Our content library gives access to standard-aligned lesson activities created by teachers for teachers. Better yet, they can get started right away."
  },
  {
    img:multi_task,
    title:"Dual Tasking in split view",
    desc:"Compare differing content and do multi-tasking with ease on a single screen"
  },
]

const Education:React.FC=()=> {
  return (
    <div className='education-page'>
      <section className='education-hero'>
        <div className='education-hero-text'>
          <AnimateInView>
          <p>Interactive Flat Panel For Education Purpose</p>
          </AnimateInView>
          <AnimateInView>
          <h1> A Catalyst for Class</h1>
          </AnimateInView>
          <AnimateInView>
          <ul>
            <li>
              Simple <br/> <span>Design</span>
            </li>
            <li>
              Immersive <br/> <span>Learning</span>
            </li>
            <li>
              UHD <br/> <span>Crystal Clear</span>
            </li>
            <li>
              Responsive <br/> <span>Touch</span>
            </li>
          </ul>
          </AnimateInView>
        </div>
        <img src={hero} alt="" />
      </section>
      <section className='education-keyword'>
        <div className='education-key-container'>
          {keywords.map((keyword, i)=>(
            <AnimateInView delay={0.1*i} key={i}>
              <div className='education-key-item'>
                <div className='icon'>
                  {keyword.icon}
                </div>
                <div className='keyword-text'>
                  <span>{keyword.text1}</span>
                  <span>{keyword.text2}</span>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </section>
      <section className='education-banner'>
        <div className='education-banner-text'>
          <AnimateInView>
          <p className='title'>
            Responsive Touch
          </p>
          <p className='desc'>
            10ms responsive time captures your every thought. 
            Windows Ink compatible.
          </p>
        </AnimateInView>
        </div>
        <img src={responsive} alt="" />
      </section>
      <section className='education-features'>
        <AnimateInView>
        <p className='title'>
          Purpose-Built Education Whiteboard
        </p>
        <p className='desc'>
          Inspired by the real classroom scenes, MAXHUB Whiteboard is born for better immersive learning experience.
        </p>
        </AnimateInView>
        <div className='education-feature-box snap-inline'>
          {features.map((feature, i)=>(
            <div className='education-feature-card' key={i}>
              <img src={feature.img} alt="" />
              <div className='text'>
                <h4> {feature.title} </h4>
                <p> {feature.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='education-highlights'>
        <Slider>
          {highlights.map((highlight, i)=>(
            <SliderItem img={highlight.img} key={i}>
              <AnimateInView direction='down'>
              <div className='education-highlight-text'>
                <h1 className='title'>
                  {highlight.title}
                </h1>
                <p className='desc'>
                  {highlight.desc}
                </p>
              </div>
              </AnimateInView>
            </SliderItem>
          ))}
        </Slider>
      </section>
      <section className='education-software-hero'>
        <AnimateInView direction='down'>
        <p className='title'>
          Bring your classroom to Lift with Our EDU OS 
        </p>
        </AnimateInView>
        <AnimateInView>
        <p className='desc'> 
          Simple tech inspires teaching. An operating system designed for education, any teacher can easily make teaching exciting.
        </p>
        </AnimateInView>
        <img src={edu} alt="" />
      </section>
      <section className='education-software-system'>
        <AnimateInView direction='left' delay={0.3}>
        <p className='title'>
          Account system keep all your preferences in mind
        </p>
        </AnimateInView>
        <AnimateInView direction='right' delay={0.3}>
        <p className='desc'>
          Get your online class slides easily,your own app shortcuts and widgets on homepage with a  <br className='breaking-line'/>
          simple logging in Your account and all privacy data will be cleared by logging out.
        </p>
        </AnimateInView>
        <video loop autoPlay muted>
          <source src={system}/>
          Your browser does not support the video tag.
        </video>
      </section>
      <section className='education-security'>
        <div className="education-security-container">
          <div className='educaiton-globe'>
            <AnimateInView delay={0.3}>
            <img src={globe} alt="" />
            </AnimateInView>
          </div>
          <div className='education-security-text'>
            <AnimateInView direction='left' delay={0.3}>
            <p className='title'>
              Data Protection
            </p>
            <p className='desc'>
              MAXHUB Class encrypts all customer data in transit and at rest using industry standards like ISO 27001 GB T-22080.
            </p>
            </AnimateInView>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education