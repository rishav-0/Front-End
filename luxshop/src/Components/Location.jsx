import React from 'react'
import location from '../images/location.png'

const Location = (props) => {
  return (
    <div className='flex gap-2 items-center mb-11'>
        <img className='h-5' src={location} alt="" />
        <p className="text-xs truncate"><span className='text-gray-400'>Deliver to</span> {props.address}</p>
    </div>
  )
}

export default Location