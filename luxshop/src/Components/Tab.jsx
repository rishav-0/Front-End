import React from 'react'

const Tab = (props) => {

  return (
   <div className="border-2 cursor-pointer w-10 h-10 flex items-center justify-center border-slate-500 p-1 rounded-lg">
        <img src={props.logo} alt="" />
    </div>
  )
}

export default Tab