import React, {useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './About.css'

type resourcesType = {
  title:string;
  desc:string
}

const resources: resourcesType[] = [
  {
    title:"GLOBAL SHOWROOMS",
    desc:"We has Showrooms around the world where you can experience our most advanced and most popular products in action."
  },
  {
    title:"Certifications",
    desc:"We understands our customers' needs and delivers what we promise by continually improving products, processes and systems."
  },
  {
    title:"Product Security",
    desc:"We are committed to using best practices to develop display solutions that meet the security needs of our customers."
  },
  {
    title:"Environmental Initatives",
    desc:"We recognizes that its operations and products have direct impacts on the environment and works proactively to minimize them."
  },
  {
    title:"Patents",
    desc:"We are proud of our products and take appropriate steps to protect our intellectual property."
  },
  {
    title:"Vision",
    desc:"To help more people find success and happiness in life, through our efforts."
  }
]

const About: React.FC=()=>{

  const location = useLocation();
  const awardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if(location.hash==="#awards" && awardRef.current){
      awardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <div className="about-hero">
        <div className='about-hero-msg'>
          <h1>About Us</h1>
          <p>Connecting the world with better communication and collaboration</p>
        </div>
      </div>
      <div className='container'>
        <div className='company-story'>
          <h1> Our Story</h1>

          <p>
            Our mission is to unlock collaborative possibilities, enabling teams and classrooms to connect effortlessly, whether across the room or across the globe. 
          </p>
          <p>
            We stand committed to showcasing the pinnacle of innovation through Maxhub's revolutionary interactive panels and LED solutions, crafting a narrative that transcends boundaries and shapes the future of connectivity. As an innovation-driven team, we focuses on developing collaboration solutions that enable immersive communications. We showcase not just devices but gateways to seamless communication and dynamic engagement. 
          </p>
          <p>
            Our Ecosystem focuses on a total solution for complete scenarios. From smart Interactive Displays, to high-quality UC products, 
            to ground-breaking all-in-one LED and eye-catching Digital Signage, to Mobile Stands for flexible work, we've got you covered. 👍
          </p>
        </div>
        <div className='company-highlights'>
          <div className='company-highlight-tile'>
            <img src="https://www.planar.com/media/442760/global_706x530.jpg?rmode=max&width=364&height=273&quality=80&upscale=false&rnd=133062503320000000" alt="" />
            <h3>High Quality</h3>
            <p>
              MAXHUB has high-end laboratory and the authorization for certification, ensuring that products are more reliable and can be launched
              faster through our comprehensive quality control capabilities.
            </p>
          </div>
          <div className='company-highlight-tile'>
            <img src="https://media.istockphoto.com/id/1447959482/photo/night-business-tablet-and-black-man-typing-and-reading-information-online-doing-research-and.jpg?s=1024x1024&w=is&k=20&c=XNsP_s57SMV00XLKM5dyH8Kwiq0vPLTksClGQvjt1e8=" alt="" />
            <h3>Supply Chain</h3>
            <p>
              Our's supply chain has advantages of large volume, stable supply, strong partners, and local warehouse, enabling us to predict and
              respond quickly to market demand.
            </p>
          </div>
          <div className='company-highlight-tile'>
            <img src="https://www.planar.com/media/442758/morongo-install-blue_706x530.jpg?rmode=max&width=364&height=273&quality=80&upscale=false&rnd=133062503440000000" alt="" />
            <h3>Research & Development</h3>
            <p>
              Innovation is the foundation of business and create value to customers. MAXHUB's R&D and innovation stem from continuous investment in international top talent, research institutes, and patents.
            </p>
          </div>
        </div>
        <div className="company-resources">
          <h1>Our resources</h1>
          <div className='resource-lists'>
            {resources.map((resources, i)=>(
              <div className='resource-card' key={i}>
                <h3>{resources.title}</h3>
                <p>{resources.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='award-section' ref={awardRef}>
        <h1>Awards</h1>
        <div className="awards-list">
          <div className="award-card">
            <img src="https://www.installation-international.com/wp-content/uploads/2023/02/BOS.0017_winner-badges_logos3_INS-353x353.png" 
            alt="" />
            <p>
              ISE 2023 Best of Show Awards <br/>
              IFP V6 ViewPro
            </p>
          </div>
          <div className="award-card">
            <img src="https://www.red-dot.org/fileadmin/_processed_/2/3/csm_BC2022_RD_4a5960e6e9.png" 
            alt="" />
            <p>
              ISE 2023 Best of Show Awards <br/>
              IFP V6 ViewPro
            </p>
          </div>
          <div className="award-card">
            <img src="https://assets.website-files.com/63b7f98ac6c8ef87fcaf6cdc/63b7f98ac6c8ef7db1af6dba_Av-News-Awards.jpg" 
            alt="" />
            <p>
              THe AV News Awards 2022 <br/>
              Raptor Series
            </p>
          </div>
          <div className="award-card">
            <img src="https://www.commercialintegrator.com/wp-content/uploads/2022/05/CI-BEST-Awards-2023-Logo_500px.jpg" 
            alt="" />
            <p>
              commercial integrator 2022 best awards winners <br/>
              Digital Signage
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About