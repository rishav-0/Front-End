import React from 'react'

const PrimaryBtn = (props) => {
  return (
    <button className={`primaryBtn cursor-pointer text-sm p-1 px-3 rounded-sm text-white ${props.className}`} onClick={props.onClick}>{props.title} {props.icon}</button>
  )
}

export default PrimaryBtn