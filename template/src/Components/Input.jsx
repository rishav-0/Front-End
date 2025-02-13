import React from 'react'

const Input = (props) => {
  return (
    <div >
        <p className="text-sm text-slate-500">{props.label}</p>
        <input name={props.name} value={props.value} type={props.type} onChange ={props.onChange} className={`border w-full rounded-sm p-1 focus-visible:outline-none ${props.className}`}/>
    </div>
  )
}

export default Input