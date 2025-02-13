import React from 'react'
import '../../utils/index.js'
import { orders } from '../../utils/index.js'
import Banner from './Banner.jsx'
import OrderStatus from './OrderStatus.jsx'
import List from './List.jsx'
import Filter from './Filter.jsx'

const Orders = () => {
  return (
    <div className="p-4">
        <Banner caption='Get the very best apps for your store' summary='update to the new features' button='Find Apps' share='fas fa-share-from-square' image='https://www.svgrepo.com/show/217771/shopping-logo.svg'/>
        <Filter/>
        <div className='flex gap-2 items-center bg-white p-2 justify-between rounded-lg shadow-lg my-3'>
            <div className="flex gap-2">
                <i className="fas fa-calendar-days"></i>
                <p className="text-xs">Today</p>
            </div>
            {
                orders.map(i=>{
                    return (
                        <div className="" key={i.title}>
                            <p className="text-xs whitespace-nowrap">{i.title}</p>
                            <p className="text-xs font-bold" onClick={()=>console.log(i)}>{i.value}</p>
                        </div>
                    )
                })
            }
        </div>
        <OrderStatus/>
        
        
    </div>
    
  )
}

export default Orders