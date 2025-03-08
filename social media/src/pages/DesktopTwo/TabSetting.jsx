import React from 'react'

const TabSetting = (props) => {
    const {title,icon,onClick} = props
  return (
    <div className='flex gap-4 mb-3 p-2 pl-5 cursor-pointer rounded-e-xl text-white hover:bg-[#fffd02] group hover:pl-7' onClick={onclick} >
        <img className='w-11 h-11 group-hover:invert' src={icon} alt="" />
        <p className="text-3xl group-hover:text-black">{title}</p>
    </div>
  )
}

export default TabSetting