import React, { useState } from 'react'

const ItemPerPage = (props) => {
   
  return (
    <div className='sticky bottom-0 p-2 gap-2 bg-white flex items-center'>
        <p className="text-sm">Item per page</p>
        <select name="" value={props.itemVelue} onChange={(e)=>props.setItemCount(e.target.value)} id="" className='p-1 text-sm border rounded-lg'>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
        </select>
    </div>
  )
}

export default ItemPerPage