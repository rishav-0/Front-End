import React from 'react'
import Rectangle43 from '../../images/Rectangle43.png'
import Input from '../../Components/Input'
import Logo from '../../Components/Logo'

const Login = () => {
    return (
        <div className=' gradient flex justify-between h-screen p-1 '>
            <div className="w-full xl:flex flex-col items-center justify-between min-w-[300px]">
                <div className="w-full">
                    <div className="flex items-center gap-2 mb-6 p-4">
                    
                    <Logo />
                    <p className="text-yellow-400 text-3xl italic font-semibold">Bchat</p>
                </div>
                <p className="text-3xl font-bold text-white text-center">WELCOME BACK</p>
                <div className="flex justify-center">
                    <form className='p-6 lg:w-2/3'>
                    <div className="mb-3">
                        <p className="font-light text-xl text-white">Email</p>
                        <Input type='text' />
                    </div>
                    <div className="mb-1">
                        <p className="font-light text-xl text-white">Password</p>
                        <Input type='password' />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex gap-1 items-center">
                            <input type="checkbox" className='bg-gray-400' />
                            <p className="text-white">Remember me</p>
                        </div>
                        <p className="text-white">Forgot password</p>
                    </div>
                    <button type='submit' className='w-full bg-[#101010] text-white py-2 rounded-lg mb-3'>Sign in</button>
                    <button type='submit' className='w-full bg-black text-white py-2 rounded-lg mb-3'>Sign in With Google</button>
                </form>
                </div>
                
                </div>
                
                <p className="text-xs text-white text-center p-4">Copyright 2024 </p>
            </div>
            <img className=' xl:h-full h-[600px]' src={Rectangle43} alt="" />
        </div>
    )
}

export default Login