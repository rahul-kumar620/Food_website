import React from 'react'
import { LuSalad } from "react-icons/lu";
import "./Cards.scss";
const Cards: React.FC = () => {
  return (
    //  card1
    <div className='card-container'>
      <div className='icon'>
        <div className='icon-1'>
        <LuSalad />
        </div>
        <div className='text-1'>
            Salad
        </div>
      </div>
      <div className='text'>
         Green Mixed Salad with Garlic.
      </div>
      <div className='image'>
      <img src='images/img-2.jpg' alt=''/>
      </div>
    </div>

  )
}

export default Cards;
