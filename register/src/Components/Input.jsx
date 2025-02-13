import React, { useState } from 'react'

const Input = (props) => {
    const {label,type,placeholder,onChange,name,value,required} = props
    const [newtype, setType] = useState(type)
    const [visible, setViisible] = useState(false)

    const handelclick= ()=>{
        setViisible(!visible)
        setType(newtype === 'password'?'text':'password')
    }



  return (
    <div className='mb-2'>
        <p className="text-xs font-medium mb-2">{label}</p>
        <div className="flex items-center border gap-2 p-2">
            <input   className='text-sm  focus-visible:outline-none w-full ' required={required} name={name} onChange={onChange} type={newtype} placeholder={placeholder} value={value}/>
            {type === 'password' && <i className={`fas ${visible?'fa-eye-slash' : 'fa-eye'} cursor-pointer`} onClick={handelclick}></i>}
            
        </div>
        
    </div>
  )
}

export default Input