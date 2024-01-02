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
import Conference from "./pages/Product/Camera/types/Conference";
import Panoramic from "./pages/Product/Camera/types/Panoramic";
import Panel from "./pages/Product/Panel/Panel";
import Product from './pages/Product/Product';
import Education from './pages/Product/Education/Education';
import LED from './pages/Product/LED/LED';

function App() {
  return (
    <div className='App'>
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
        </Routes>
        <Footer/>
      </Router >
    </div>
  )
}

export default App
