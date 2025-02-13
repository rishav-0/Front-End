import React from 'react'
import PrimaryBtn from './PrimaryBtn'

export const Banner = (props) => {
  return (
    <div className='grid grid-cols-2  mb-4'>
        <img  className='' src="https://mspmag.com/downloads/35978/download/(ASM-17-006)-SampleSale_Event_FB.JPG?cb=63ee9f70b8dd3f7e38479f00d206f047" alt="" />
        <div className="flex items-center justify-center">
            <div className=""> 
                <p className="text-xl">{props.title}</p>
            <p className="text-sm mb-3">{props.desc}</p>
            <PrimaryBtn title={props.btnTitle} />
            </div>
            
        </div>
    </div>
  )
}
