import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import { services } from '../utils'
import { Button } from '@material-tailwind/react'

function SectionThree() {
  return (
    <div className='snap-start h-screen py-10 container mx-auto lg:px-20 space-y-8 '>
        <p className="text-xs font-medium">Services</p>
        <p className="text-2xl font-semibold">Our Included <br /> Services</p>
        <div className="grid sm:grid-cols-2 gap-8 md:grid-cols-3">
            {
                services.map(i=>{
                    return (
                        <ServiceCard  icon={i.icon} heading={i.title} desc={i.description} />
                    )
                })
            }
             
        </div>
       <div className="flex justify-between items-center">
        <p className="text-xl font-bold nato">Take your business to new heights <br /> with Delta</p>
            <Button className='rounded-none  '>Discober More</Button>
       </div>
    </div>
  )
}

export default SectionThree