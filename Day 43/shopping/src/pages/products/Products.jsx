import React from 'react'
import Button from '../../components/Button'

const Products = () => {
  return (
    <div className='p-4'>
      <Button disabled={false} handelClick={()=>console.log('rishav')} title='Button'/>
      <Button disabled={false} handelClick={()=>console.warn('sushil')} title='Click me'/>
      <Button disabled={true} handelClick={()=>console.warn('sushil')} title='Submit' className='border-2 w-full border-black bg-pink-400'/>
    </div>
  )
}

export default Products