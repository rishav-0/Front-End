import React from 'react'

const Search = (props) => {
    
  return (
    <div className="flex items-center rounded-2xl p-2 bg-[#282828] justify-between mb-4">
                        <div className="flex gap-2 items-center">
                            <i class="fa-light fa-magnifying-glass text-slate-400"></i>
                            <input className=' bg-transparent w-full' placeholder={props.title} type="text" />
                        </div>
                        <i class="fa-light fa-sliders-simple text-slate-400"></i>
                    </div>
  )
}

export default Search