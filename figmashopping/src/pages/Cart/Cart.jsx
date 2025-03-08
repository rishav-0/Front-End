import React, { useContext } from 'react'
import CartProduct from './CartProduct'
import Btn from '../../Components/Btn'
import { Globalcontext } from '../../Globalcontext'


const Cart = (props) => {

  const {cartLIst,updateItem,getCart} = useContext(Globalcontext)

  // console.log(cartLIst.data,'cartlist')
  
  const total = cartLIst?.reduce((total, item) => total + item.price * item.qty, 0)

  
    const handleIncrement = async (isinCart,i,sItem)=>{
      console.log(sItem,'sitem')
      if(isinCart){
        const payload = {
          ...sItem,
          qty:sItem?.qty+1
        }
        const response = await updateItem(sItem?._id,payload)
        if(response.status == 200){
        
          getCart()
        }
        console.log(response,'item')
      }
      else{
        addtocart(i)
      }
    }

     const handleDecrement = async (isinCart,i,sItem)=>{
      console.log(sItem,'sitem')
      if(isinCart){
        const payload = {
          ...sItem,
          qty:sItem?.qty-1
        }
        const response = await updateItem(sItem?._id,payload)
        if(response.status == 200){
          getCart()
        }
        console.log(response,'item')
      }
      else{
        addtocart(i)
      }
    }

  return (
    <div className='px-10'>
        <div className="shadow-sm grid grid-cols-4 py-6 px-10 mb-10">
            <p className="">Product</p>
            <p className="text-center">Price</p>
            <p className="text-center">Quantity</p>
            <p className="text-end">Subtotal</p>
        </div>

         {
          cartLIst?.map(i=>{
             const isinCart = cartLIst?.some(j=>j.id == i.id)
              const sItem = cartLIst?.find(j=>j.id == i.id)
            return (
              <CartProduct title={i.title} img={i?.image} price={i.price}  count={i.qty} key={i.id} id={i._id} decrement={()=>handleDecrement(isinCart,i,sItem)} increment={()=>handleIncrement(isinCart,i,sItem)}/> 
            )
          })
        }
   
        
      <div className="w-[470px] border px-6 py-8">
        <p className=" text-xl font-medium mb-6">Cart Total</p>
        <div className="flex justify-between border-b pb-4 mb-4">
          <p className="">Subtotal:</p>
          <p className="">${total}</p>
        </div>
        <div className="flex justify-between border-b pb-4 mb-4">
          <p className="">Shipping:</p>
          <p className="">Free</p>
        </div>
        <div className="flex justify-between  pb-4">
          <p className="">Total:</p>
          <p className="">${total}</p>
        </div>
        <div className="flex justify-center">
          <Btn title='Proceed to checkout'/>
        </div>
      </div>
    </div>
  )
}

export default Cart