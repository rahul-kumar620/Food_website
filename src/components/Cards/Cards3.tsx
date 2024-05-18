import React from 'react'
import { GiHamburger } from "react-icons/gi";
import "./Cards3.scss";
const Cards3: React.FC = () => {
  return (
    //  card1
    <div className='card3-container'>
      <div className='icon3'>
        <div className='icon-3'>
        <GiHamburger />
        </div>
        <div className='text-3'>
            Burger
        </div>
      </div>
      <div className='text3'>
         Vegan Burger With Cucumber.
      </div>
      <div className='image3'>
      <img src='images/img-4.jpg' alt=''/>
      </div>
    </div>

  )
}

export default Cards3;
