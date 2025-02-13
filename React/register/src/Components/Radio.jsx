import React, { useState } from 'react'

const Radio = (props) => {
    
  return (
    <div className={`border flex p-2 justify-between gap-3  rounded-lg border-[#5f32e6] text-[#5f32e6]':'border-slate-500 text-slate-500'}`}>
        <p className="whitespace-nowrap"><i className={props.icon}></i>  {props.title}</p>
        <input type="radio" value={props.title} name={props.name} id="" onChange={props.onChange}/>
    </div>
  )
}

export default Radio