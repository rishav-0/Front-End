import React from 'react'
import ProfileCard from './ProfileCard'
import Nav from './Nav'
import Download from './Download'

const Left = () => {
  return (
    <div className='p-4 flex flex-col justify-between'>
      <div className="">
        <ProfileCard />
        <Nav />
      </div>
      <Download />
    </div>
  )
}

export default Left