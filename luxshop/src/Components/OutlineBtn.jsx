import React from 'react'

const OutlineBtn = (props) => {
  return (
    <div className='border-2 border-[#FB5A2A] text-nowrap rounded-lg py-3 px-8 text-[#FB5A2A]'><i className={props.icon}></i> {props.title}</div>
  )
}

export default OutlineBtn