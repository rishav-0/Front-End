import React from 'react'
import greentick from '../../images/greentick.png'

const Activity = (props) => {
    const {usrName,time,photo,tick} = props
  return (
    <div className='flex gap-3 w-full bg-[#1a1a1a] p-4 rounded-xl mb-8'>
        <div className="relative w-10 h-10">
            <img  src={photo} alt="" className="w-full rounded-lg" />
            <img className={`absolute  w-4 -top-1 -right-1 ${tick?'block':'hidden'}`} src={greentick} alt="" />
        </div>
        <div className="w-full">
            <p className="text-white font-light">{usrName}</p>
            <p className="text-xs text-slate-400 mb-2">Followed on you <span className="text-[#FFFD02] font-light">{time}</span></p>
            <div className="flex gap-2 p-[4px] rounded-full bg-black justify-between w-full">
                <p className="text-[10px] hover:bg-[#FFFD02] text-white hover:text-black rounded-full w-full text-center">Remove</p>
                <p className="text-[10px] hover:bg-[#FFFD02] text-white hover:text-black rounded-full w-full text-center">Follow Back</p>
            </div>
        </div>
    </div>
  )
}

export default Activity