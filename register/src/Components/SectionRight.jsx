import React from 'react'
import image from '../images/image.png'
const SectionRight = () => {
  return (
    <div className="bg-[#1a1c1e] text-white p-5">
        <p className="text-4xl text-center font-semibold">Welcome to FillQuick</p>
        <p className="text-4xl text-center font-semibold">Pay! Join Now For</p>
        <p className="text-4xl text-center font-semibold">Seamless Payments</p>
        <p className="text-xs text-slate-400 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quaerat rem repudiandae quas magnam rerum sed autem doloribus vel praesentium! Nobis in nostrum ad maxime at tempora tenetur a officia.</p>
        <img className='w-full' src={image} alt="" />
    </div>
  )
}

export default SectionRight