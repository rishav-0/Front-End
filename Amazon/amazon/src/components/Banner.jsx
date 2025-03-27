import React from 'react'
import PrimaryBtn from './PrimaryBtn'

export const Banner = (props) => {
  return (
    <div className='relative  mb-4'>
        <img  className='w-full' src="https://t4.ftcdn.net/jpg/05/08/17/01/360_F_508170187_4Oonk4IG8u9eyfwSUvTASkT8hl71vRX2.jpg" alt="" />
        <div className="absolute top-1/3 left-1/4">
           <div className="flex items-center justify-center">
            <div className=""> 
                <p className="text-2xl font-semibold">{props.title}</p>
            <p className="font-semibold mb-3">{props.desc}</p>
            <PrimaryBtn title={props.btnTitle} />
            </div>
            
        </div>
        </div>
       
    </div>
  )
}
