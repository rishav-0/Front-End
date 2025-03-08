import React from 'react'
import Postuser from '../../Components/Postuser'
import Status from './Status'

const Post = (props) => {
    const {profile,userName,time,image,like,view} = props
  return (
    <div className={`p-4 rounded-xl mb-4 ${image === ''?'bg-[##dcdcdc]' : 'bg-[#dfebff]'}`}>
    {/* <div className='p-4 rounded-xl mb-4  bg-[#dfebff]'> */}
        <Postuser profile={profile} userName={userName} time={time}  />
        <p className="text-sm font-semibold mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga atque quisquam temporibus sed dicta esse suscipit nihil vel ipsa non.</p>
        <img className='rounded-xl mb-2' src={image} alt="" />
        <Status like={like} view={view} />
    </div>
  )
}

export default Post