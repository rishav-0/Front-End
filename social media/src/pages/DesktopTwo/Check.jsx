import React from 'react'

const Check = (props) => {
  return (
    <div className="flex items-center text-white gap-2" >
                        <input type="checkbox" className='bg-transparent'/>
                        <p className="text-2xl">{props.title}</p>
                    </div>
  )
}

export default Check