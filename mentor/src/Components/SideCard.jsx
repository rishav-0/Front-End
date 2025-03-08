import React from 'react'

const SideCard = (props) => {
    const {count,title,icon} = props
  return (
    <div className="w-[88] flex flex-col items-center ">
        <p className="bg-slate-100 rounded-lg font-bold text-xs p-1 mb-1"><i className={icon}></i> {count}</p>
        <p className="text-sm text-slate-400 font-bold">{title}</p>
    </div>
  )
}

export default SideCard