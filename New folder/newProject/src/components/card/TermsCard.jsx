import React from 'react'
import Button from '../button/Button'
import ButtonTwo from '../button/ButtonTwo'
import CheckBox from '../checkbox/CheckBox'

const TermsCard = (props) => {
    const {month,desc} = props
  return (
    <div className='w-[260px] overflow-hidden rounded-xl mb-3 bg-white'>
        <div className="relative">
            <div className="absolute right-0 p-4 top-0">
                <div className="bg-black rounded-xl flex items-center cursor-pointer justify-center p-1 h-[34px] w-[34px] opacity-25">
                    <i className="fas fa-magnifying-glass text-slate-100 "></i>
                </div>
            </div>
            <img className='' src="https://miro.medium.com/v2/resize:fit:1400/0*uQo-YVFfoMp9Eai9" alt="" />
            <div className="absolute bottom-0 p-4">
                <p className="text-slate-300">Terms of Service</p>
                <p className="text-slate-300 text-xs">{month}</p>
            </div>
        </div>
        <div className="p-3">
            <p className="text-xs text-slate-400 mb-2">{desc}</p>
            <CheckBox title='I am at least 13 year old' />
            <CheckBox title='I agree Stack Terms of Services' />
            <div className="flex gap-2">
                <Button title='Get started now' className='w-3/4' />
                <ButtonTwo title='Cancel' className='border border-slate-300' />
            </div>
        </div>
    </div>
  )
}

export default TermsCard