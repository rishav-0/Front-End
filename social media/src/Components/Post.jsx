import React from 'react'
import check from '../images/check.png'

const Post = (props) => {
    const {profile,usrId,usrName,photo,time,caption,bluetick} = props
  return (
    <div className='rounded-2xl bg-[#282828] p-4'>
        <div className="flex gap-2 mb-3" >
            <img className='w-[60px] h-[60px] border-2 rounded-lg border-black' src="https://www.themarketingnutz.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg" alt="" />
            <div className="">
                <p className=" text-slate-400 flex gap-1 items-center">@{usrId} <img className={`h-7 w-7 ${bluetick ?'block':'hidden'}`} src={check} alt="" /></p>
                <p className="text-xl text-white font-semibold">{usrName} <span className='text-[#FFFD02] font-light'>. {time}</span></p>
            </div>
        </div>
        <p className="text-sm text-slate-400 line-clamp-3 mb-4">{caption}</p>
        <img className='rounded-2xl w-full mb-4' src={photo} alt="" />
        <div className="flex items-center justify-between pb-4 border-b-[1px] border-slate-400 mb-4">
            <div className="flex gap-3 items-center text-white">
                <i class="fa-light fa-heart cursor-pointer"></i>
                <i class="fa-light fa-comment cursor-pointer"></i>
                <i class="fa-light fa-paper-plane cursor-pointer"></i>
            </div>
            <button className="bg-[#FFFD02] font-semibold cursor-pointer px-6  p-1 rounded-lg">Save </button>
        </div>
        <div className=" flex gap-2 bg-[#282828] rounded-2xl ">
            <img className='h-8 w-8 border border-black' src="https://www.themarketingnutz.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg" alt="" />
            <div className="flex items-center w-full gap-3 bg-[#1a1a1a] rounded-xl justify-between p-1">
                <input className='w-full rounded-xl outline-none bg-[#1a1a1a] text-slate-400 placeholder:font-light' type="text" placeholder='Tell your friends about your thoughts...'/>
                <i class="fa-light fa-paper-plane cursor-pointer text-slate-400 pe-4"></i>
            </div>
        </div>
    </div>
  )
}

export default Post