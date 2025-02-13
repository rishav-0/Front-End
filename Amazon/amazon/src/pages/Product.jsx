import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart'
import Reviews from '../components/Reviews'
import { useLocation,useParams } from 'react-router'

const Product = (props) => {

    const {id} = useParams()
    const [item,setItem] = useState(null)

    // console.log('product',item)
    // console.log(id)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`) 
          .then((res) => res.json())
          .then((data) => {
            setItem(data)
          })
          .catch((err) => {
            console.log("err")
          });
      }, []);

  return (
    <div>
          <Cart img={item?.images} brand={item?.brand} title={item?.title}
            price={item?.price} stock={item?.stock} delivery={item?.shippingInformation}
            detail={item?.description}/>
         
      <div className="flex px-4 py-2 justify-around bg-slate-200">
        <button className="text-slate-400">Description</button>
        <button className="text-slate-400">Specifications</button>
        <button className="text-slate-400">Reviews</button>
        <button className="text-slate-400">Questions & Answers</button>
      </div>
      <Reviews item={item} />
    </div>
  )
}

export default Product