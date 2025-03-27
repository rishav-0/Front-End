import React from 'react'

const Tab = (props) => {
    const {title,icon,notification} = props
  return (
    <div className='rounded-xl p-3  flex items-center justify-between hover:bg-black  hover:text-white'>
        <div className="flex gap-2 items-center">
            <i className={icon}></i>
            <p className="text-sm font-bold ">{title}</p>
        </div>
        {
            notification && <div className="rounded-full  bg-black h-4 w-4 p-3 flex items-center justify-center ">
            <p className="text-white">{notification}</p>
        </div>
        }
        
    </div>
  )
}

export default Tab