import Nav from '../components/Navigation/Nav/Nav'
import { useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Navigation/Sidebar/Sidebar';

export type FullScreenProps={
  fullScreen?: boolean;
}

function Header({fullScreen = false}:FullScreenProps) {

  const location = useLocation();
  if(!fullScreen && location.pathname === '/explore/products') return;

  return (
    <div className='header'>
      <Nav/>
      <Sidebar/>
    </div>
  )
}

export default Header