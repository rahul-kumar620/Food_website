import React from 'react'
import { GiSteak } from "react-icons/gi";
import "./Cards2.scss";
const Cards2: React.FC = () => {
  return (
    //  card1
    <div className='card2-container'>
      <div className='icon2'>
        <div className='icon-2'>
        <GiSteak />
        </div>
        <div className='text-2'>
            Steak
        </div>
      </div>
      <div className='text2'>
         Vegan Steak With Vegatables.
      </div>
      <div className='image2'>
      <img src='images/img-3.jpg' alt=''/>
      </div>
    </div>

  )
}

export default Cards2;
