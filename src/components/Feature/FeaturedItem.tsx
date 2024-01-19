import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

type FeaturedItemProps = {
  keyword?:string;
  title: string;
  description: string;
  imgUrl:string;
  path:string;
}

function FeaturedItem({keyword, title, description, imgUrl, path}:FeaturedItemProps): JSX.Element {
  return (
    <div className='feature-item'>
      <div className='item-info'>
        <p className="keyword"><strong>{keyword}</strong></p>
        <Link to={path}>
        <h2>
          {title}
        </h2>
        <p className="item-desc">
          {description}
        </p>
        </Link>
        <button> Details <FaArrowRight/> </button>
      </div>
      <img src={imgUrl} alt=""/>
    </div>
  )
}

export default FeaturedItem