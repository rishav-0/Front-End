import React from 'react'

const Community = (props) => {
    const {img,post,count} = props
  return (
    <div className='flex gap-3 mb-5'>
        <img className='h-9 w-9 rounded-lg object-contain'  src={img} alt="" />
        <div className="">
            <p className="text-xs text-white">{post}</p>
            <p className="text-xs text-[#FFFD02]">{count} your friends are in</p>
        </div>
    </div>
  )
}

export default Community