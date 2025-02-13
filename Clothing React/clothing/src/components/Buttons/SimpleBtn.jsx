import React from 'react'

const SimpleBtn = (props) => {



  return (
    <button className={`rounded-full border p-1 px-2 hover:bg-black hover:text-white hover:border-black text-xs font-semibold ${props.className}  `}>{props.title}</button>
  )
}

export default SimpleBtn