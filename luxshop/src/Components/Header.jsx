import React from 'react'
import logo from '../images/logo.png'
import shopping from '../images/shopping.png'
import bell from '../images/bell.png'
import Tab from './Tab'

const Header = () => {
  return (
    <div className='flex itmes-center justify-between mb-4'>
        <div className="flex items-center gap-3">
            <img className='w-[35px] h-[35px]' src={logo} alt="" />
            <p className="text-xl">Luxeshop</p>
        </div>
        <div className="flex gap-3 items-center">
            <Tab logo={shopping}/>
            <Tab logo={bell}/>
        </div>
    </div>
  )
}

export default Header