import React from 'react'

function ServiceCard({icon,heading,desc}) {
  return (
    <div className='border-2 p-4 rounded-lg relative transition-all border-[#e4e4e4] duration-300 hover:scale-y-[1.1] hover:bg-[#d7f953] hover:border-[#d7f953]' style={{ transformOrigin: 'bottom' }}> 
        <div className="mb-8">
            <i className={`fas ${icon} text-black text-2xl mb-4`}></i>
            <p className="font-bold mb-4">{heading}</p>
            <p className="text-sm font-semibold">{desc}</p>
        </div>
        
        <button className="absolute bottom-4 cursor-pointer text-sm border-b-2 font-bold border-black">Learn more</button>
    </div>
  )
}

export default ServiceCard