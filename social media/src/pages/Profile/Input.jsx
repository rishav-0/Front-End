import React from 'react'

const Input = (props) => {
    const {type,label,placeholder} = props
  return (
    <div className='flex items-center gap-4 w-full justify-between text-white mb-4'>
        <p className="text-2xl">{label}</p>
        <input placeholder={placeholder} className={` placeholder:text-slate-400 text-slate-400 bg-transparent border border-[#fffd02] px-2  ${type === 'text' ?'w-full':'w-[397px]' } rounded-xl outline-none`} type={type} />
    </div>
  )
}

export default Input