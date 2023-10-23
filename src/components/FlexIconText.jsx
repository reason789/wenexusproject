import React from 'react'

const FlexIconText = ({Icon, header, subHeader}) => {
  return (
    <div>
      <div className='FlexIconText_flex'>
        <div className='icon'>{<Icon size="25px"/>}</div>
        <div>
            <p>{header}</p>
            <p>{subHeader}</p>
        </div>
      </div>
    </div>
  )
}

export default FlexIconText
