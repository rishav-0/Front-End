import React from 'react'

const BtnNav = (props) => {
    const {icon,onClick} = props
  return (
    <div className="flex flex-col group items-center cursor-pointer gap-1">
            <i class={`${icon} text-xl  text-white hover:text-[#FFFD02]`} onClick={onClick}></i>
            <div className="w-1 h-1 -mt-1 hidden group-hover:block  bg-[#FFFD02] rounded-full"></div>
          </div>
  )
}

export default BtnNav