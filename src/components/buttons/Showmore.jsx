import React from 'react'
import {FaLongArrowAltRight} from "react-icons/fa"

const Showmore = ({name}) => {
  return (
    <div className='Showmore'>
      <button >{name}</button>
      <FaLongArrowAltRight className='Showmore-icon' />
    </div>
  )
}

export default Showmore
