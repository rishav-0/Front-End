import React from 'react'
import BanerTwo from '../components/BanerTwo'
import DiscountCard from '../components/DiscountCard'

const SectionTwo = (props) => {
  return (
    <div>
        <BanerTwo />
        <div className="grid grid-cols-3 gap-3 mb-5 p-5">
        <DiscountCard product={props?.products[6]} title='Fregrance & perfume' discount='10'/>
        <DiscountCard product={props?.products[10]} title='Furniture' discount='10'/>
        <DiscountCard product={props?.products[17]} title='Food and Drinks' discount='10'/>
      </div>
    </div>
  )
}

export default SectionTwo