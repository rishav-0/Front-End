import React from 'react'

const Sticky = () => {
  return (
    <div className='flex items-center justify-between sticky p-2 bg-white'>
        <div className="bg-slate-200 p-1 text-slate-300 text-xs rounded-md">
            <i className="fas fa-magnifying-glass"></i>
            <input className='bg-slate-200 ms-2' type="search" placeholder='Search...'/>
        </div>
        <div className="flex gap-2">
            <div className="bg-slate-200 w-7 h-7 rounded-lg flex items-center justify-center">
                <i className="fas fa-bell text-slate-400"></i>
            </div>
            <div className="bg-slate-200 w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden">
                <img className='w-full' src="https://c8.alamy.com/comp/BN7T25/man-trying-to-smile-with-crooked-teeth-isolated-on-white-BN7T25.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Sticky