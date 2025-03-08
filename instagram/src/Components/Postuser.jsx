import React from 'react'

const Postuser = (props) => {
    const {profile,userName,time} = props
  return (
    <div className='flex justify-between items-center mb-2'>
        <div className="flex gap-2 items-center">
            <img  className='rounded-full h-10 w-10' src={profile} alt="" />
            <div className="">
                <p className="text-xs font-bold">{userName}</p>
                <p className="text-xs text-slate-400">{time}</p>
            </div>
        </div>
        <div className="rounded-full w-10 h-10 border cursor-pointer border-slate-300 flex items-center justify-center ">
            <i className="fas fa-ellipsis-vertical text-xl"></i>
        </div>
    </div>
  )
}

export default Postuser