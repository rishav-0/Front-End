import React from 'react'
import SecondaryBtn from '../components/SecondaryBtn'
import PrimaryBtn from '../components/PrimaryBtn'

const Cart = (props) => {
  return (
    <div className='grid sm:grid-cols-2 p-2'>
        <div className="flex items-center justify-center">
            <img className='h-[300px]' src={props.img} alt="" />
        </div>
        <div className="flex items-center p-10">
             <div className="">
                <p className="text-xs text-slate-400">By <span className="text-orange-500 font-semibold">{props.brand}</span></p>
                <p className="tex-4xl font-semibold">{props.title}</p>
                <div className='flex gap-1'>$ 
                    <span className='text-3xl font-bold'>{props.price}</span>
                    <p className="text-xs text-slate-400">{props.stock}in stocks</p>
                </div>
                <div className="flex gap-1 mb-3">
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <i className="fas fa-star text-yellow-400"></i>
                    <p className="text-sm text-slate-400"><i className="fas fa-angle-down mr-2"></i>ratings</p>
                </div>
                <div className="flex items-center gap-2">
                    <img className='h-4' src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt="" />
                    <p className="text-slate-400">FREE delivery: <span className='text-black mr-1'>{props.delivery}</span>in the  UK</p>
                </div>
                <p className="text-orange-400 cursor-pointer mb-3">Details</p>
                <p className="text-sm mb-4">{props.detail}</p>
                <div className="flex  w-full gap-3">
                    <SecondaryBtn title='Add to list' className='rounded-md w-2/3' />
                    <PrimaryBtn title='Add to Basket' className='rounded-md w-2/3' icon={<i class="fa-light fa-cart-minus"></i>} />
                   
                </div>
            </div>
        </div>
           
    </div>
  )
}

export default Cart