import React from 'react'

const Chats = (props) => {
    const {img,ntfcn,name,text,textcount,time} = props
  return (
    <div className='p-3 bg-white flex justify-between'>
        <div className="flex gap-3">
            <div className="relative">
                <img className="w-10 h-10 rounded-full" src={img} alt="" />
                <span className="bottom-0 left-7 absolute  w-4 h-3.5 flex items-center justify-center text-white border border-white p-1 bg-green-400  rounded-lg text-xs ">{ntfcn}</span>
            </div>
            <div className="flex flex-col justify-between">
                <p className="">{name}</p>
                <p className="text-xs text-slate-400 truncate">{text}</p>
            </div>
        </div>
        <div className="flex flex-col justify-between">
            <div className="h-5 w-5 rounded-full flex items-center justify-center p-2 bg-black text-white">
                <p className="text-xs">{textcount}</p>
            </div>
                <p className="text-xs text-slate-400 truncate">{time}</p>
        </div>

    </div>
  )
}

export default Chats