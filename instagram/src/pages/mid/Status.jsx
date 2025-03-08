import React from 'react'
import fire from '../../images/fire.png'
const Status = (props) => {
    const {like,view} = props
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center text-xs'>
            <p className="text-slate-400">
                <i className="fas fa-eye"></i> {view}
            </p>
            <p className="text-slate-400"> 
                <i className="fas fa-heart cursor-pointer text-pink-400"></i> {like}
            </p>
            <p className="text-slate-400">
                <i className="fas fa-comment-dots cursor-pointer"></i> Comment
            </p>
        </div>
        <div className="bg-pink-400 p-1 flex gap-1 rounded-full text-white cursor-pointer">
            <img className='h-3' src={fire} alt="" /> <p className="text-xs">Woww!!</p>
        </div>
    </div>
  )
}

export default Status