import React from 'react'
import ViewAll from './ViewAll'

const DiscountCard = (props) => {
    console.log(props.product)
  return (
    <div className='bg-[#eef3f9] p-2'>
        <p className="text-3xl">{props.title} <br />up to <span className='font-semibold'>-{props.discount}%</span></p>
        <ViewAll  title='View all'/>
        <div className="flex justify-end">
            <img className='h-[200px]' src={props.product?.thumbnail} alt="" />
        </div>
    </div>
  )
}

export default DiscountCard