import React from 'react'
import Btn from './Btn'

const BigHeading = (props) => {
  const {title,btn} = props
  return (
    <div className='flex items-center justify-between mb-10'>
        <p className="text-4xl font-semibold">{title}</p>
       
        
    </div>
  )
}

export default BigHeading