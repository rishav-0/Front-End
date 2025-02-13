import React, { useState } from 'react'
import ContinueWith from '../../components/ContinueWith'
import Button from '../../components/Button'
import Cinput from '../../components/Cinput'


const RegisterPage = () => {
  const [fullName,setFullName] = useState('') 
  const [email,setEmail] = useState('') 
  const [password,setPassword] = useState('') 
  const [userData,setUserData] = useState([])

  const handleSubmit = ()=>{
    setUserData(previous=>
    [...previous,{
      id:Date.now(),
      fullName,
      email,
      password,
    }])
  }

  const handleDelete = (id)=>{
    const updatedData = userData.filter(i=>i.id !== id)
    setUserData(updatedData)
  }

  console.log(userData)

  return (
    <div className='flex gap-2'>
        <div className="min-w-[360px] max-w-[360px] p-2  shadow-sm rounded-lg">
           <p className="text-center font-semibold mb-1">Registration</p>
           <p className="text-center text-sm text-slate-500 font-medium mb-4">please register down below</p>
           <Cinput icon='fas fa-user' name='fullName' value={fullName} onChange={(e)=>setFullName(e.target.value)} placeholder='Full name' type='text'/>
          <Cinput icon='fas fa-envelope' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type='email'/>
          <Cinput icon='fas fa-lock' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type='password'/>
                <Button onClick={handleSubmit} name='Register'></Button>
                <ContinueWith/>
           <p className='my-2 text-center' onClick={()=>setPage('login')}>Already have an account? Log in</p>
       </div>
       {userData.map(i=>{
        return (
          <div key={i.id} className="">
            <h1>{i.fullName}</h1>
            <button className='btn btn-danger' onClick={()=>handleDelete(i.id)}>Delete</button>
          </div>
        )
       })}
       
    </div>
  )
}

export default RegisterPage