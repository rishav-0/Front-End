import React from 'react'

const Tabs = (props) => {
  return (
    <div className={`rounded-lg  p-2 flex gap-2 mb-2 items-center  ${props.currentTab === props.tab ?'bg-white border text-green-500':'hover:bg-slate-200 text-slate-700'}`} onClick={props.onClick} key={props.key}>
        <i className={props.icon}></i>
        <p className={`text-sm ${props.sidebar == false ? 'hidden':''}`}>{props.tab}</p>
    </div>
  )
}

export default Tabs