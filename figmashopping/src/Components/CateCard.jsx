import React from 'react'

const CateCard = (props) => {
    const {title,img,onClick} = props
  return (
    <div className='min-w-[170px] w-[170px] h-[145px] border flex flex-col items-center justify-center gap-4 cursor-pointer' onClick={onClick}>
        <img className='w-20' src={img} alt="" />
        <p className="">{title}</p>
    </div>
  )
}

export default CateCard