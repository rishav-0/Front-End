import React from 'react'

const Stories = (props) => {
    const {avatar,image,name}  = props
  return (
    <div className='relative rounded-xl overflow-hidden h-[140px] w-[100px] min-w-[100px]'>
        <img className='w-full' src={image} alt="" />
        <div className="absolute bottom-0 w-full p-1">
            <div className="flex gap-1 items-center  rounded-full bg-white p-[1px]">
                <img className='h-6 w-6 rounded-full object-contain' src={avatar} alt="" />
                <p className="text-xs truncate font-semibold">{name}</p>
            </div>
        </div>
    </div>
  )
}

export default Stories