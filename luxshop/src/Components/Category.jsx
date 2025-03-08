import React from 'react'

const Category = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div className='rounded-full w-14 h-14 bg-[#ececec] flex items-center justify-center mb-1'>
        <img className='w-8' src={props.logo} alt="" />
      </div>
      <p className="text-xs font-light text-nowrap">{props.title}</p>
    </div>
    
  )
}

export default Category