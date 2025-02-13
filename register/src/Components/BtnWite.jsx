import React from 'react'

const BtnWite = (props) => {
  return (
    <div className='flex gap-2 items-center justify-center border p-2 cursor-pointer'>
        <img className='w-5' src={props.img} alt="" />
        {props.title}
    </div>

  )
}

export default BtnWite