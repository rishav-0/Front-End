import React, { useState } from 'react'
import { orderStatus } from '../../utils'
import List from './List'
import Search from './Search'
import ItemPerPage from './ItemPerPage'

const OrderStatus = () => {

  const [tab, setTab] = useState('All')
  const [search , setSearch] = useState('')
  const [item, setItemCount] = useState(10)

  return (
    <div className="">
      <div className="flex gap-2 mb-3 border-b border-slate-300 ">
        {
          orderStatus.map(i => {
            return (
              <p className={`text-slate-500  text-xs cursor-pointer ${tab === i && 'border-b-2 border-[#f85911] pb-2 font-bold text-[#f85911]'}`} key={i} onClick={() => {setTab(i);setSearch('');setItemCount(10)}}>{i}</p>
            )
          })
        }
      </div>
   
      <Search searchValue={search} changeValue={setSearch}/>

      <div className="p-2 pb-0 bg-white rounded-lg max-h-[350px] overflow-auto no-scrollbar ">
        <List status={tab} search={search} item={item}/>
        <ItemPerPage  itemVelue={item} setItemCount={setItemCount}/>
      </div>
    </div>

  )
}

export default OrderStatus