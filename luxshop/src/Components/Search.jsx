import React from 'react'

const Search = () => {
  return (
    <div className='flex p-2 gap-2 rounded-lg border  items-center mb-5'>
        <i class="fa-light text-3xl fa-magnifying-glass text-gray-400"></i>
        <input className='outline-none text-xs' type="text" placeholder='Find your needed'/>
    </div>
  )
}

export default Search