import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./Header.scss";
import Cards from "../Cards/Cards";
import Cards2 from "../Cards/Cards2";
import Cards3 from "../Cards/Cards3";
import Cards4 from "../Cards/Cards4";
const Header: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="main-div">
          <p>Signature</p>
        </div>
        <div id="main-header">
        <h1 id="header">Best trending Now.</h1>
        </div>
        <div className="btn">
          <p className="btn-1">Get Started</p>
          <div className="arrow">
            <BsArrowRight />
          </div>
        </div>
        <div className="trunip">
          <img src="images/turnip-image.png" alt=""/>
        </div>
      </div>

      {/* hero section start */}
      <div className="background-container">
      <div className="background">
            <Cards/>
           <Cards2/>
           <Cards3/>
          <Cards4/>
      </div>
      </div>
      {/* hero section end */}

    </>
  );
};

export default Header;
