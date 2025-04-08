import React from 'react'
import ManufacturerTable from '../Components/Table'
import { Button } from '@material-tailwind/react'

function ManageManu() {
  return (
    <div className='p-10'>
        <div className="flex justify-between items-center">
            <p className="text-xl font-semibold pb-10">Manage Manufacturer</p>
            <Button className='py-4 capitalize text-sm'>+ Create Manufacture</Button>
        </div>
        <ManufacturerTable />

    </div>
  )
}

export default ManageManu