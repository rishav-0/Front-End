import React from 'react'
import Btn from './Btn'

const Listing = (props) => {
    const {work,key,deleteTodo,handleEdit,loading} = props
  return (
    <div className="font-semibold flex items-center gap-3 mb-3">
        <i className="fas fa-circle text-xs"></i> 
         {work}
         <Btn title='Delete' onClick={deleteTodo}  cls='bg-red-400' />
         <Btn title='Edit' onClick={handleEdit} cls='bg-blue-400' />
    </div>
  )
}

export default Listing