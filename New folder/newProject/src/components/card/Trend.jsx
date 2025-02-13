import React from 'react'

const Trend = (props) => {
  return (
    <div className='flex gap-2 mb-3 rounded-xl overflow-hidden bg-white'>
        <img className='w-1/4' src="https://coamplifi.com/wp-content/uploads/2021/04/coamplifi-meetings-1-750x550.jpg" alt="" />
        <div className="p-3">
            <p className="font-semibold">{props.title}</p>
            <p className="text-xs text-slate-400">{props.desc}</p>
        </div>
    </div>
  )
}

export default Trend