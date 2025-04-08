
import React, { useState } from 'react'
import BlackButton from '../Components/BlackButton'
import { tabs } from '../utils'
import Sidebar from '../Components/Sidebar'
import ManageManu from './ManageManu'

function AdminPage() {

    

  return (
    <div className='flex '>
        {/* <Sidebar /> */}
        <ManageManu />
    </div>
    
  )
}

export default AdminPage