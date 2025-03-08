
import React from 'react'

const Input = (props) => {
    const {onChange,value} = props
  return (
    <input onChange={onChange} className='outline-none shadow-xl p-2 text-sm rounded-xl border' value={value} placeholder='Add your task'  type="text" name="" id="" />
  )
}

export default Input