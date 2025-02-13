import React from 'react'
import Bar from '../components/Bar'
import Ribbon from '../components/Ribbon'
import Card from '../components/Card'

const SectionThree = (props) => {
  return (
    <div>
        <Bar title="Inspired by your shopping trends" btn='View all'/>
     <Ribbon />
     <div className="grid sm:grid-cols-2 md:grid-cols-4 h-[600px] gap-4 overflow-y-auto p-5 no-scrollbar mb-5">
        {props.loading && <p>Loading products...</p>}
        {props.error && <p className="text-red-500">Error: {error}</p>}

        {props.products?.map((i) => (
           <Card item={i} key={i.id} />
        ))}
      </div>
    </div>
  )
}

export default SectionThree