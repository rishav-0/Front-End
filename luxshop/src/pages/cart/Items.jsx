import React from 'react'
import watch  from './images/wathc.png'
const Items = (props) => {
  const {title,img,price,qunt,off, } = props
  return (
    <div className='flex border mb-5 rounded-lg items-start p-4 w-full justify-between'>
      
        <input type="checkbox" className='bg-orange-200' name="" id="" />
        
     
        <img src={img} alt="" />
        <div className="w-[245px]">
          <p className="text-[#B4B3B3] text-xs truncate">{title}</p>
          <p className="flex gap-3 items-center">IDR {price} <span className="text-[#F95A28] bg-[#fbe9eb] text-xs rounded-lg px-2 py-1">10% off</span></p>
          <p className="line-through text-xm text-gray-400">12.00</p>
          <div className="flex items-center justify-between">
            <i className="fa-light fa-heart"></i>
            <div className="flex items-center gap-4">
              <div className="h-4 flex items-center justify-center  w-4 border border-[#FF7D50]">
                <i className="fas fa-minus text-xs text-[#FF7D50]"></i>
              </div>
              <p className="">{qunt}</p>
              <div className="h-4 flex items-center justify-center  w-4 border border-[#FF7D50]">
                <i className="fas fa-plus text-xs text-[#FF7D50]"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Items