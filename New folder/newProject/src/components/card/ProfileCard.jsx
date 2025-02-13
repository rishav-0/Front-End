import React from 'react'

const ProfileCard = (props) => {
  const {img,name,work,friends,projects,reviews} = props
  return (
    <div className='rounded-xl shadow-sm w-[260px] p-3 bg-white mb-3'>
      <div className="flex gap-2 flex-col items-center justify-center">
        <div className="rounded-full h-[80px] w-[80px] overflow-hidden">
          <img src={img} alt="" className="w-full" />
        </div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm text-slate-400 font-semibold">{work}</p>
        <div className="w-[180px] h-[1px] bg-slate-300"></div>
        <div className="flex w-full justify-between gap-2">
          <div className="text-center">
            <p className="text-sm font-medium">Friends</p>
            <p className="text-sm text-blue-500">{friends}</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium">Projects</p>
            <p className="text-sm text-blue-500">{projects}</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium">Reviews</p>
            <p className="text-sm text-blue-500">{reviews}</p>
          </div>
        </div>
        <div className="flex w-full justify-between items-center gap-2 bg-gray-300 p-[2px] rounded-xl">
          <div className="hover:bg-slate-100 hover:text-black text-slate-500 rounded-xl p-2 text-xs whitespace-nowrap"><i className="fas fa-box"></i> Default</div>
          <div className="hover:bg-slate-100  hover:text-black text-slate-500 rounded-xl p-2 text-xs whitespace-nowrap"><i class="fa-solid fa-bolt"></i> Active</div>
          <div className="hover:bg-slate-100  hover:text-black text-slate-500 rounded-xl p-2 text-xs whitespace-nowrap"><i class="fa-solid fa-hourglass-start"></i> Default</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard