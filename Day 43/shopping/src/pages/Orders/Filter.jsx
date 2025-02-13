import React from 'react'

const Filter = () => {
  return (
    <div className='my-3 flex justify-between'>
        <p className="text-lg font-semibold">Orders</p>
        <div className="flex gap-2">
            <p className="bg-white px-3 py-1 text-sm rounded-lg shodow-lg">Export</p>
            <p className="bg-white px-3 py-1 text-sm rounded-lg shodow-lg">More actions</p>
            <p className="bg-[#f85911] text-white px-3 py-1 text-sm rounded-lg shodow-lg">Create order</p>
        </div>

    </div>
  )
}

export default Filter