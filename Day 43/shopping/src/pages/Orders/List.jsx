import React from 'react'
import { macbookData } from '../../utils/index.js'

const List = (props) => {

    let searchedValue = props.search
    let item = props.item
    const tableData = props.status === 'All' ? macbookData.filter
    (i=>i.model.toLowerCase().includes(searchedValue.toLowerCase())).slice(0,item) :macbookData.filter(i=>i.payment_status === props.status).filter
    (i=>i.model.toLowerCase().includes(searchedValue.toLowerCase())).slice(0,item) 
    

  return (

    <table className='w-full mb-2 p-2 text-center ' cellPadding='4'>
        <thead className=''>
            <tr className='bg-slate-100 rounded-lg text-xs font-semibold mb-2'>
                    <th className='truncate'>Order</th>
                    <th className='truncate'>Customer</th>
                    <th className='truncate'>Date</th>
                    <th className='truncate'>Total</th>
                    <th className='truncate'>Payment Status</th>
                    <th className='truncate'>Delivery Method</th>
                </tr>
        </thead>
        
        <tbody>
            {
            tableData?.map((i,index)=>{

                return (
                    <tr className='border-b ' key={i.model+index}>
                        <td className='flex gap-2 py-2 items-center'>
                            <div className="w-6 h-6 rounded-md border">
                                <img src={i.image_link} alt="" />
                            </div>
                            
                                <p className="text-xs font-semibold truncate">{i.model}</p>
                            
                        </td>
                        <td className='text-xs font-semibold truncate py-2'>
                            {i.customer_name}
                        </td>
                        <td className='text-xs truncate'>
                            {i.date}
                        </td>
                        <td className='text-xs truncate'>
                            $ {i.total_price}
                        </td>
                        <td className='text-xs truncate'>
                             {i.payment_status}
                        </td>
                        <td className='text-xs truncate'>
                             {i.delivery_method}
                        </td>
                        
                    </tr>
                )
            })
        }
        </tbody>
        
    </table>
  )
}

export default List