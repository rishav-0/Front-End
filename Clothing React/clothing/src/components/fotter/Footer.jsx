import React from 'react'
import { footer } from '../../utils'

const Footer = () => {
  return (
    <div className='p-4 bg-[#191a2e]  bottom-0 text-white'>
        <p className="text-xl mb-3" key={footer.myName}>{footer.myName}</p>
        <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="flex justify-between gap-2">
                <div className="">
                    <p className="text-xs mb-3 text-slate-400" key={footer.myName}>{footer.line}</p>
                    <p className="text-xs text-slate-400">{footer.address.line1}</p>
                    <p className="text-xs text-slate-400 mb-3">{footer.address.line2}</p>
                    <p className="text-xs text-slate-400">{footer.address.email}</p>
                </div>
                <div className="">
                  <p className="text-xs whitespace-nowrap mb-3">Customer Services</p>
                  {
                    footer.customerServices.map(i=>{
                      return (
                        <p className="text-xs mb-1 text-slate-400 cursor-pointer">{i}</p>
                      )
                    })
                  }
                  
                </div>
            </div>
            <div className="flex justify-between gap-2">
             <div className="">
                  <p className="text-xs whitespace-nowrap mb-3">Products</p>
                  {
                    footer.products.map(i=>{
                      return (
                        <p className="text-xs mb-1 text-slate-400 cursor-pointer">{i}</p>
                      )
                    })
                  }
                  
              </div>
             <div className="">
                  <p className="text-xs whitespace-nowrap mb-3">Company info</p>
                  {
                    footer.companyInfo.map(i=>{
                      return (
                        <p className="text-xs mb-1 text-slate-400 cursor-pointer">{i}</p>
                      )
                    })
                  }
                  
              </div>
             <div className="">
                  <p className="text-xs whitespace-nowrap mb-3">Follow us</p>
                  {
                    footer.followUs.map(i=>{
                      return (
                        <p className="text-xs mb-1 text-slate-400 cursor-pointer"><i className={i.logo}></i> {i.company}</p>
                      )
                    })
                  }
                  
              </div>
            </div>
        </div>
        <div className="w-full h-[2px] bg-slate-600 mb-3"></div>
        <div className="flex justify-between">
          <p className="text-xs text-slate-400">{footer.copyright}</p>
          <div className="flex gap-3">
            {
              footer.footerLinks.map(i=>{
                return (
                  <p className="text-xs text-slate-400">{i}</p>
                )
              })
            }
            
          </div>
          <p className="text-xs text-slate-400">{footer.language}</p>

        </div>
    </div>
  )
}

export default Footer