import React from 'react'
import Showmore from '../buttons/Showmore'
import ServiceCard from '../cards/ServiceCard'
import shirt from "../../images/shirt.png";
import tshirt from "../../images/tshirt.png";
import dress from "../../images/dress.png";
import suit from "../../images/suit.png";
import cap from "../../images/cap.png";

const MarketingCalander = () => {
  return (
    <div className=''>
      <div className='MarketingCalander-text'>
        <h1>Marketing Calendar</h1>
        <Showmore name="Explore" />
      </div>
      <div className='MarketingCalander-card'>
      <ServiceCard gradient='linear-gradient(#ffe9e9, #fff8f8)' borderTop = '5px solid #FF00004D' line='#f66055' img={dress}/>
      <ServiceCard gradient='linear-gradient(#ffe9e9, #fff8f8)' borderTop = '5px solid #FF00004D' line='#f66055' img={shirt}/>
      <ServiceCard gradient='linear-gradient(#ffe9e9, #fff8f8)' borderTop = '5px solid #FF00004D' line='#f66055' img={tshirt}/>
      <ServiceCard gradient='linear-gradient(#ebf9f0, #f4fdf7)' borderTop = '5px solid #5abc84' line='#5abc84' img={suit}/>
      <ServiceCard gradient='linear-gradient(#ebf9f0, #f4fdf7)' borderTop = '5px solid #5abc84' line='#5abc84' img={cap}/>
      </div>
    </div>
  )
}

export default MarketingCalander
