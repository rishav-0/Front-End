import React from 'react'

const Product = (props) => {
  const {img,title,off} = props
  return (
    
          <div className="w-[172px] flex flex-col justify-between gap-2 border rounded-2xl p-7 relative">
            <p className={`text-sm absolute right-3 top-3 bg-pink-50 rounded-full px-2 text-pink-400 ${off?'block':'hidden'}`}>{off}% off</p>
            <img className='w-full' src={img} alt="" />
            <p className="text-xs text-center truncate text-gray-500">{title}</p>
          </div>
     
  )
}

export default Product