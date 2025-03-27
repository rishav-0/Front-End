import React from 'react'
import PrimaryBtn from './PrimaryBtn'
import CommentCard from './CommentCard'

const Reviews = (props) => {
    const {item} = props
    console.log(item?.reviews,'rev')
    return (
        <div className='flex w-full'>
            <div className='w-1/3 p-3'>
                <div className="flex items-center justify-center">
                    <div className=" p-3">
                        <div className="flex gap-3 mb-3">
                            <p className="text-4xl font-semibold"></p>
                            <div>
                                <i className="fas fa-star text-xs text-yellow-500"></i>
                                <i className="fas fa-star text-xs text-yellow-500"></i>
                                <i className="fas fa-star text-xs text-yellow-500"></i>
                                <i className="fas fa-star text-xs text-yellow-500"></i>
                                <i className="fas fa-star text-xs text-yellow-500"></i>
                                <p className="text-xs text-slate-400">7837 global ratings</p>
                            </div>
                        </div>
                        <p className="text-sm font-semibold">4.8 of 5</p>
                        <div className="mb-3">
                            <div className="flex gap-3 items-center mb-1">
                                <p className="text-xs text-slate-400 text-nowrap">5 stars</p>
                                <div className="bg-slate-200 h-2 w-full rounded-sm overflow-hidden">
                                    <div className="primaryBtn h-full w-[92%]"></div>
                                </div>
                                <p className="text-xs text-slate-400 text-nowrap">92%</p>
                            </div>
                            <div className="flex gap-3 items-center mb-1">
                                <p className="text-xs text-slate-400 text-nowrap">4 stars</p>
                                <div className="bg-slate-200 h-2 w-full rounded-sm overflow-hidden">
                                    <div className="primaryBtn h-full w-[5%]"></div>
                                </div>
                                <p className="text-xs text-slate-400 text-nowrap">5%</p>
                            </div>
                            <div className="flex gap-3 items-center mb-1">
                                <p className="text-xs text-slate-400 text-nowrap">3 stars</p>
                                <div className="bg-slate-200 h-2 w-full rounded-sm overflow-hidden">
                                    <div className="primaryBtn h-full w-[3%]"></div>
                                </div>
                                <p className="text-xs text-slate-400 text-nowrap">3%</p>
                            </div>
                            <div className="flex gap-3 items-center mb-1">
                                <p className="text-xs text-slate-400 text-nowrap">2 stars</p>
                                <div className="bg-slate-200 h-2 w-full rounded-sm overflow-hidden">
                                    <div className="primaryBtn h-full w-[1%]"></div>
                                </div>
                                <p className="text-xs text-slate-400 text-nowrap">1%</p>
                            </div>
                            <div className="flex gap-3 items-center mb-1">
                                <p className="text-xs text-slate-400 text-nowrap">1 stars</p>
                                <div className="bg-slate-200 h-2 w-full rounded-sm overflow-hidden">
                                    <div className="primaryBtn h-full w-[0%]"></div>
                                </div>
                                <p className="text-xs text-slate-400 text-nowrap">0%</p>
                            </div>

                        </div>
                        <PrimaryBtn title='Write a customer review' className='rounded-md' />
                    </div>
                </div>
            </div>
            <div className="w-2/3">
            {
                item?.reviews.map(i=>{
                    return (
                        <CommentCard rating={i.rating} date={i.date} comment={i.comment} reviewerName={i.reviewerName} />
                    )
                })
            }
               
            </div>
        </div>
    )
}

export default Reviews