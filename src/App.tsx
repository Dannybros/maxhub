import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Explore from "./pages/Explore/Explore";
import Pen from "./pages/Product/Pen/Pen";
import Camera from "./pages/Product/Camera/Camera";
import Dongle from "./pages/Product/Dongle/Dongle";
import Box from "./pages/Product/Box/Box";
import Lectern from "./pages/Product/Lectern/Lectern";
import PTZ from "./pages/Product/Camera/types/PTZ/PTZ";
import Conference from "./pages/Product/Camera/types/Conference/Conference";
import Panoramic from "./pages/Product/Camera/types/Panoramic/Panoramic";
import Panel from "./pages/Product/Panel/Panel";
import Product from './pages/Product/Product';
import Education from './pages/Product/Education/Education';
import LED from './pages/Product/LED/LED';
import { useAppContext } from './context/AppContext';
import NotFound from './pages/ErrorPage/NotFound';

// const chineseFont = 'Microsoft Yahei';
const engFont = "Nexa, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
const laoFont = 'NotoSanLao';

function App() {

  const {language} = useAppContext();

  return (
    <div 
      className='App font-default'
      style={{
        fontFamily: language==='en' ? engFont : laoFont
      }}
    >
      <Router >
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore/products" element={<Explore/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path="panel" element={<Panel/>}/>
            <Route path="education" element={<Education/>}/>
            <Route path="led" element={<LED/>}/>
            <Route path="pen" element={<Pen/>}/>
            <Route path="camera" element={<Camera/>}>
              <Route path="ptz" element={<PTZ/>}/>
              <Route path="conference" element={<Conference/>}/>
              <Route path="panoramic" element={<Panoramic/>}/>
            </Route>
            <Route path="wireless-dongle" element={<Dongle/>}/>
            <Route path="sharescreen-box" element={<Box/>}/>
            <Route path="smart-lectern" element={<Lectern/>}/>
          </Route>
          <Route path="/company/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router >
    </div>
  )
}

export default App
