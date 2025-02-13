import React from 'react'

const Avatar = (props) => {
    const {imgOne,imgTwo,imgThree,icon} = props
  return (
        <div className="flex -space-x-4 rtl:space-x-reverse">
            <img className="w-10 h-10  border border-slate-300 rounded-full " src={imgOne} alt=""/>
            <img className="w-10 h-10  border border-slate-300 rounded-full " src={imgTwo} alt=""/>
            <img className="w-10 h-10  border border-slate-300 rounded-full " src={imgThree} alt=""/>
            <a className="flex items-center justify-center w-10 h-10 text-xs  text-slate-400 bg-white border border-slate-300 rounded-full hover:bg-gray-600" href="#">
                <i className={`text-lg ${icon}`}></i>
            </a>
        </div>
    
  )
}

export default Avatar