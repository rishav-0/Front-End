import React from 'react'
import SimpleBtn from '../Buttons/SimpleBtn'

const CardThree = (props) => {
    let {title,desc,btn,id}= props
  return (
    
      
        <div className="rounded-lg bg-[#ffeee4]  p-3 mb-5" key={id}>
            <p className="text-lg font-semibold mb-2">{title}</p>
            <p className="text-xs mb-2 line-clamp-1 md:line-clamp-3">{desc}</p>
            <div className="flex justify-end">
                <SimpleBtn title={`${btn}`} className='' />
            </div>

        </div>
                
   
    
    
  )
}

export default CardThree