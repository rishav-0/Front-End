import React from 'react'

const Input = (props) => {
    const {title,type,onChange} = props
  return (
    <input className='border-b pb-2 border-gray-400 w-full mb-10 outline-none' placeholder={title} type={type} value="" onChange={onChange}/>
  )
}

export default Input