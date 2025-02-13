import React from 'react'
import { useState } from 'react'
import { banking, other, services } from '../../utils'
import Tabs from './Tabs'

const Sidebar = (props) => {

  const [currenttab,setTab] = useState('Dashboard')

  return (
    <div className={`${!props.sidebar ? 'w-[54px]':'w-[240px]'} p-2  bg-white h-screen`} id='sidebar'>
        <div className="flex gap-3 border-b mb-3 border-slate-300 pb-3">
            <img className="w-8 h-8 rounded-sm border" src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png" alt="Default avatar" />
            <div className={`${props.sidebar == false ? 'hidden':''}`}>
                <p className="text-sm font-semibold">MIchal Kowalski</p>
                <p className="text-xs text-slate-400 whitespace-nowrap">Sesion ends in 9 mins 5s</p>
            </div>
            <div className={`${props.sidebar == false ? 'hidden':''}`}>
                <div className="w-8 h-8 rounded-sm bg-green-700 cursor-pointer flex justify-center items-center ">
                <i class="fa-solid fa-power-off text-white"></i>
            </div>
            </div>
            
        </div>
        <p className={`text-xs text-slate-400 mb-3  pb-3 ${props.sidebar == false ? 'hidden':''}`}>Banking</p>
        {
            banking.map(i=>{
                return (
                    <Tabs sidebar={props.sidebar} key={i.tab} tab={i.tab} icon={i.icon} currentTab={currenttab} onClick={()=>setTab(i.tab)}/>
                )
            })
        }
        <p className={`text-xs text-slate-400 mb-3 border-t pt-3  ${props.sidebar == false ? 'hidden':''}`}>Services</p>
        {
            services.map(i=>{
                return (
                    <Tabs sidebar={props.sidebar} key={i.tab} tab={i.tab} icon={i.icon} currentTab={currenttab} onClick={()=>setTab(i.tab)}/>
                )
            })
        }
        <p className={`text-xs text-slate-400 mb-3 border-t pt-3 ${props.sidebar == false ? 'hidden':''}`}>Other</p>
        {
            other.map(i=>{
                return (
                    <Tabs sidebar={props.sidebar} key={i.tab} tab={i.tab} icon={i.icon} currentTab={currenttab} onClick={()=>setTab(i.tab)}/>
                )
            })
        }
        
    </div>
  )
}

export default Sidebar