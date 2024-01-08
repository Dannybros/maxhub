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
        <div className='feature-keyword font-small'>
            {keyword}
        </div>
        <Link to={path} className="feature-title">
            <p className="font-small"> {description} </p>
            <h3>{title}</h3>
        </Link>
        <div className='bg-wrapper'>
            <img src={bgImgUrl} className='feature-bg-img' alt="" />
        </div>
        <img src={imgUrl} className='feature-front-img' alt="" />
    </div>
  )
}

export default FeaturedCard