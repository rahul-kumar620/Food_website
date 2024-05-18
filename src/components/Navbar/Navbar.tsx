import React from 'react'
import "./Navbar.scss";

const Navbar: React.FC = () => {
    return (
        <>
           <div className='main-class'>
              <div className='logo'>
                <h2>Health<span className='color'>food</span></h2>
                {/* <p className='start'>Get Started</p> */}
              </div>
              <div className='navbar'>
                <ul >
                    <li>
                        Recipes
                    </li>
                    <li>
                        How to
                    </li>
                    <li>
                        LifeStyle&Event
                    </li>
                    <li>
                        Blog
                    </li>
                </ul>
              </div>
              <div id='start-box'>
                  <p id='start'>Get Started</p>
              </div>
           </div>
        </>
    );
}

export default Navbar;
