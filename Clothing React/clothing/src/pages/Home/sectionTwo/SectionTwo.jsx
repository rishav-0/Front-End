import React from 'react'
import SimpleBtn from '../../../components/Buttons/SimpleBtn'
import CardTwo from '../../../components/card/CardTwo'


const SectionTwo = (props) => {
  return (
    <div className="">
        <div className='grid grid-cols-2 mb-5'>
            <div className="">
                <SimpleBtn title='See more product' className='border-slate-400 mb-3'/>
                <p className="text-2xl font-semibold">Top Selling Product</p>
                <p className="text-2xl font-semibold">of the year collection</p>
            </div>
            <div className="">
                <p className="text-sm text-slate-400 line-clamp-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti eum animi quis repellat officia nostrum unde dolorum. Culpa, perferendis odio.</p>
                <SimpleBtn title='Shop Now' className='border-slate-400 mb-3'/>
            </div>
        </div>
        <div className="overflow-auto no-scrollbar flex items-baseline gap-4 mb-5">
          <CardTwo img='https://www.shutterstock.com/image-photo/beautiful-smiling-woman-long-wavy-600nw-2381985577.jpg' />
          <CardTwo  img='https://img.freepik.com/premium-photo/male-models-pose-great-photoshoot-high-fashion-magazine-cover_563241-4328.jpg'/>
          <CardTwo img='https://i.pinimg.com/736x/22/c2/61/22c261e52a0fc27b1f5fac19de2ec73f.jpg'/>
          <CardTwo />
        </div>
    </div>
    
  )
}
0
export default SectionTwo