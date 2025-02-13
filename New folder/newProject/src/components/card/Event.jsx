import React from 'react'
import { colors } from '../../utils'

const Event = (props) => {
  return (
    <div className='w-[260px] bg-white rounded-xl p-3'>
        <p className="text-xs mb-2">Event name</p>
        <div className="flex gap-2 p-2 bg-slate-300 rounded-xl items-center mb-2">
            <i className="fas fa-clock"></i>
            <input className='focus-visible:outline-none' type="text" />
            <i className="fas fa-eye"></i>
        </div>
        <div className="flex gap-2">
            {
                colors.map(i=>{
                    return (
                        <div className={`h-4 rounded-full w-4 ${i}`} ></div>
                    )
                })
            }
        </div>
        <p className="text-xs mb-2">Time</p>
        <div className="flex gap-2 p-2 bg-slate-300 rounded-xl items-center">
            <i className="fas fa-clock"></i>
            <input className='focus-visible:outline-none w-full' type="time" />
            <i className="fas fa-eye"></i>
        </div>
    </div>
  )
}

export default Event