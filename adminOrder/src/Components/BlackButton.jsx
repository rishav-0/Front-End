import React from 'react'

function BlackButton({text,onClick,selected}) {
  return (
    <p onClick={onClick} className={`capitalize ${selected?'bg-black text-white':'bg-white text-black '} font-medium w-full px-2 py-1 rounded-lg cursor-pointer text-sm`}>{text}</p>
  )
}

export default BlackButton