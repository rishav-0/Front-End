import React from 'react'
import SimpleBtn from '../../../components/Buttons/SimpleBtn'
import Avatar from '../../../components/avatar/Avatar'
import Card from '../../../components/card/Card'

const SectionOne = () => {
  return (
    <div className="">

    <div className='flex justify-between py-2 mb-6'>
        <div className="">
            <p className="text-5xl font-light">Access to high- Quality,</p>
            <p className="text-5xl font-light"><strong className='font-semibold'>Eco-Friendly</strong> products</p>
            <p className="text-5xl font-light flex items-center gap-2">and services <i className="fas fa-arrow-right-long font-light"></i><SimpleBtn title='Contact us'/></p>
        </div>
        
        <div className="flex flex-col justify-center">
            <Avatar imgOne='https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg'
                imgTwo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbspSuAlbAFC2RqZweFBTjOF4cWY9gizRbQKEzzLE0QdxIKrV5E-iZipiZxcdYyB7aTU&usqp=CAU'
                imgThree='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIh4Nokge-Nr94TMgcEjnC4KLgkwi2hequV-RvTaCZ1w10xYwlfJknU4yL5jUJ9YiQf2Y&usqp=CAU'
                icon='fas fa-plus'
            />
            <p className="text-lg">500+</p>
            <p className="text-slate-400 text-xs">Happy customers</p>

        </div>
    </div>
    <div className="overflow-auto no-scrollbar flex gap-4 mb-6">
        <Card/>
        <Card/>
        <Card/>
    </div>
    <div className="flex items-center gap-4 justify-between mb-3">
        <div className="bg-slate-400 w-full h-[2px]"><div className="bg-black w-1/3 h-full"></div></div>
        <SimpleBtn title='Featured Work' className='whitespace-nowrap border-slate-400'/>
        <SimpleBtn title={<SimpleBtn title={<i className="fas  fa-arrow-right"></i>} className='border-black'/>} className='whitespace-nowrap flex items-center justify-center h-[34px] rounded-full w-[34px] border-slate-400'/>
        
        
    </div>
    
   
    </div>
  )
}

export default SectionOne