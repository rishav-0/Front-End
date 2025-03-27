import React, { useState } from 'react'
import { Banner } from '../components/Banner'
import Bar from '../components/Bar'
import Card from '../components/Card'

const SectionOne = (props) => {
    

  return (
    <div>
      {/* <Banner title="Refresh your space" desc="Shop the Home store" btnTitle="Learn more" /> */}
      <Bar title="Related to items you've viewed" btn='View all'/>
      {/* Product List */}
      <div className="flex gap-4 overflow-x-auto p-5 no-scrollbar mb-5">
        {props.loading && <p>Loading products...</p>}
        {props.error && <p className="text-red-500">Error: {error}</p>}

        {props.products?.map((i) => (
          <Card item={i} key={i.id} />
        ))}
      </div>
    </div>
  )

}

export default SectionOne