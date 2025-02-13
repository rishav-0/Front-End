import React from 'react'
import PrimaryBtn from './PrimaryBtn'

const Search = () => {
  return (
    <div className='flex sm:w-[60%] w-full  mb-2'>
        <input className='w-full focus-visible:outline-none p-1 text-black placeholder:text-sm' placeholder='Search' type="search" />
        <PrimaryBtn title={<i className="fas fa-magnifying-glass"></i>} />
    </div>
  )
}

export default Search