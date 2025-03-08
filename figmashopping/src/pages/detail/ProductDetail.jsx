import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {
    const {id}  = useParams()
    
    const [item,setItem] = useState()

    const getItem = async ()=>{
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)

        if(res.status === 200  && res.data){
            setItem(res.data)
        }
        else{
            return 'failed'
        }
    }

    useEffect(()=>{
       getItem()
        
    },[])

console.log(item,id,'detail')
   
  return (

    <div className='px-[135px]'>
        <div className="flex gap-10 flex-wrap justify-center lg:flex-nowrap">
            <div className="flex items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-between h-full">
                    {
                        item?.images?.map(i=>{
                            return (
                                <div className="w-[138px] h-[170px]">
                                    <img className='w-full' src={i} alt="" />
                                </div>
                            )
                        })
                    }
                    
                </div>
                <div className="min-w-[500px] w-[500px] flex items-center justify-center">
                    <img className='w-full ' src={item?.images[0]} alt="" />
                </div>
                
            </div>
            <div className="">
                <p className="text-2xl font-semibold mb-4">{item?.title}</p>
                <div className="flex items-center gap-1 mb-4">
                <i className="fas fa-star text-yellow-800"></i>
                <i className="fas fa-star text-yellow-800"></i>
                <i className="fas fa-star text-yellow-800"></i>
                <i className="fas fa-star text-yellow-800"></i>
                <i className="fas fa-star text-yellow-800"></i>
                <p className="text-sm font-semibold">(88)</p>
            </div>
            <p className="text-2xl mb-6">${item?.price}</p>
            <p className="text-xs mb-4">{item?.description}</p>
            <hr className='mb-4' />
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-cente border rounded-md overflow-hidden">
                    <div className="flex h-10 w-11 items-center justify-center cursor-pointer px-2 hover:bg-[#DB4444] hover:text-white"><i className="fas fa-minus "></i></div>
                    <div className="flex h-10 w-11 items-center justify-center  border-x"><p className=" text-xl px-4">1</p></div>
                    <div className="flex h-10 w-11 items-center justify-center cursor-pointer  px-2 hover:bg-[#DB4444] hover:text-white"><i className="fas fa-plus "></i></div>
                </div>
                <button className='bg-[#DB4444] px-12 py-2 rounded-md text-white'>Buy now</button>
                <div className="flex items-center border h-10 w-11 justify-center rounded-md cursor-pointer px-2 hover:bg-[#DB4444] hover:text-white"><i className="fa-light  fa-heart  "></i></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail