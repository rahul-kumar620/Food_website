import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import "./Navbar.scss";

const Navbar: React.FC = () => {
    
    const [showMediaIcons,setShowMediaIcons] = useState(false);

  return (
    <>
      <div className="navbar_container">
        <div className="menu_container container">
          <div className="logo">
            <h2>
              Health<span className="color">food</span>
            </h2>
            {/* <p className='start'>Get Started</p> */}
          </div>
          <div className="navbar">
            <ul className="links">
              <li>Recipes</li>
              <li>How to</li>
              <li>LifeStyle&Event</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
          {/* mobile navbar */}
          <div className={`mobile-navbar ${showMediaIcons ? "mobile_navbar" : "navbar"}`}>
            <ul className="mobile-links">
              <li>Recipes</li>
              <li>How to</li>
              <li>LifeStyle & Event</li>
              <li>Blog</li>
            </ul>
          </div>
        <div className="action-btn">
            Get Started
            </div>
            <div className="menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><MdMenu/></a>  
            </div>
      </div>
    </>
  );
};

export default Navbar;
