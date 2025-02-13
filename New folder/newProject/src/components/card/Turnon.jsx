import React from 'react'
import Button from '../button/Button'
import ButtonTwo from '../button/ButtonTwo'

const Turnon = (props) => {
  return (
    <div className='mb-3 rounded-xl bg-white p-3'>
        <div className="flex gap-3 items-center mb-3">
            <img className='w-10 bg-amber-100 rounded-full' src="https://png.pngtree.com/png-clipart/20201209/original/pngtree-sun-png-clipart-colored-png-image_5656301.png" alt="" />
            <p className="text-xs text-slate-400">{props.title}</p>
        </div>
        <div className="flex justify-end">
            <Button title='Turn on' className='text-xl' />
            <ButtonTwo title='Cancel' />
        </div>
    </div>
  )
}

export default Turnon