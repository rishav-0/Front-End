import React from 'react'

const CardProduct = (props) => {
  return (
    <div className='bg-[#f7f7f7] rounded-lg p-3' key={props.id}>
        <img className='w-full rounded-lg mb-3' src={props.image} alt=""/>
        <p className="font-semibold mb-3">{props.title}</p>
        <div className="flex justify-between">
            <div className="flex gap-1">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
            </div>
            <p className="font-semibold">${props.price}</p>
        </div>
    </div>

  )
}

export default CardProduct