import React, { useContext } from 'react'
import { Globalcontext } from '../../Globalcontext'

const CartProduct = (props) => {

   const {title,price,count,img,key,id,increment,decrement} = props
    const {deleteData} = useContext(Globalcontext)

  return (
    <div className="shadow-sm grid grid-cols-4 py-6 px-10 mb-10" key={key}>

            <div className="flex items-center gap-4">
                <img className='w-12' src={img} alt="" />
                <p className='truncate'>{title}</p>
            </div>

            <p className='text-center'>${price}.00</p>

            <div className="flex justify-center">
              <div className="border flex items-center justify-between gap-2 rounded-md px-3 py-1 w-[62px]">
              <p>{count}</p>
              <div className="flex flex-col text-xs gap-1">
                <i className="fas fa-angle-up cursor-pointer" onClick={increment}></i>
                <i className="fas fa-angle-down cursor-pointer" onClick={count <1 ? deleteData(id): decrement}></i> 
              </div>
            </div>
            </div>
            
            <p className='text-end'>${price*count}.00</p>
        </div>
  )
}

export default CartProduct