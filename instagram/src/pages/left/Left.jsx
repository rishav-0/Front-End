import React from 'react'
import ProfileCard from './ProfileCard'
import Nav from './Nav'

const Left = () => {
  return (
    <div className='p-4'>
      <ProfileCard />
      <Nav />
    </div>
  )
}

export default Left