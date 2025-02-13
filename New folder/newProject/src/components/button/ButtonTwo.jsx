import React from 'react'

const ButtonTwo = (props) => {
  return (
        <button className={`px-4 py-2 rounded-xl text-xs cursor-pointer ${props.className}`}>{props.title}</button>

  )
}

export default ButtonTwo