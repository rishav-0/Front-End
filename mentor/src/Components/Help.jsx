import React from 'react'

const Help = (props) => {
    const {title} = props
  return (
    <div className='flex justify-between p-3 mb-3 rounded-lg bg-slate-100'><p className="text-sm text-nowrap">{title}</p><i className="cursor-pointer fas fa-angle-right"></i></div>
  )
}

export default Help