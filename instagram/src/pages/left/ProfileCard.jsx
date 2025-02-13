import React from 'react'
import splash from '../../images/splash.png'

const ProfileCard = () => {
  return (
    <div className="mb-3">
        <div className='flex justify-center mb-3'>
            <div className="rounded-full h-20 w-20 bg-purple-200">
                <img  src={splash} alt="" />
            </div>
            <div className=""><img className='rounded-full min-w-20 h-20 w-20 -ml-5' src="https://shiftart.com/wp-content/uploads/2017/04/RC-Profile-Square.jpg" alt="" /></div>
        </div>
        <p className="text-center font-semibold">Bodgdan Nikitin</p>
        <p className="text-xs text-center text-slate-400">@nikitinteam</p>
    </div>
    
  )
}

export default ProfileCard