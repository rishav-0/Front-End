import React from 'react'

const Newpost = () => {
  return (
    <div className=' bg-[#f4f1f2] p-4 rounded-xl w-full  bottom-0'>
        <div className="flex justify-between items-center p-1 rounded-full bg-white mb-2">
            <div className="flex justify-between gap-2 items-center w-full">
                <img className='rounded-full h-8 w-8' src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg" alt="" />
                <input className='focus-visible:outline-none w-full placeholder:text-sm' placeholder='Share something' type="text" />
            </div>
            <i class="fa-solid fa-face-smile cursor-pointer text-slate-400"></i>
        </div>
        <div className="flex justify-between item-center">
            <div className="flex items-center gap-3">
                <p className="text-xs font-bold text-nowrap"><i className="fas fa-folder-minus"></i> File</p>
                <p className="text-xs font-bold text-nowrap"><i className="fa-solid fa-image"></i> Image</p>
                <p className="text-xs font-bold text-nowrap"><i className="fas fa-location-dot"></i> Location</p>
                <p className="text-xs font-bold text-nowrap"><i className="fas fa-globe"></i> Public</p>
            </div>
            <button className="bg-black rounded-full text-white text-xs py-2 px-6 cursor-pointer">Send</button>
        </div>
    </div>

  )
}

export default Newpost