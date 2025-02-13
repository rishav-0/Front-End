import React from 'react'

const Banner = (props) => {
  return (
    <div className='p-3 bg-[#22331d] rounded-lg flex justify-between text-white mb-2'>
        <div className="">
            <p className="text-lg ">{props.caption}</p>
            <p className="text-xs mb-2">{props.summary}</p>
            <button className='p-1 bg-white text-slate-400 text-xs rounded-md cursor-pointer'> {props.button} <i className={`text-xs ${props.share}`}></i></button>
        </div>
        <div className="rounded-full w-12 h-12 p-2 bg-slate-200 overflow-hidden">
            <img src={props.image} alt="" />
        </div>
    </div>
  )
}

export default Banner