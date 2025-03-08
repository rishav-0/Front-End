import React from 'react'

const Heading = (props) => {
  return (
    <div className='flex gap-3 items-center mb-6'>
        <div className="h-10 w-5 rounded-sm bg-[#DB4444]"></div>
        <p className="font-semibold text-[#DB4444]">{props.title}</p>
    </div>
  )
}

export default Heading