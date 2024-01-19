import { useNavigate } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/');
  };
  
  return (
    <div className='errorpage'>
        <div className="noise"></div>
        <div className="overlay"></div>
        <div className="terminal">
            <h1>Error <span className="errorcode">404</span></h1>
            <p className="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
            <p className="output">Please try to <span className='error_link' onClick={goBack}>Go Back</span> or <span className='error_link' onClick={goHome}>return to the homepage</span>.</p>
            <p className="output">Good luck.</p>
        </div>
    </div>
  )
}

export default NotFound