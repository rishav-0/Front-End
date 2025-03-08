import React from 'react'

const Heading = (props) => {
    const {title,icon} = props
  return (
    <div className='flex gap-4 mb-6 p-2 pl-5 bg-[#212121]  text-white ' onClick={onclick} >
        <img className='w-11 h-11 ' src={icon} alt="" />
        <p className="text-3xl ">{title}</p>
    </div>
  )
}

export default Heading