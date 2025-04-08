import React, { useContext, useState } from 'react'
import Heading from '../../Components/Heading'
import BigHeading from '../../Components/BigHeading'
import { Globalcontext } from '../../Globalcontext'
import Btn from '../../Components/Btn'
import Product from '../../Components/Product'

const FlashSale = () => {
    const {flash,flashLoading,flashError,cartLIst, getCart,handleAddUpdate,products} = useContext(Globalcontext)
    const [view,setView] = useState(false)

  return (
    <div>
                <div className="px-10 lg:px-[135px]">
                <Heading title="Today's" />
                <BigHeading title='Flash Sales' />
            </div>

            <div className="overflow-x-auto flex gap-6 px-10 lg:px-[135px] no-scrollbar mb-12">
                {
                    !flashLoading &&
                    flash?.map(i => {
                        const isinCart = cartLIst?.some(j=>j.id == i.id)
                        const sItem = cartLIst?.find(j=>j.id == i.id)

                        return (
                            <Product title={i?.title} image={i?.images?.[0]} price={i?.price} id={i?.id} isinCart={isinCart} key={i.id} cartid={sItem?._id} addToCart={()=>handleAddUpdate(isinCart,i,sItem)}/>
                        )
                    })
                }
                {
                    flashLoading && 'Loading'
                }
                {flashError && flashError}
            </div>
            <div className="flex justify-center mb-[70px]">
                <Btn title={view?'Hide':'View all products'} onClick={()=>setView(!view)}/>
            </div>
            
            {
                view && <div className="overflow-y-auto flex h-[400px] justify-center w-full px-10 lg:px-[135px] no-scrollbar mb-12">
                <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 3xl:grid-cols-5 gap-6 w-full">
                    {
                        products?.map(i => {
                        const isinCart = cartLIst?.some(j=>j.id == i.id)
                        const sItem = cartLIst?.find(j=>j.id == i.id)

                        return (
                            <Product title={i?.title} image={i?.images?.[0]} price={i?.price} id={i?.id} isinCart={isinCart} key={i.id} cartid={sItem?._id} addToCart={()=>handleAddUpdate(isinCart,i,sItem)}/>
                        )
                        })
                    }
                </div>
            </div>
            }
            </div>
  )
}

export default FlashSale