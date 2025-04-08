import React from 'react'
import Nav from '../Components/Nav'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'

function Home() {
  return (
    <div className='scroll-container snap-y snap-mandatory overflow-y-auto'>
        <Nav />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
    </div>
  )
}

export default Home