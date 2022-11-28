import Topbar from "./Components/topbar/Topbar";
import Intro from './Components/intro/Intro';
import Portfolio from './Components/portfolio/Portfolio';
import Works from './Components/works/Works';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import './App.scss';
import { useState } from 'react';
import Menu from './Components/menu/Menu';
import { BrowserRouter } from "react-router-dom";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className='app'>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro/>
          <Portfolio/>
          {/* <Works/> */}
          <Testimonials/>
          {/* This is new line */}
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
