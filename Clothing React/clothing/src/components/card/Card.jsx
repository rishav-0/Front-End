import React from 'react'
import SimpleBtn from '../Buttons/SimpleBtn'

const Card = (props) => {

  return (
    <div className={`w-[300px] h-[260px] hover:w-[360px]  rounded-xl overflow-hidden relative cursor-pointer animation  bg-cover bg-no-repeat bg-center ${props.className}`} style={{backgroundImage:'url(https://media.gettyimages.com/id/1294339577/photo/young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=v41m_jNzYXQtxrr8lZ9dE8hH3CGWh6HqpieWkdaMAAM=)'}}>
        <div className="absolute top-0 w-full left-0 p-2">
            <div className="flex justify-between">
                <div className="bg-slate-300 w-8 h-8 rounded-full flex items-center justify-center">
                    <i className="fa-regular fa-heart "></i>
                </div>
                    <SimpleBtn title='Buy now' className='border-black'/>
            </div>
        </div>
    </div>
  )
}

export default Card