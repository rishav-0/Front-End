import React from 'react'

const Btn = (props) => {
    const {cls,onClick,title,disabled,children} = props
  return (
    <button className={`${cls} text-white  px-4 py-1 rounded-xl font-semibold ${disabled && 'bg-gray-500'}`} disabled={disabled} onClick={onClick}>{title} {children}</button >
  )
}

export default Btn