import React from 'react'
import Cinput from '../../components/Cinput'


const Login = () => {
  return (
    <div className="min-w-[360px] max-w-[360px] p-2  shadow-sm rounded-lg">
        <p className="text-center font-semibold mb-1">Log in</p>
           <p className="text-center text-sm text-slate-500 font-medium mb-4">please login down below</p>
           <Cinput icon='fas fa-envelope' placeholder='Email' type='email'/>
        <Cinput icon='fas fa-lock' placeholder='Password' type='password'/>
        <p className="text-xs text-blue-600 text-right ">Forgot password?</p>
    </div>
  )
}

export default Login