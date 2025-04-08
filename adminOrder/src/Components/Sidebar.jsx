import React, { useState } from 'react'
import { tabs } from '../utils'
import BlackButton from './BlackButton'

function Sidebar() {

    const [tab,setTab] = useState(tabs[0])

  return (
    <div className='border-r border-black w-[200px]  h-screen'>
        <div className="flex items-center p-1 border-b border-black ">
            <img className='w-10' src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-modern-head-monkey-logo-vector-png-image_4161488.jpg" alt="" />
            <div className="">
                <p className="text-sm font-semibold">Mailclamp</p>
                <p className="text-sm ">300 credit left</p>
            </div>
        </div>
        <div className="p-4">
            {
                tabs.map(i=><BlackButton onClick={()=>setTab(i)} selected={i == tab} key={i} text={i} />)
            }
            
        </div>
    </div>

  )
}

export default Sidebar