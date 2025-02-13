import React from 'react'

const SecondaryBtn = (props) => {
  return (
    <button className={`secondaryBtn text-sm p-1 px-3 rounded-sm text-white ${props.className}`} onClick={props.onClick}>{props.title}</button>
  )
}

export default SecondaryBtn