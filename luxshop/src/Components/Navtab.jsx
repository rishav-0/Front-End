import React from 'react'

const Navtab = (props) => {
const {title,icon,onClick} = props
  return (
    <div className="flex flex-col group items-center hover:border-t-2 border-[#ED6D3D] pt-2" onClick={onClick}>
        <i class={`${icon} mb-2 text-xl group-hover:text-[#ED6D3D]`}></i>
        <p className='text-xs group-hover:text-[#ED6D3D]'>{title}</p>
    </div>
  )
}

export default Navtab