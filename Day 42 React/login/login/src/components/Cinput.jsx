import React, { useState } from 'react'

const Cinput = ({icon,placeholder,type,name,onChange,value}) => {
  const [toggle,setToggle] = useState(false)
  const toggleType = type === 'password' && toggle?'text':'password'
  return (
    <div className="flex gap-2 items-center bg-slate-100 rounded-md p-2 mb-2">
            <i className={`${icon}`}></i>
            <input value={value} name={name} onChange={onChange} className='w-full bg-slate-100 focus-visible:outline-none placeholder:text-slate-700  placeholder:text-sm' placeholder={placeholder} type={ type === 'password'?toggleType:type} />
            {type === 'password' && <i onClick={()=>setToggle(!toggle)} className={`fas ${toggle ?'fa-eye':'fa-eye-slash'} cursor-pointer`}/>}
    </div>
  )
}

export default Cinput