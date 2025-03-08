import React from 'react'
import splash from '../../images/splash.png'


const Download = () => {
  return (
    <div className='border-dashed border-2 rounded-xl h-[150px] w-[150px] flex items-center justify-center'>
         <div className="rounded-full h-20 w-20 bg-purple-200">
            <img className='' src={splash} alt="" />
        </div>
    </div>
  )
}

export default Download