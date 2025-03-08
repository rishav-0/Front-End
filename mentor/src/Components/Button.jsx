import React from 'react'

const Button = (props) => {
    const {title} = props
  return (
    <div className='bg-blue-500 text-center py-3 rounded-xl cursor-pointer text-white text-sm'>{title}</div>
  )
}

export default Button