import React from 'react'
import BtnBlac from './BtnBlac'
import {  useLocation } from 'react-router'
import BtnWite from './BtnWite'

const Info = (props) => {

    const {info,handleDelete,handleEdit,saveEdit} = props

    // console.log(info,'infopage')

    return (
             <div className='flex items-center justify-center' key={info.id}>
                <div>
                    <p className="mb-5">Your account has been created</p>
                    <p className=" font-semibold">Name</p>
                    <p className="mb-3 text-xl">{info?.name}</p>
                    <p className=" font-semibold">Email</p>
                    <p className="mb-3 text-xl">{info?.email}</p>

                    <div className="flex gap-3">
                       <BtnBlac onClick={handleDelete} type='button' title='Delete' />
                        <BtnBlac  title='Edit' onClick={handleEdit}/> 
                        {/* <BtnWite  title='Save' onClick={saveEdit} /> */}
                    </div>
                    
                </div>
            </div>
             
    )
}

export default Info