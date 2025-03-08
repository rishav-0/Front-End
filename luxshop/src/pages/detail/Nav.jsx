import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between itemss-center'>
        <div className="flex items-center justify-center w-9 h-9 border cursor-pointer rounded-full">
            <i className="fas fa-arrow-left-long "></i>
        </div>
        <p className="text-xl">Detail Product</p>
        <div className="flex items-center justify-center w-9 h-9 border cursor-pointer rounded-full">
            <i class="fa-light fa-share-nodes"></i>
        </div>
    </div>
  )
}

export default Nav