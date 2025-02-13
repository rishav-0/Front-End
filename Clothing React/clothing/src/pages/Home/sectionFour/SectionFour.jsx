import React from 'react'
import SimpleBtn from '../../../components/Buttons/SimpleBtn'
import CardProduct from '../../../components/card/CardProduct'
import { products } from '../../../utils'

const SectionFour = () => {
  return (
    <div className='mb-5'>
        <p className="text-2xl font font-semibold mb-3">Our All Products</p>
        <p className="text-xs text-slate-400 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eos?</p>
        <div className="flex gap-3 mb-3">
            <SimpleBtn title='Shoes' className='border-slate-400 text-slate-400' />
            <SimpleBtn title='Clothing' className='border-slate-400 text-slate-400' />
            <SimpleBtn title='Accessoriex' className='border-slate-400 text-slate-400' />
            <SimpleBtn title='Jewellery' className='border-slate-400 text-slate-400' />
        </div>
        <div className="grid grid-cols-3  gap-4 mb-8">
            {
                products.map(i=>{
                    return (
                        <CardProduct image={i.images[0]} title={i.title} price={i.price} key={i.id}/>
                    )
                })
            }
            
            
        </div>
        <p className="text-2xl text-center mb-5">Our happy clients</p>
    </div>
  )
}

export default SectionFour