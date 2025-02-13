import React, { useState } from 'react'
import BtnWite from './BtnWite'
import Input  from './Input'
import BtnBlac from './BtnBlac'

const Forms = (props) => {

 
 const {register,setRegister,userData,setUserdata,actionType} = props



  const handleInput =(e)=>{
    if(e.target.type==='checkbox'){
      setUserdata(prev=>({...prev,[e.target.name]:e.target.checked}))
    }
    else{
      setUserdata(prev=>({...prev,[e.target.name]:e.target.value}))
    }        
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setRegister([...register,{id:actionType === 'create'?Date.now():userData.id,...userData}])
    setUserdata({}) 
  }




  return (
    <div className='p-5'>
        <p className="text-3xl font-semibold text-center mb-2">Create Your Account</p>
        <p className="text-xs text-slate-400 text-center mb-2">Welcombe back! Please enter your details</p>
        <BtnWite title='Sign up with Google' img='https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png'/>
        <div className="flex gap-1 items-center my-2">
            <div className="h-[1px] bg-slate-300 w-full"></div>
            <p className="text-xs text-slate-400">or</p>
            <div className="h-[1px] bg-slate-300 w-full"></div>
        </div>
        <form onSubmit={handleSubmit}>
            <Input label='Name' type='text' required={actionType === 'create'} name='name' value={userData?.name || ""}   placeholder='Enter your name' onChange={handleInput}/>
            <Input label='Email' type='email' required={actionType === 'create'} name='email' value={userData?.email || ""} placeholder='Enter your email' onChange={handleInput}/>
            <Input label='Password' type='password' required={actionType === 'create'} name='password' value={userData?.password || ""} placeholder='Enter your password' onChange={handleInput}/>
            <Input label='Retype password' type='password' required={actionType === 'create'} name='retypedpasswd' value={userData?.retypedpasswd || ""} placeholder='Retype password' onChange={handleInput} />
             <div className="flex gap-2 mb-5">
            <input type="checkbox" name="terms" id="" required={actionType === 'create'}  onChange={handleInput}/>
            <p className="text-xs">I accepted terms & condisions.</p>
        </div>
        <div className="flex gap-2">
          
          {actionType === 'create'?<BtnBlac title='Sign up' type='submit' />:<BtnBlac title='Save' onClick={handleSubmit}/>}
            
          
        </div>
        </form>
       
        

        <p className="text-xs text-slate-400 my-3 text-center">Already have an account? <span className='text-black font-semibold cursor-pointer'>Sing in</span></p>
    </div>
  )
}

export default Forms