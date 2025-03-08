import React from 'react'
import Navtab from './Navtab'

const Nav = () => {
  return (
    <div className=' bottom-0 w-full   left-0 bg-white'>
        <div className="flex justify-between px-4 pb-4 text-[#979393]">
            <Navtab title='Home' icon='fa-solid fa-house' />
            <Navtab title='Wishlist' icon=' fa-light fa-heart' />
            <Navtab title='Transaction' icon=' fa-light fa-file-lines' />
            <Navtab title='Profile' icon=' fa-light fa-user' />
        </div>
    </div>
  )
}

export default Nav