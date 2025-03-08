import React from 'react'

const Tell = (props) => {
    
  return (
    <div className="p-4 flex gap-2 bg-[#282828] rounded-2xl mb-4">
                <img className='h-8 w-8 border border-black' src="https://www.themarketingnutz.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg" alt="" />
                <input className='w-full rounded-xl p-1 outline-none bg-[#1a1a1a] text-slate-400 placeholder:font-light' type="text" placeholder='Tell your friends about your thoughts...'/>
            </div>
  )
}

export default Tell