import React from 'react'
import { Link } from 'react-router'

const Card = (props) => {
  const {thumbnail,brand,title,rating,price,shippingInformation} = props?.item || {}
  console.log(props?.item)
  return (
    <Link to={`/product/${props?.item?.id}`}>
    <div className="flex items-center justify-center " >
      <div className='min-w-[220px] relative'>
        <div className={`absolute primaryBtn text-white text-xs p-1 ${rating > 4.5 ?'':'hidden'}`} >Best seller</div>
        <img   src={thumbnail} className='cursor-pointer' alt=""  />
        <p className="text-xs my-1 line-clamp-2"><span className="font-bold">{brand}</span>-{title}</p>
        <div className="flex">
            <i className="fas fa-star text-xs text-yellow-400"></i>
            <i className="fas fa-star text-xs text-yellow-400"></i>
            <i className="fas fa-star text-xs text-yellow-400"></i>
            <i className="fas fa-star text-xs text-yellow-400"></i>
            <i className="fas fa-star text-xs text-yellow-400"></i>
            <p className="text-xs ml-1 text-slate-500">{rating}</p>
        </div>
        
          <p className="text-lg font-semibold cursor-pointer">${price} </p>
        
        <div className="flex gap-2 items-center">
            <img className='h-4' src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png" alt="" />
            <p className="text-xs line-clamp-2">{shippingInformation}</p>
        </div>
    </div>
    </div>
    </Link>
  )
}

export default Card