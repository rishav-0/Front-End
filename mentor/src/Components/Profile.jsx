import React from 'react'
import SideCard from './SideCard'
import Dp from './Dp'

const Profile = (props) => {
    const {dp,rate,students,post,usrName}= props
  return (
    <div className="bg-white rounded-t-3xl">
         <div className='flex justify-between  mt-[26px]   p-6'>
            <SideCard icon='fa-light fa-graduation-cap' count={students} title='Students' />
            <Dp  dp={dp}/>
            <SideCard icon='fa-sharp fa-light fa-money-bill' count={rate} title='Students' />
        </div>
        <p className="text-center font-medium mb-1">{usrName}</p>
        <p className="text-xs  text-center font-medium text-slate-400">{post} </p>
    </div>
   
  )
}

export default Profile