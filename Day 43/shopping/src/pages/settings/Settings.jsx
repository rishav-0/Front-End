import React, { useState } from 'react'
import '../../utils/index.js'
import { settings } from '../../utils/index.js'
import Plans from './Plans.jsx'


const Settings = () => {
    const [selectedTab, setSelectedTab] = useState('General settings')

  return (
    <div className='p-3'>
        <p className="text-lg font-semibold ">Settings</p>
        <div className="flex gap-4 my-3 border-b">
            {
                settings.map(i=>{
                    return (
                        <p className={` text-xs cursor-pointer pb-2 ${selectedTab === i ? 'font-bold text-[#f65911] border-b-2 border-[#f65911]':'text-slate-500 '}`} key={i} onClick={()=>setSelectedTab(i)}>{i}</p>
                    )
                })
            }
        </div>
            {selectedTab ==="General settings" && <h1>helo</h1>}
            {selectedTab ==="Apps" && <h1>world</h1>}
            {selectedTab ==="Notifications" && <h1>Notifications</h1>}
            {selectedTab ==="Plan" &&  <Plans/> }
            {selectedTab ==="Security" && <h1>helo</h1>}
            
    </div>
  )
}

export default Settings