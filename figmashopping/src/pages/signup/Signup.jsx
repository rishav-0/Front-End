import React from 'react'
import loginimg from '../../images/loginimg.png'
import Input from '../../Components/Input'
import google from '../../images/google.png'

const Signup = () => {
  return (
    <div className='flex gap-10 flex-wrap h-screen'>
        {/* <img className='' src={loginimg} alt="" /> */}
        <div className="flex items-center justify-center flex-grow ">
            <div className="w-[371px]">
                <p className="text-xl">Create an account</p>
                <p className="text-xs mb-12">Enter your details below</p>

                <Input title='Name' type='text'/>
                <Input title='Enter your Phone Number' type='number'/>
                <Input title='Password' type='password'/>

                <button className='bg-[#DB4444] text-white p-4 w-full rounded-md mb-4'>Create Account</button>
                <button className='border border-gray-400 p-4 w-full rounded-md mb-4 flex items-center justify-center gap-2'>
                    <img className='w-6' src={google} alt="" />
                    Sign up with Google
                </button>
                <p className="text-sm text-center">Already have account?  <span className='underline cursor-pointer underline-offset-4'> Log in</span></p>
            </div>
        </div>
    </div>
  )
}

export default Signup