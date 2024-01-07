import { Link } from "react-router-dom";

type FeaturedCardProps = {
    keyword?:string;
    title: string;
    description: string;
    imgUrl:string;
    bgImgUrl:string;
    path:string
}
  
function FeaturedCard({keyword, title, description, imgUrl, bgImgUrl, path}:FeaturedCardProps): JSX.Element {
  return (
    <div className="feature-card">
        <div className='feature-keyword font-default'>
            {keyword}
        </div>
        <div className='bg-wrapper'>
            <img src={bgImgUrl} className='feature-bg-img' alt="" />
        </div>
        <img src={imgUrl} className='feature-front-img' alt="" />
        
        <Link to={path} className="feature-title">
            <p> {description} </p>
            <h2 className="font-subheader">{title}</h2>
        </Link>
    </div>
  )
}

export default FeaturedCard