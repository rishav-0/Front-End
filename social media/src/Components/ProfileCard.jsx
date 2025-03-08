import React from 'react'


const ProfileCard = (props) => {
    const {photo,usrName,usrId,followers,following,caption,} = props
  return (
    <div className='relative h-[349px] rounded-xl overflow-hidden' >
        <img className='rounded-xl' src='https://img.freepik.com/free-vector/luxurious-golden-lines-black-background-design_1017-39750.jpg' alt="" />
       <div className="absolute top-24 w-full">
            <div className="flex justify-between bg-[#282828] h-[70px]  items-end p-4 rounded-t-xl">
                <div className="text-center ">
                    <p className="text-white">{followers}</p>
                    <p className="text-xs text-slate-400">Followers</p>
                </div>
                    <img className='border-4 rounded-lg w-[130px] h-[130px] border-black' src={photo} alt="" />
                <div className="text-center">
                    <p className="text-white">{following}</p>
                    <p className="text-xs text-slate-400">Following</p>
                </div>
            </div>
            <div className="bg-[#282828] text-white rounded-b-xl">
                <p className=" text-center  font-semibold mb-2">{usrName}</p>
                <p className="text-xs text-slate-400 text-center">{usrId}</p>
                <p className=" line-clamp-2 p-4 text-center font-light"><i className="fas fa-star text-yellow-400"></i> {caption} <i className="fas fa-star text-yellow-400"></i></p>
                <div className="flex w-full justify-center p-4">
                    <button className='rounded-xl bg-black w-full p-1 font-light'>My Profile</button>
                </div>
            </div>
                
       </div>
    </div>
  )
}

export default ProfileCard