import React, { useEffect } from 'react'
import loginimg from '../../images/loginimg.png'
import Input from '../../Components/Input'
import google from '../../images/google.png'
import { SignUp } from '@clerk/clerk-react'
import { useAuth, useClerk } from '@clerk/clerk-react'
import { useNavigate } from 'react-router'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Signup = () => {
  const navigate  = useNavigate()
  
  const clerk = useClerk()
   const { isSignedIn } = useAuth()

   useEffect(()=>{
    if(isSignedIn){
      navigate('/')
    }
   },[isSignedIn])

   console.log(isSignedIn,'signup')
  return (
    <div className='flex justify-center items-center'>
        
        <SignUp />
        
    </div>
  )
}

export default Signup