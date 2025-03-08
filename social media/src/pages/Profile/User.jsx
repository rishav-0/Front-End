import React from 'react'
import Tab from '../../Components/Tab'
import graph from '../../images/graph.png'
import Input from './Input'
const User = (props) => {
    const {usrName,post,caption,photo} = props
  return (
    <div className='flex gap-4 p-4'>
        <div className="w-[350px] min-w-[350px] flex flex-col gap-4 items-center">
            <img className='rounded-full w-[420px] ' src={photo} alt="" />
            <p className="text-4xl text-white font-semibold">{usrName}</p>
            <p className="text-slate-400  font-light">{post}</p>
            <p className="text-lg text-slate-400  line-clamp-3 ">{caption}</p>
            <button className="bg-[#fffd02] rounded-xl text-3xl py-2 px-6"><i class="fa-light fa-pen"></i> Edit profile</button>
        </div>
        <div className="w-full">
            <div className="flex mb-4  justify-between w-full gap-3 border-b  text-white ">
                <Tab title='Activity' count='1048'/>
                <Tab title='Notification' count='30'/>
                <Tab title='Display' />
                <Tab title='Apps' />
              
            </div>
            <p className="text-3xl mb-2 font-light text-white">My account Activity</p>
            <img className='w-full mb-4' src={graph} alt="" />
            <p className="text-3xl mb-2 font-light text-white">My Profile Settings</p>
            <p className="text-xs mb-4 text-slate-400">Please edit your detais below</p>
            <div className="w-[80%] sm:w-1/2">
                <Input type='password' placeholder='Password' label='Password'  />
                <Input type='email' label='Email'  />

                <div className="flex gap-2 justify-between ">
                <Input type='text' placeholder='DD' label='Date'  />
                <Input type='text' placeholder='TT' label='Time'  />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default User