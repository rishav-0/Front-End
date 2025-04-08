import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Link, useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Product = (props) => {
    const navigate = useNavigate()
    const { title, image, price, id, addToCart, isinCart } = props
    const { isSignedIn } = useAuth()
    const random = ()=>{
         const randomNumber = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
         return randomNumber
    }
   



    const handleAddtoCart = () => {
        if (isSignedIn) {
            console.log(isSignedIn, 'called');
            addToCart()
        } else {
            navigate('/signup')
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Optional: adds smooth scrolling animation
            });
        }
    }

    return (

        <div className='w-[270px] min-w-[270px] rounded-sm '>
<ToastContainer /> 
            <div className="w-full relative h-[250px] flex items-center group justify-center overflow-hidden bg-[#F5F5F5]  mb-4">
                <div className="absolute top-0 w-full">
                    <div className="flex justify-between items-start p-3">
                        <p className="bg-[#db4444] text-white rounded-sm px-2">- {random()}%</p>
                        <div className="flex gap-2 flex-col items-center ">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white cursor-pointer">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white cursor-pointer">
                                <i className="fa-light fa-eye"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={`/productdetail/${id}`}><img className='w-full' src={image} alt="" /></Link>
                {isinCart ? (
                    
                        <div className="bg-black absolute bottom-0 w-full invisible group-hover:visible cursor-pointer text-white text-center py-2">
                            Already in Cart
                        </div>
                  
                ) : (
                    <div onClick={handleAddtoCart} className="bg-black absolute bottom-0 w-full invisible group-hover:visible cursor-pointer text-white text-center py-2">
                        Add to Cart
                    </div>
                )}


            </div>
            <Link to={`/productdetail/${id}`}>
                <p className="truncate ">{title}</p>
                <p className="text-[#db4444] font-medium">${price}</p>
                <div className="flex items-center gap-1">
                    <i className="fas fa-star text-yellow-800"></i>
                    <i className="fas fa-star text-yellow-800"></i>
                    <i className="fas fa-star text-yellow-800"></i>
                    <i className="fas fa-star text-yellow-800"></i>
                    <i className="fas fa-star text-yellow-800"></i>
                    <p className="text-sm font-semibold">({random()})</p>
                </div>
            </Link>

        </div>


    )
}

export default Product