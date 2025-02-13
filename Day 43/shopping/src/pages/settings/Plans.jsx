import React, { useState } from 'react'
import { plans } from '../../utils'

const Plans = () => {

  const [plan, setPlan] = useState('Current Plan')

  console.log(plan)

  return (
    <div className="flex gap-3">
      {
        plans?.map(i=>{
          return (
          <div className={`bg-white rounded-md p-3 w-[300px] shadow-sm ${i.id === plan.id && 'border-2 border-t-[20px] border-[#f65911]'}`} key={i?.id}>
            <p className="font-semibold">{i?.planName}</p>
            <p className="text-sm">{i?.summary}</p>
            <p className="text-2xl font-semibold text-center">${i?.price}</p>
            <p className="text-sm text-center mb-3">/month</p>
            <p className={`text-sm text-center my-3 cursor-pointer p-2 rounded-lg ${i.plan === 'Current Plan' ?'bg-slate-100 text-slate-400':`${i.id === plan.id ? 'bg-[#f65911] text-white ':'bg-white border border-[#f65911] text-[#f65911]'}`}`} onClick={()=>setPlan(i)}>{i?.plan}</p>

            <p className="text-sm font-semibold">Free Features</p>
          {i?.features.map((feature, index) => (
            <p className="text-sm text-slate-500 mb-1" key={index}>
              <i className="fas fa-check text-black"></i> {feature}
            </p>
          ))}
          
        </div>
          )
        })
       
      }

    </div>

  )
}

export default Plans