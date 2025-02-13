import React from 'react'
import watch from '../images/watch.png'
import PrimaryBtn from './PrimaryBtn'
const BanerTwo = () => {
  return (
    <div className='flex gap-3 flex-wrap md:flex-nowrap p-5 justify-between'>
        <div className="w-full background flex justify-between">
            <div className="p-5 w-full ">
                <p className="font-bold gap-1  mb-5"><i className="mr-1 fab fa-apple text-black"></i>WATCH</p>
                <p className="text-3xl font-semibold text-left whitespace-nowrap">Heavy on Features</p>
                <p className="text-3xl font-semibold text-left mb-3">Light on price</p>
                <p className="text-lg font-semibold  mb-3">From $299</p>
                <div className="flex gap-2 items-center">
                    <PrimaryBtn title='Buy' className='p-2 px-10' />
                    <button className='text-nowrap text-[#ff9900] p-2 px-10'>Learn more <i className="fas fa-angle-right"></i></button>
                </div>
            </div>
            <img src={watch} className='w-1/2 min-w-[300px]' alt="" />
        </div>
        <div className="background w-full">
            <div className="p-5">  
                <p className="text-2xl font-semibold">Discover all the <br /> accessories</p>
                <button className='text-nowrap text-[#ff9900] '>Learn more <i className="fas fa-angle-right"></i></button>
            </div>
            <div className="flex justify-center">
                <img className='w-1/2 min-w-[300px]' src="https://shop.zebronics.com/cdn/shop/files/Zeb-Thunderpro-blue-pic-1.jpg?v=1709202990&width=1200" alt="" />
                
            </div>


        </div>
    </div>
  )
}

export default BanerTwo