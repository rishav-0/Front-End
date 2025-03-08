import React from 'react'
import Button from '../../Components/Button'

const Suggestion = (props) => {
    const {photo,usrName,caption} = props
  return (
    <div className='flex items-center justify-between mb-2'>
        <div className="flex items-center gap-2">
            <img className='h-6 w-6 rounded-full' src={photo} alt="" />
            <div className="">
                <p className="text-xs font-bold">{usrName}</p>
                <p className="text-xs font-bold">{caption}</p>
            </div>
        </div>
        <Button title='Follow'  />
    </div>
  )
}

export default Suggestion