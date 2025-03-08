import React from 'react'
import Items from './Items'
import OrangeBtn from '../../Components/OrangeBtn'
import watch from './images/wathc.png'
import hoddie from './images/hoddie.png'
import buds from './images/buds.png'
import pant from './images/pant.png'
import headphone from './images/headphone.png'
import jacket from './images/jacket.png'

const Cart = () => {
  return (
    <div className='p-6 w-[412px] h-[917px] border flex flex-col justify-between'>
      <div className='flex justify-between itemss-center mb-10'>
        <div className="flex items-center justify-center w-9 h-9 border cursor-pointer rounded-full">
          <i className="fas fa-arrow-left-long "></i>
        </div>
        <p className="text-xl">My Cart</p>
        <div className="flex items-center invisible justify-center w-9 h-9 border cursor-pointer rounded-full">
          <i className="fa-light fa-share-nodes"></i>
        </div>
      </div>
      <div className=" h-[742px] overflow-auto no-scrollbar ">
        <Items title='Apple Watch Ultra 2 with Ocean Band' price='15,999.00' img={watch}
        qunt='1'/>
        <Items title='Apple Watch Ultra 2 with Ocean Band' price='15,999.00' img={hoddie}
        qunt='1'/>
        <Items title='Apple Watch Ultra 2 with Ocean Band' price='15,999.00' img={pant}
        qunt='1'/>
        <Items title='Apple Watch Ultra 2 with Ocean Band' price='15,999.00' img={jacket}
        qunt='1'/>
        <Items title='Apple Watch Ultra 2 with Ocean Band' price='15,999.00' img={buds}
        qunt='1'/>
        <Items title='Apple Watch Ultra 2 with Ocean Band' price='15,999.00' img={headphone}
        qunt='1'/>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <p className="text-xs">Select all</p>
          </div>
          <div className="">
            <p className="text-[#CBCBCB] text-xs" >Total</p>
            <p className="">15,999.00</p>
          </div>
          <OrangeBtn title='Checkout'/>
        </div>
    </div>
  )
}

export default Cart