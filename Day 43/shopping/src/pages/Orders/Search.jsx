import React, { useState } from 'react'

const Search = (props) => {
    

  return (
    <div className='flex justify-between mb-3 items-center'>
        <div className="bg-white p-1 text-slate-500 border text-xs rounded-lg overflow-hidden shadow-sm">
            <i className="fas fa-magnifying-glass me-1"></i>
            <input type="search" onChange={(e)=>props.changeValue(e.target.value)} value={props.searchValue} className='focus-visible:outline-none' placeholder='Search order...'/>
        </div>
        <div className="flex gap-2">
            <div className="px-2 bg-white flex gap-2 items-center rounded-lg text-slate-400">
                <i className="fas fa-bars cursor-pointer"></i>
                <i className="fas fa-boxes-stacked cursor-pointer"></i>  
            </div>
            <p className="px-2 py-1 cursor-pointer text-xs font-semibold rounded-lg bg-white">Filter</p>
        </div>
    </div>
  )
}

export default Search