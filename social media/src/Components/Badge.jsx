import React from 'react'

const Badge = (props) => {
  return (
    <p className="bg-[#282828] px-4 py-1 rounded-lg text-nowrap flex-grow text-center text-slate-400 text-xs">{props.title}</p>

  )
}

export default Badge