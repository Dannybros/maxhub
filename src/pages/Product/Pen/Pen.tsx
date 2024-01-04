import './Pen.css'
import bg from '../../../assets/pen/bg.jpg'
import detail from '../../../assets/pen/detail.jpg'
import part_one from '../../../assets/pen/part1.jpg'
import part_two from '../../../assets/pen/part2.jpg'

const Pen: React.FC=() =>{
  return (
    <div className="pen-page">
        <div className="pen-bg">
            <div className='pen-bg-text'>
                <h1>Every Word You Write Is Just Perfect</h1>
                <p>The fine tip’s sensitive touch enhances legibility.</p>
                <a href="/company/contact"> Contact Our Agent </a>
            </div>
            <img src={bg} alt="" />
        </div>
        <div className='pen-parts container'>
            <h1>Stylus Pen Details</h1>
            <img src={detail} alt="" />
        </div>
        <div className='pen-details container'>
            <img src={part_one} alt="" />
            <div className='first-text'>
                <h2 className='font-subheader'>
                    Switch Color & Thickness with the Dual-color Pen
                </h2>
                <p>
                    Customize color and thickness for both the pen head and tail.
                    Switch to your preferred choice without hitting a butto
                </p>
                <div className='pen-color'>
                    <div className='pen-red'></div>
                    <div className='pen-white'></div>
                </div>
            </div>
        </div>
        <div className='pen-details container'>
            <img src={part_two} alt="" />
            <div className='second-text'>
                <h2 className='font-subheader'>
                    Smooth Strokes As Natural As Writing on Paper
                </h2>
                <p>
                The  IR Pen has been extensively tested to ensure a flowing writing experience.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Pen