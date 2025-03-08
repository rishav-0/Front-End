import React from 'react'

const Tab = (props) => {
    const {title,onClick,count} = props
  return (
            <p className="text-3xl font-light cursor-pointer hover:border-b-2 hover:border-[#fffd02] pb-2 flex gap-1 items-start" onClick={onClick}>{title} <span className={`${count?'block':'hidden'} border text-sm px-1`}>{count}</span></p>
  )
}

export default Tab