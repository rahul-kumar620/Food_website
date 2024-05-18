import React from 'react'
import { LuSoup } from "react-icons/lu";
import "./Cards4.scss";
const Cards4: React.FC = () => {
  return (
    //  card1
    <div className='card4-container'>
      <div className='icon4'>
        <div className='icon-4'>
        <LuSoup />
        </div>
        <div className='text-4'>
            Soup
        </div>
      </div>
      <div className='text4'>
         Curry Soup With Sweet Potato.
      </div>
      <div className='image4'>
      <img src='images/img-1.jpg' alt=''/>
      </div>
    </div>

  )
}

export default Cards4;
