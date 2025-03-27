import React, { useContext, useState } from 'react'
import { CarouselDefault } from './Benner'
import Heading from '../../Components/Heading'
import BigHeading from '../../Components/BigHeading'
import Product from '../../Components/Product'
import { Globalcontext } from '../../Globalcontext'
import Btn from '../../Components/Btn'
import CateCard from '../../Components/CateCard'
import FlashSale from '../../Features/home/FlashSale'

const Home = () => {
    const { flash, categories, best, products,flashLoading,flashError,cartLIst, getCart,handleAddUpdate} = useContext(Globalcontext)
    const [filter,setFilter] = useState(null)
    const [newData,setNewData] = useState([])
    const [view,setView] = useState(false)

    const handleFilter = (id)=>{
        setFilter(id)
        console.log(id,'id')
         const temp = products.filter(i=>i.category.id === filter)
         setNewData(temp)
        console.log(newData,'filter')
    }

    return (
        <div>
            <CarouselDefault />
            <FlashSale />
            


            <hr className='mb-[70px]' />

            <div className="px-10 lg:px-[135px]">
                <Heading title="Categories" />
                <BigHeading title='Browse By Categories' />
            </div>
           
            
            <hr className='mb-[70px]' />

            <div>
                <div className="overflow-x-auto flex gap-6 px-10 lg:px-[135px] no-scrollbar mb-12">
                {
                    categories.map(i => {
                        return (
                            <CateCard title={i?.name} img={i?.image} onClick={()=>handleFilter(i?.id)}/>
                        )
                    })
                }
            </div>

             <div className="overflow-x-auto flex gap-6 px-10 lg:px-[135px] no-scrollbar mb-12">
                {
                    newData?.map(i => {
                        return (
                            <Product title={i?.title} image={i?.images[0]} price={i?.price} id={i.id}/>
                        )
                    })
                }
            </div>
            </div>

            

            <hr className='mb-[70px]' />

            <div>
                <div className="px-10 lg:px-[135px]">
                <Heading title="This month's" />
                <BigHeading title='Best Selling Products' btn='View all' />
            </div>

            <div className="overflow-x-auto flex gap-6 px-10 lg:px-[135px]  no-scrollbar mb-12">
                {
                    best.map(i => {
                        return (
                            <Product title={i?.title} image={i?.images[0]} price={i?.price} id={i.id}/>
                        )
                    })
                }
            </div>
            </div>
            


            <hr className='mb-[70px]' />
                
            <div>
            <div className="px-10 lg:px-[135px]">
                <Heading title="Our Products" />
                <BigHeading title='Explore our Products' />
            </div>

            <div className="overflow-y-auto flex h-[400px] justify-center w-full px-10 lg:px-[135px] no-scrollbar mb-12">
                <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 3xl:grid-cols-5 gap-6 w-full">
                    {
                        products.map(i => {
                            return (
                                <Product title={i?.title} image={i?.images[0]} price={i?.price} id={i.id}/>
                            )
                        })
                    }
                </div>
            </div>    
            </div> 

            
            
           
        </div>
    )
}

export default Home