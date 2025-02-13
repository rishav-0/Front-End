import React from 'react'
import store from '../images/store.png'
import { footer } from '../utils'

const Footer = () => {
    return (
        <div className='bg-[#141b24] p-5'>
            <div className="grid grid-cols-5 border-b pb-5 mb-2 border-slate-700">
                <img className='invert h-20' src={footer.logo} alt="" />
                <div className="">
                    <p className="text-xs mb-3 text-white">Get toknow us</p>
                    {footer?.getToKnowUs?.map((i, index) => (
                        <p key={index} className="text-xs mb-1 cursor-pointer text-slate-400">
                            {i}
                        </p>
                    ))}
                    <img className='h-20' src={store} alt="" />
                </div>
                <div className="">
                    <p className="text-xs mb-3 text-white">Make money with us</p>
                    {footer?.makeMoneyWithUs?.map((i, index) => (
                        <p key={index} className="text-xs mb-1 cursor-pointer text-slate-400">
                            {i}
                        </p>
                    ))}
                   
                </div>
                <div className="">
                    <p className="text-xs mb-3 text-white">Get toknow us</p>
                    {footer?.amazonPaymentMethods?.map((i, index) => (
                        <p key={index} className="text-xs mb-1 cursor-pointer text-slate-400">
                            {i}
                        </p>
                    ))}
                   
                </div>
                <div className="">
                    <p className="text-xs mb-3 text-white">Get toknow us</p>
                    {footer?.letUsHelpYou?.map((i, index) => (
                        <p key={index} className="text-xs mb-1 cursor-pointer text-slate-400">
                            {i}
                        </p>
                    ))}
                   
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-3">
                     <p className="text-xs text-white">{footer.copyright}</p>
                    {footer?.footerLinks?.map((i, index) => (
                        <p key={index} className="text-xs cursor-pointer text-slate-400">
                            {i}
                        </p>
                    ))}
                   
                    
                </div>
                <select name="" id="" className='bg-transparent text-slate-400 text-xs focus-visible:outline-none' >
                     {footer?.country?.map((i, index) => (
                        <option key={index} className="text-xs cursor-pointer text-slate-400">
                            {i}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Footer