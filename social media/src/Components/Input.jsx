import React from 'react'

const Input = (props) => {
    const {onChange,type,name} = props
  return (
    <input className='bg-transparent border-2 text-white border-white focus-visible:outline-none p-2 w-full' type={type} name={name} onChange={onChange}/>
  )
}

export default Input