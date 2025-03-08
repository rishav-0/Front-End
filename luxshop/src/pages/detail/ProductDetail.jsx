import React from 'react'
import Nav from './Nav'
import OrangeBtn from '../../Components/OrangeBtn'
import OutlineBtn from '../../Components/OutlineBtn'
import ipad from '../../images/ipad.png'

const ProductDetail = (props) => {
  const {off,img,title,price,about} = props
  return (
    <div className='p-6 w-[412px] h-[917px] border flex flex-col justify-between'>
      <Nav />
      <div className="h-[742px] overflow-auto no-scrollbar">
        <div className="flex h-[254px] justify-center mb-6">
          <img className=' h-full' src={img} alt="" />
        </div>
          <p className="text-lg flex items-center justify-between mb-6">{title}<i class="fa-light fa-heart text-gray-500"></i></p>
          <p className="text-xl mb-6  flex gap-3 items-center">IDR {price} <span className={`text-sm  bg-pink-50 rounded-full px-2 text-pink-400 ${off?'block':'hidden'}`}>{off}% off</span></p>
          <p className="text-lg line-through text-gray-400 mb-6">IDR 16,999.00</p>
          <p className="mb-6">Description Product</p>
          <p className="text-sm text-[#6B6B6C] mb-6 line-clamp-4 leading-6">{about}</p>
          <p className="mb-6">Type</p>
          <div className="flex gap-12">
            <div className="">
              <p className="text-xs mb-1"><span className="text-[#6B6B6C]">Colors : </span>Space Gray</p>
              <div className="flex gap-2">
                <div className="rounded-full h-6 w-6 bg-[#737373] cursor-pointer"></div>
                <div className="rounded-full h-6 w-6 bg-[#D3D3D3] cursor-pointer"></div>
              </div>
            </div>
            <div className="">
              <p className="text-xs mb-1"><span className="text-[#6B6B6C]">Capacity : </span>Wi-Fi</p>
              <div className="flex gap-3">

                <button className="text-xs hover:text-[#FB5A2A] px-4 rounded-full border border-black hover:border-[#FB5A2A]">Wi-Fi</button>
                <button className="text-xs hover:text-[#FB5A2A] px-4 rounded-full border border-black hover:border-[#FB5A2A]">Wi-Fi Cellular</button>
              </div>
            </div>
          </div>
      </div>
      <div className="flex justify-between">
        <OutlineBtn title='Add to Cart' icon='fa-light fa-cart-shopping' />
        <OrangeBtn title='Checkout'  />
      </div>
    </div>
  )
}

export default ProductDetail