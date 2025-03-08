import React from 'react'

const Tab = (props) => {
    const {title} = props
  return (
    <button className='rounded-lg font-extrabold bg-slate-100 py-2 px-4 cursor-pointer hover:bg-slate-200 hover:text-blue-500'>
       {title}
    </button>
  ) 
}

export default Tab