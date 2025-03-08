import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Product from '../Components/Product'
import Location from '../Components/Location'
import Category from '../Components/Category'

import furniture from '../images/furniture.png'
import fashion from '../images/fashion.png'
import beauty from '../images/beauty.png'
import electronic from '../images/electronic.png'
import stationary from '../images/stationary.png'
import health from '../images/health.png'
import food from '../images/food.png'
import watch from '../images/watch.png'
import banner from '../images/banner.png'
import ipad from '../images/ipad.png'
import macbook from '../images/macbook.png'
import Nav from '../Components/Nav'

import {category , flashSale} from '../utils/index'


const Home = () => {
  return (
    <div className="w-[412px] h-[917px] relative p-7 border">
        <div className="flex flex-col justify-between">
          <Header />
          <div className=" h-[742px] overflow-auto no-scrollbar ">
            <Search />
            <Location address='JI.Rose No. 123 Block A, Cipete Sub-District,Ci' />
            
            <div className="grid grid-cols-4 gap-9  justify-between mb-9">
              {
                category.map(i=>{
                  return (
                    <Category logo={i.img} title={i.cname} />
                  )
                }) 
              }
            </div>
            <img className='w-full rounded-lg mb-9' src={banner} alt="" />
            <div className="flex items-baseline justify-between mb-6">
              <div className="flex items-baseline gap-2 justify-between">
                <p className="text-xl font-semibold">Flash Sale</p>
                <p className="text-xs">Ends in</p>
                <p className="text-sm rounded-full bg-red-500 text-white font-light px-2">12:56:32</p>
              </div>
              <p className="text-xs text-orange-800 cursor-pointer">See all</p>
            </div>
            <div className="grid gap-3 grid-cols-2">
             { flashSale.map(i=>{
                return (
                  <Product img={i.img} off='6' title={i.cname} />
                )
              })}
              <Product img={ipad} off='6' title='Apple iPad Air Wi-Fi' />
              <Product img={macbook} off='6' title='Apple iPad Air Wi-Fi' />

            </div>
          </div>

        </div>

        <Nav />
      </div>
  )
}

export default Home