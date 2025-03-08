import React from 'react'

const Dp = (props) => {
  return (
    <div className='rounded-3xl border-2 w-[120px] overflow-hidden -m-[69px] h-[120px] border-white  '>
        <img className='w-full' src={props.dp} alt="" />
    </div>
  )
}

export default Dp