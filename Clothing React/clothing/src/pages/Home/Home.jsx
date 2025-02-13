import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import SectionOne from './sectionOne/SectionOne'
import SectionTwo from './sectionTwo/SectionTwo'
import SectionThree from './sectionThree/SectionThree'
import SectionFour from './sectionFour/SectionFour'

const Home = () => {
  return (
    <div className='p-6 '>
        <NavBar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour />
    </div>
  )
}

export default Home